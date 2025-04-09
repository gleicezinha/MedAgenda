import { Component, OnInit } from '@angular/core';
import { Medico } from '../../models/medico.model';
import { MedicoService } from '../../services/medico.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profissionais',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    FormsModule,
  ],
  templateUrl: './profissionais.component.html',
  styleUrls: ['./profissionais.component.scss'],
})
export class ProfissionaisComponent implements OnInit {
  profissionais: Medico[] = [];
  profissionaisFiltrados: Medico[] = [];
  displayedColumns: string[] = ['nome', 'especialidade', 'contato', 'email', 'acoes'];
  termoBusca: string = '';

  constructor(
    private medicoService: MedicoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.carregarProfissionais();
  }

  carregarProfissionais(): void {
    this.medicoService.get().subscribe({
      next: (res: Medico[]) => {
        this.profissionais = res;
        this.profissionaisFiltrados = res; 
      },
      error: (err: HttpErrorResponse) => {
        console.error('Erro ao buscar profissionais:', err.message);
      },
    });
  }

  buscarProfissionais(): void {
    const termo = this.termoBusca.toLowerCase();
    this.profissionaisFiltrados = this.profissionais.filter((profissional) =>
      profissional.nomeCompleto.toLowerCase().startsWith(termo)
    );
  }

  editar(profissional: Medico): void {
    this.router.navigate(['/profissional-form'], { queryParams: { id: profissional.id } });
  }

  adicionar(): void {
    this.router.navigate(['/profissional-form']);
  }

  deletar(profissional: Medico): void {
    console.log('Tentando deletar:', profissional);
    if (confirm(`Deseja remover ${profissional.nomeCompleto}?`)) {
      this.medicoService.delete(profissional.id!).subscribe({
        next: () => {
          this.profissionais = this.profissionais.filter((p) => p.id !== profissional.id);
          this.profissionaisFiltrados = this.profissionaisFiltrados.filter(
            (p) => p.id !== profissional.id
          );
          console.log('Removido com sucesso.');
        },
        error: (err: HttpErrorResponse) => {
          console.error('Erro ao remover:', err.message);
          console.error('Detalhes do erro:', err);
        },
      });
    }
  }
}