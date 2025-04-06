import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { Atendimento } from '../../models/atendimento.model';
import { AtendimentoService } from '../../services/atendimento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-atendimento',
  standalone: false,
  templateUrl: './atendimento.component.html',
  styleUrls: ['./atendimento.component.scss'],
})
export class AtendimentoComponent implements OnInit {
  displayedColumns: string[] = ['dataDeAtendimento', 'horarioDeAtendimento', 'medico', 'paciente', 'tipoDeAtendimento', 'acoes'];
  atendimentos: Atendimento[] = [];

  constructor(
    private atendimentoService: AtendimentoService, 
    private router: Router) 
  {}

  ngOnInit(): void {
    this.carregarAtendimentos();
  }

  carregarAtendimentos(): void {
    this.atendimentoService.get().subscribe({
      next: (dados: Atendimento[]) => {
        this.atendimentos = dados;
      },
      error: (erro: HttpErrorResponse) => {
        console.error('Erro ao buscar atendimentos:', erro);
      }
    });
  }

  editar(atendimento: Atendimento): void {
    this.router.navigate(['/atendimento-form'], { queryParams: { id: atendimento.id } });
  }
  
}
