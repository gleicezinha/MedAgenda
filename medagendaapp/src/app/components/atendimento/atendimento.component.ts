import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Atendimento } from '../../models/atendimento.model';
import { AtendimentoService } from '../../services/atendimento.service';

@Component({
  selector: 'app-atendimento',
  templateUrl: './atendimento.component.html',
  styleUrls: ['./atendimento.component.scss'],
})
export class AtendimentoComponent implements OnInit {
  displayedColumns: string[] = ['data', 'horario', 'profissional', 'paciente', 'acoes'];

  atendimentos$: Observable<Atendimento[]>;

  constructor(private atendimentoService: AtendimentoService) {}

  ngOnInit(): void {
    this.atendimentos$ = this.atendimentoService.getAtendimentos();
  }
}
