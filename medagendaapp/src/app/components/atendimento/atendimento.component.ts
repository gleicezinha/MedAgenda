import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Atendimento } from '../../models/atendimento.model';
import { AtendimentoService } from '../../services/atendimento.service';

@Component({
  selector: 'app-atendimento',
  standalone: false,
  templateUrl: './atendimento.component.html',
  styleUrls: ['./atendimento.component.scss'],
})
export class AtendimentoComponent {
  displayedColumns: string[] = ['data', 'horario', 'profissional', 'paciente', 'acoes'];
  atendimentos = [
    { data: '20/12/2022', horario: '12:24', profissional: 'John Dayan', paciente: 'Dona Lourdes Medeira Soares Silveira' },
    { data: '23/12/2023', horario: '13:24', profissional: 'Maria Rita', paciente: 'Gustavo Raimundo' },
    { data: '12/12/2022', horario: '11:50', profissional: 'Grace Horper', paciente: 'Vianney Montanha' },
    { data: '14/04/2022', horario: '07:44', profissional: 'Alok Sampaio', paciente: 'Rihanna Silva' },
    { data: '29/02/2026', horario: '17:00', profissional: 'Maria Betanea', paciente: 'Chiclete com Banana' },
    { data: '06/06/2024', horario: '15:15', profissional: 'Roberto Carlos', paciente: 'Luiz Gonzaga' },
  ];
}