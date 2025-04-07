import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Paciente } from '../../models/paciente.model';
import { PacienteService } from '../../services/paciente.service';
import { Atendimento } from '../../models/atendimento.model';
import { AtendimentoService } from '../../services/atendimento.service';
import { ProntuarioService } from '../../services/prontuario.service';
import { Prontuario } from '../../models/prontuario.model';

@Component({
  selector: 'app-paciente-detalhes',
  standalone: false,
  templateUrl: './paciente-detalhes.component.html',
  styleUrls: ['./paciente-detalhes.component.scss'],
})
export class PacienteDetalhesComponent implements OnInit {
  pacientes: Paciente[] = []
  atendimentos: Atendimento[] = [];
  prontuarios: Prontuario[] = []; 


  constructor(
    private atendimentoService: AtendimentoService,
    private route: ActivatedRoute,
    private pacienteService: PacienteService,
    private prontuarioService: ProntuarioService,
  ) {}
getAtendimentosPorPacienteId(id: number): void {
  this.atendimentoService.getByPacienteId(id).subscribe({
    next: (resposta: Atendimento[]) => {
      // Processa os dados de atendimento, se necessário
      this.atendimentos = resposta.map((atendimento) => ({
        ...atendimento,
        dataDeAtendimento: new Date(atendimento.dataDeAtendimento).toLocaleDateString('pt-BR'), // Formata a data
      }));
      console.log('Atendimentos processados:', this.atendimentos);
    },
    error: (err) => {
      console.error('Erro ao buscar atendimentos:', err);
    },
  });
}

  carregarPacienteDetalhes(): void {
    this.route.params.subscribe((params) => {
      const pacienteId = +params['id']; // Captura o parâmetro 'id' da rota
      if (pacienteId) {
        this.pacienteService.getById(pacienteId).subscribe({
          next: (resposta: Paciente) => {
            this.pacientes = [resposta]; // Armazena o paciente encontrado em um array
            console.log(this.pacientes);
          },
        });
      } else {
        console.error('ID do paciente não encontrado na rota.');
      }
    });
  }

  ngOnInit(): void {

    this.route.params.subscribe((params) => {
      const pacienteId = +params['id']; // Captura o parâmetro 'id' da rota
      if (pacienteId) {
        this.getAtendimentosPorPacienteId(pacienteId); // Chama o método para buscar os atendimentos
        this.carregarPacienteDetalhes(); // Pode ser ajustado para carregar detalhes do paciente
      } else {
        console.error('ID do paciente não encontrado na rota.');
      }
    });
  }

}