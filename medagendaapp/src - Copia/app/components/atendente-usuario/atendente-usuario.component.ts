import { Component, OnInit } from '@angular/core';
import { Atendente } from '../../models/atendente.model';
import { Router } from '@angular/router';
import { AtendenteService } from '../../services/atendente.service';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-atendente-usuario',
  imports: [
    MatTableModule,
    CommonModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatCheckboxModule,
    MatSelectModule,
    FormsModule,
  ],
  templateUrl: './atendente-usuario.component.html',
  styleUrl: './atendente-usuario.component.scss',
})
export class AtendenteUsuarioComponent implements OnInit {
  atendentes: Atendente[] = [];
  atendentesFiltrados: Atendente[] = [];
  displayedColumns: string[] = ['nome', 'contato', 'email', 'especialidade', 'acoes'];
  termoBusca: string = '';

  constructor(private atendenteService: AtendenteService, private router: Router) {}

  ngOnInit(): void {
    this.carregarAtendentes();
  }

  carregarAtendentes(): void {
    this.atendenteService.get().subscribe({
      next: (res: Atendente[]) => {
        this.atendentes = res;
        this.atendentesFiltrados = res; 
        console.log('Atendentes carregados:', this.atendentes);
      },
      error: (err) => {
        console.error('Erro ao buscar atendentes:', err.message);
      },
    });
  }

  buscarAtendentes(): void {
    const termo = this.termoBusca.toLowerCase().trim(); 
    this.atendentesFiltrados = this.atendentes.filter(
      (atendente) =>
        atendente.nomeCompleto.toLowerCase().startsWith(termo) 
    );
    console.log('Atendentes filtrados:', this.atendentesFiltrados); 
  }

  adicionarAtendente(): void {
    this.router.navigate(['/atendente-form']);
  }

  deletarAtendente(id: number): void {
    if (confirm('Tem certeza que deseja excluir este atendente?')) {
      this.atendenteService.delete(id).subscribe({
        next: () => {
          this.atendentes = this.atendentes.filter((a) => a.id !== id);
          this.buscarAtendentes(); 
        },
        error: (err) => {
          console.error('Erro ao deletar atendente:', err.message);
        },
      });
    }
  }

  editarAtendente(id: number): void {
    this.router.navigate(['/atendente-form'], { queryParams: { id } });
  }
}