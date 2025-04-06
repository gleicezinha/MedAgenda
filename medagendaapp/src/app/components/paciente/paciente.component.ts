import { Component } from '@angular/core';
import { Paciente } from '../../models/paciente.model';
import { PacienteService } from '../../services/paciente.service';
import { ICrudList } from '../i-crud-list';

@Component({
  selector: 'app-paciente',
  standalone: false,
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.scss'],
})
export class PacienteComponent implements ICrudList<Paciente>{
  
  constructor(
    private servico: PacienteService
  ){ }

  ngOnInit(): void {
    this.get();
  }

  registros: Paciente[] = [];
  termoBuscaAtual: string | undefined = '';
  
  get(termoBusca?: string): void {  
    this.termoBuscaAtual = termoBusca;
    this.servico.get(this.termoBuscaAtual).subscribe({
      next: (resposta: Paciente[]) => {
        this.registros = resposta;
        console.log(this.registros);
      }
    });
    
  }

  delete(id: number): void {
    if(confirm('Deseja realmente EXCLUIR o paciente?')){
      this.servico.delete(id).subscribe({
        complete: () => {
          this.get();
        }
      });
    }
  }

}