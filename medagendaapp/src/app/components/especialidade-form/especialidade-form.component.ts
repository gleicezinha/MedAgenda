import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { EspecialidadeService } from '../../services/especialidade.service'; 

@Component({
  selector: 'app-especialidade-form',
  standalone: true, 
  templateUrl: './especialidade-form.component.html',
  styleUrls: ['./especialidade-form.component.scss'],
  imports: [ReactiveFormsModule], 
})
export class EspecialidadeFormComponent implements OnInit {
  especialidadeForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private especialidadeService: EspecialidadeService 
  ) {}

  ngOnInit(): void {
    this.especialidadeForm = this.fb.group({
      nome: ['', Validators.required], 
    });
  }

  onSubmit(): void {
    if (this.especialidadeForm.valid) {
      const especialidade = this.especialidadeForm.value; 
      this.especialidadeService.save(especialidade).subscribe({
        next: () => {
          console.log('Especialidade cadastrada com sucesso!');
          this.router.navigate(['/especialidade']); 
        },
        error: (err) => {
          console.error('Erro ao cadastrar especialidade:', err);
        },
      });
    } else {
      console.log('Formulário inválido');
    }
  }

  onCancel(): void {
    this.router.navigate(['/especialidade']); 
  }
}