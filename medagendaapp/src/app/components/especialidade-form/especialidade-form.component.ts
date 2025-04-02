import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-especialidade-form',
  standalone: false,
  templateUrl: './especialidade-form.component.html',
  styleUrls: ['./especialidade-form.component.scss'],
})
export class EspecialidadeFormComponent implements OnInit {
  especialidadeForm!: FormGroup;
  especialidades: string[] = []; 

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.especialidadeForm = this.fb.group({
      nome: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.especialidadeForm.valid) {
      const especialidade = this.especialidadeForm.value.nome;
      this.especialidades.push(especialidade); // Adiciona a especialidade à lista
      console.log('Especialidade cadastrada:', especialidade);
      this.especialidadeForm.reset();
    } else {
      console.log('Formulário inválido');
    }
  }

  onCancel(): void {
    this.especialidadeForm.reset();
  }
}