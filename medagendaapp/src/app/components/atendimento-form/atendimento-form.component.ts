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
import { ActivatedRoute, Router } from '@angular/router';

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
  idEditando: number | null = null;

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
    private medicoService: MedicoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.carregarEspecialidades();
  
    this.atendimentoForm = this.fb.group({
      dataDeAtendimento: ['', Validators.required],
      horarioDeAtendimento: ['', Validators.required],
      tipoDeAtendimento: ['', Validators.required],
      atendente: [''],
      especialidade: [''],
      medico: ['', Validators.required],
      paciente: ['', Validators.required]
    });
  
    const id = this.route.snapshot.queryParamMap.get('id');
  
    if (id) {
      this.carregarMedicos();
      this.carregarPacientesComPatch(+id); // 👈 usa método com patch
    } else {
      this.carregarMedicos();
      this.carregarPacientes();
    }
  }

  carregarPacientesComPatch(id: number): void {
    this.pacienteService.get().subscribe({
      next: (pacientes: Paciente[]) => {
        this.pacientes = pacientes;
  
        this.atendimentoService.getById(id).subscribe({
          next: (res) => {
            this.atendimentoForm.patchValue({
              dataDeAtendimento: res.dataDeAtendimento,
              horarioDeAtendimento: res.horarioDeAtendimento,
              medico: res.medico,
              paciente: res.paciente,
              tipoDeAtendimento: res.tipoDeAtendimento,
              status: res.status
            });
            this.idEditando = res.id ?? null;
          }
        });
      }
    });
  }
  

  compararMedicos(m1: Medico, m2: Medico): boolean {
    return m1 && m2 ? m1.id === m2.id : m1 === m2;
  }
  

  compararTipos(tipo1: any, tipo2: any): boolean {
    return tipo1 && tipo2 ? tipo1 === tipo2 : tipo1 === tipo2;
  }
  
  compararPacientes(p1: Paciente, p2: Paciente): boolean {
    return p1 && p2 ? p1.id === p2.id : p1 === p2;
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
      const atendimento = this.atendimentoForm.value;
  
      if (this.idEditando) {
        atendimento.id = this.idEditando;
      }
  
      this.atendimentoService.save(atendimento).subscribe({
        next: () => {
          console.log('Atendimento salvo com sucesso');
          this.router.navigate(['/atendimento']);
        },
        error: (err) => {
          console.error('Erro ao salvar atendimento:', err);
        }
      });
    }
  }  

  cancel(): void {
    this.router.navigate(['/atendimento']);
  }
}
