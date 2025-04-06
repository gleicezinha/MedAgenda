import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario.model';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario',
  standalone: false,
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {
  usuarios: Usuario[] = [];
  displayedColumns: string[] = ['nome', 'contato', 'email', 'papel', 'acoes'];

  constructor(
    private usuarioService: UsuarioService,
    private router: Router) {}

  ngOnInit(): void {
    this.usuarioService.get().subscribe({
      next: (res: Usuario[]) => {
        this.usuarios = res;
      },
      error: (err: HttpErrorResponse) => {
        console.error('Erro ao buscar usuários:', err.message);
      }
    });
  }

  adicionarUsuario(): void {
    this.router.navigate(['/usuario-form']);
  }
  
  editarUsuario(id: number): void {
    this.router.navigate(['/usuario-form'], { queryParams: { id } });
  }
  
  deletarUsuario(id: number): void {
    if (confirm('Tem certeza que deseja excluir este usuário?')) {
      this.usuarioService.delete(id).subscribe({
        next: () => {
          this.usuarios = this.usuarios.filter(u => u.id !== id);
        }
      });
    }
  }


  deletar(usuario: Usuario): void {
    if (confirm(`Deseja realmente remover ${usuario.nomeUsuario}?`)) {
      this.usuarioService.delete(usuario.id!).subscribe({
        next: () => {
          this.usuarios = this.usuarios.filter(u => u.id !== usuario.id);
          console.log('Usuário removido com sucesso!');
        },
        error: (err: HttpErrorResponse) => {
          console.error('Erro ao remover usuário:', err.message);
        }
      });
    }
  }
}
