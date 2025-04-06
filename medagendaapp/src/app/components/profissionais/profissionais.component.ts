import { Component, OnInit } from '@angular/core';
import { Medico } from '../../models/medico.model';
import { MedicoService } from '../../services/medico.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profissionais',
  standalone: false,
  templateUrl: './profissionais.component.html',
  styleUrls: ['./profissionais.component.scss']
})
export class ProfissionaisComponent implements OnInit {
  profissionais: Medico[] = [];
  displayedColumns: string[] = ['nome', 'especialidade', 'contato', 'email', 'acoes'];

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
      },
      error: (err: HttpErrorResponse) => {
        console.error('Erro ao buscar profissionais:', err.message);
      }
    });
  }

  editar(profissional: Medico): void {
    this.router.navigate(['/profissional-form'], { queryParams: { id: profissional.id } });
  }

  adicionar(): void {
    this.router.navigate(['/profissional-form']);
  }

  deletar(profissional: Medico): void {
    if (confirm(`Deseja remover ${profissional.nomeCompleto}?`)) {
      this.medicoService.delete(profissional.id!).subscribe({
        next: () => {
          this.profissionais = this.profissionais.filter(p => p.id !== profissional.id);
          console.log('Removido com sucesso.');
        },
        error: (err: HttpErrorResponse) => {
          console.error('Erro ao remover:', err.message);
        }
      });
    }
  }
}
