import { Component, OnInit } from '@angular/core';
import { Atendente } from '../../models/atendente.model';
import { Router } from '@angular/router';
import { AtendenteService } from '../../services/atendente.service';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-atendente-usuario',
  imports: [MatTableModule,    CommonModule, MatFormFieldModule,
    MatIconModule],
  templateUrl: './atendente-usuario.component.html',
  styleUrl: './atendente-usuario.component.scss'
})
export class AtendenteUsuarioComponent implements OnInit{
  atendentes: Atendente[] = [];
  displayedColumns: string[] = ['nome', 'contato', 'email', 'especialidade', 'acoes'];

  constructor(
    private atendenteService: AtendenteService,
    private router: Router
    
  ) {}
  ngOnInit(): void {
    this.get();
  }

  get(termoBusca?: string): void {
    this.atendenteService.get().subscribe({
      next: (res: Atendente[]) => {
        this.atendentes = res;
        console.log('Atendentes:', this.atendentes);
      },
      error: (err) => {
        console.error('Erro ao buscar atendentes:', err.message);
      }
    });
  }

  adicionarAtendente(): void {
    this.router.navigate(['/atendente-form']);
  }

  deletarAtendente(id: number): void {
    if (confirm('Tem certeza que deseja excluir este atendente?')) {
      this.atendenteService.delete(id).subscribe({
        next: () => {
          this.atendentes = this.atendentes.filter(a => a.id !== id);
        },
        error: (err) => {
          console.error('Erro ao deletar atendente:', err.message);
        }
      });
    }
  }

  editarAtendente(id: number): void {
    this.router.navigate(['/atendente-form'], { queryParams: { id } });
  }
}
