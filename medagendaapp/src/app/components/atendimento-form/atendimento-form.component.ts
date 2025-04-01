import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-atendimento-form',
  standalone: false,
  templateUrl: './atendimento-form.component.html',
  styleUrls: ['./atendimento-form.component.scss'],
})
export class AtendimentoFormComponent implements OnInit {
  atendimentoForm!: FormGroup;
  especialidades: string[] = []; 

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.atendimentoForm = this.fb.group({
      dataAtendimento: ['', Validators.required],
      horarioAtendimento: ['', Validators.required],
      tipoAtendimento: ['', Validators.required],
      atendente: ['', Validators.required],
      especialidade: ['', Validators.required],
      profissional: ['', Validators.required],
      paciente: ['', Validators.required],
    });

    this.loadEspecialidades();
  }

  loadEspecialidades(): void {
    this.especialidades = ['Clínico Geral', 'Pediatria', 'Cardiologia', 'Dermatologia'];
  }

  onSubmit(): void {
    if (this.atendimentoForm.valid) {
      console.log('Atendimento cadastrado:', this.atendimentoForm.value);
    } else {
      console.log('Formulário inválido');
    }
  }

  onCancel(): void {
    this.atendimentoForm.reset();
  }
}