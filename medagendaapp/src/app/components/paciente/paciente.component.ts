import { Component } from '@angular/core';
import { Paciente } from '../../models/paciente.model';
import { PacienteService } from '../../services/paciente.service';
import { ICrudList } from '../i-crud-list';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paciente',
  standalone: false,
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.scss'],
})
export class PacienteComponent implements ICrudList<Paciente>{
  termoBusca: string = '';
  constructor(
    private servico: PacienteService,
    private router: Router
  ){ }

  ngOnInit(): void {
    this.get();
  }

  termoBuscaAtual: string | undefined = '';
  registros: Paciente[] = [];
  registrosFiltrados: Paciente[] = []; 
  
  get(termoBusca?: string): void {
    this.termoBuscaAtual = termoBusca;
    this.servico.get(this.termoBuscaAtual).subscribe({
      next: (resposta: Paciente[]) => {
        this.registros = resposta; 
        this.registrosFiltrados = resposta; 
        console.log(this.registros);
      },
      error: (erro) => {
        console.error('Erro ao buscar pacientes:', erro);
      },
    });
  }

  buscarComTermo(termoBusca: string): void {
    termoBusca = termoBusca.trim().toLowerCase();
    this.registrosFiltrados = this.registros.filter(
      (paciente) =>
        paciente.nomeCompleto.toLowerCase().startsWith(termoBusca) ||
        paciente.email.toLowerCase().startsWith(termoBusca) ||
        paciente.telefone.toLowerCase().startsWith(termoBusca)
    );
    console.log('Pacientes filtrados:', this.registrosFiltrados);
  }

  cadastrar(): void {
    this.router.navigate(['/paciente-form']);
  }
  editar(paciente: Paciente): void {
    this.router.navigate(['/paciente-form'], { queryParams: { id: paciente.id } });
  }
  delete(id: number): void {
    if(confirm('Deseja realmente EXCLUIR o paciente?')){
      this.servico.delete(id).subscribe({
        next: () => {
          this.get(this.termoBuscaAtual);
        },
        error: (erro) => {
          console.error('Erro ao excluir paciente:', erro);
        }
      });
    }
  }

}