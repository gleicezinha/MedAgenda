import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Login } from '../models/login.model';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(
    private http: HttpClient,
    private router: Router
  ){
    const dadosUsuario = sessionStorage.getItem('usuario') || '{}';
    const usuario = JSON.parse(dadosUsuario);
    if (this.estaLogado()) {
      this.agendarRenovacaoToken();
    }
  }

  usuarioAutenticado: BehaviorSubject<Usuario> = new BehaviorSubject<Usuario>(<Usuario>{});
  private temRequisicaoRecente: boolean = false;
  private intervaloRenovacaoToken: any;

  private agendarRenovacaoToken(): void {
    const intervalo = 60000;
    this.intervaloRenovacaoToken = setInterval(() => {
      if (this.temRequisicaoRecente) {
        this.renovarToken();
        this.temRequisicaoRecente = false;
      }
    }, intervalo);
  }

  private renovarToken(): void {
    const url = environment.API_URL + 'renovar';
    this.http.get(url, {responseType: 'text'}).subscribe({
      next: (token: string) => {
        this.iniciarSessaoUsuario(token);
      }
    })
  }

  private iniciarSessaoUsuario(token: string): void {
    const dados = token.split('.')[1];
    const dadosDecodificados = atob(dados);
    const conteudoToken = JSON.parse(dadosDecodificados);
    const expiracao = conteudoToken.exp * 1000;
    
    const usuario = <Usuario>{};
    usuario.cpf = conteudoToken.sub;
    usuario.nomeUsuario = conteudoToken.nomeCompleto;;
    usuario.papel = conteudoToken.papel;

    sessionStorage.setItem('token', token);
    sessionStorage.setItem('usuario', JSON.stringify(usuario));
    sessionStorage.setItem('expiracao', expiracao.toString());

    this.usuarioAutenticado.next(usuario);
  }

  login(usuario: Usuario): void {
    const url = environment.API_URL + '/autenticacao';
    this.http.post(url, usuario, {responseType: 'text'}).subscribe({
      next: (token: string) => {
        this.iniciarSessaoUsuario(token);
      },
      complete: () => {
        this.router.navigate(['atendimento'])
      }
    })
  }

  logout(): void {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('usuario');
    sessionStorage.removeItem('expiracao');
    document.cookie = 'XSRF-TOKEN=; Max-Age=0; path=/';
    clearInterval(this.intervaloRenovacaoToken);
    this.router.navigate(['/login']);
  }

  estaLogado(): boolean {
    const token = sessionStorage.getItem('token');
    if (token == null){
      return false;
    }

    const expiracao = sessionStorage.getItem('expiracao');
    const dataExpiracao = new Date(Number(expiracao));
    const agora = new Date();
    const estaExpirado = agora > dataExpiracao;
    if (estaExpirado){
      this.logout();
    }

    return !estaExpirado;

  }

  getCabecalho(requisicao: HttpRequest<any>): HttpRequest<any> {
    const token = sessionStorage.getItem('token');
    if (token) {
      this.temRequisicaoRecente = true;
      return requisicao.clone({
        withCredentials: true,
        headers: requisicao.headers.set('Authorization', 'Bearer ' + token)
      });
    }
    return requisicao;
  }


}