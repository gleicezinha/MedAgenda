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
  displayedColumns: string[] = ['dataDeAtendimento', 'horarioDeAtendimento','status', 'medico', 'paciente', 'tipoDeAtendimento', 'acoes'];
  atendimentos: Atendimento[] = [];
  atendimentosFiltrados: any[] = [];
  termoBusca: string = '';

  constructor(
    private atendimentoService: AtendimentoService, 
    private router: Router) 
  {}

  ngOnInit(): void {
    this.carregarAtendimentos();
  }

  cadastrar(): void {
    this.router.navigate(['/atendimento-form']);
  }

  editar(atendimento: Atendimento): void {
    this.router.navigate(['/atendimento-form'], { queryParams: { id: atendimento.id } });
  }

  buscarComTermo(termoBusca: string): void {
    termoBusca = termoBusca.trim().toLowerCase(); 
    this.atendimentosFiltrados = this.atendimentos.filter(
      (atendimento) =>
        atendimento.medico.nomeCompleto.toLowerCase().startsWith(termoBusca) ||
        atendimento.paciente.nomeCompleto.toLowerCase().startsWith(termoBusca) ||
        atendimento.tipoDeAtendimento.toLowerCase().startsWith(termoBusca)
    );
    console.log('Atendimentos filtrados:', this.atendimentosFiltrados); 
  }

  carregarAtendimentos(): void {
    this.atendimentoService.get().subscribe({
      next: (dados: Atendimento[]) => {
        this.atendimentos = dados;
        this.atendimentosFiltrados = dados; 
      },
      error: (erro: HttpErrorResponse) => {
        console.error('Erro ao buscar atendimentos:', erro);
      }
    });
  }

  excluir(id: number): void {
    if(confirm("Deseja cancelar esse atendimento?")) {
      this.atendimentoService.delete(id).subscribe({
        next: () => {
          this.carregarAtendimentos();
        },
        error(err) {
          console.error('Erro ao excluir atendimento:', err);
          alert('Erro ao excluir atendimento. Verifique se o atendimento não está vinculado a um paciente ou médico.');
        }    
      });
    }
  }

  atualizarStatus(id: number): void {
    if(confirm('Deseja atualizar o status do atendimento?')){
      this.atendimentoService.atualizarStatus(id).subscribe({
        next: () => {
            this.carregarAtendimentos();
        },
        error(err) {
            alert("Erro ao atualizar status");
        }
      });
    }
  }
  
}
