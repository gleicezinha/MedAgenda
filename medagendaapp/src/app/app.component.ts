import { Component, OnInit } from '@angular/core';
import { LoginService } from './services/login.service';
import { Usuario } from './models/usuario.model';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'medagendaapp';
  menuOpen = false;
  nomeUsuario: string | null = '';
  papelUsuario: string | null = '';

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {

    this.loginService.usuario$.subscribe((usuario: Usuario | null) => {
      this.nomeUsuario = usuario?.nomeUsuario || null;
      this.papelUsuario = usuario?.papel || null;
    });
    this.atualizarInformacoesUsuario();
  }

  atualizarInformacoesUsuario(): void {
    const nomeAtual = sessionStorage.getItem('nomeUsuario');
    const papelAtual = sessionStorage.getItem('papelUsuario');

    if (this.nomeUsuario !== nomeAtual || this.papelUsuario !== papelAtual) {
      this.nomeUsuario = nomeAtual;
      this.papelUsuario = papelAtual;
    }
  }
  

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }
}