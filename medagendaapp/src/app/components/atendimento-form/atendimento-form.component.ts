import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AtendimentoService } from '../../services/atendimento.service';
import { Paciente } from '../../models/paciente.model';
import { Medico } from '../../models/medico.model';
import { Atendimento } from '../../models/atendimento.model';
import { EAtendimento } from '../../models/eatendimento.model';
import { EStatus } from '../../models/estatus.model';
import { PacienteService } from '../../services/paciente.service';
import { MedicoService } from '../../services/medico.service';

@Component({
  selector: 'app-atendimento-form',
  standalone: false,
  templateUrl: './atendimento-form.component.html',
  styleUrls: ['./atendimento-form.component.scss'],
})
export class AtendimentoFormComponent implements OnInit {
  atendimentoForm!: FormGroup;
  tiposDeAtendimento = Object.values(EAtendimento);
  pacientes: Paciente[] = [];
  profissionais: Medico[] = [];
  especialidades: string[] = [];

  carregarEspecialidades(): void {
    this.especialidades = [
      'Clínico Geral',
      'Pediatria',
      'Cardiologia',
      'Dermatologia',
      'Neurologia',
      'Ortopedia'
    ];
  }


  constructor(
    private fb: FormBuilder,
    private atendimentoService: AtendimentoService,
    private pacienteService: PacienteService,
    private medicoService: MedicoService
  ) {}

  ngOnInit(): void {
    this.atendimentoForm = this.fb.group({
      dataDeAtendimento: ['', Validators.required],
      horarioDeAtendimento: ['', Validators.required],
      tipoDeAtendimento: ['', Validators.required],
      paciente: [null, Validators.required],
      medico: [null, Validators.required],
      status: [EStatus.AGENDADO]
    });

    this.carregarEspecialidades();
    this.carregarPacientes();
    this.carregarMedicos();
  }

  carregarPacientes(): void {
    this.pacienteService.get().subscribe({
      next: (res: Paciente[]) => {
        this.pacientes = res;
      }
    });
  }

  carregarMedicos(): void {
    this.medicoService.get().subscribe({
      next: (res: Medico[]) => {
        this.profissionais = res;
      }
    });
  }

  onSubmit(): void {
    if (this.atendimentoForm.valid) {
      const atendimento: Atendimento = this.atendimentoForm.value;

      atendimento.horarioDeAtendimento += ':00.000000';

      this.atendimentoService.create(atendimento).subscribe({
        next: (res) => {
          console.log('Atendimento criado com sucesso:', res);
          this.atendimentoForm.reset();
        },
        error: (err) => {
          console.error('Erro ao criar atendimento:', err);
        }
      });
    } else {
      console.log('Formulário inválido');
    }
  }

  onCancel(): void {
    this.atendimentoForm.reset();
  }
}
