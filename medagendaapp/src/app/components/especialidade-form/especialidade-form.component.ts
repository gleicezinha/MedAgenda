import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  idEditando: number | null = null;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute, 
    private especialidadeService: EspecialidadeService 
  ) {}

  ngOnInit(): void {
    this.especialidadeForm = this.fb.group({
      nome: ['', Validators.required], 
    });

    const id = this.route.snapshot.queryParamMap.get('id');
    if (id) {
      this.idEditando = +id; 
      this.carregarEspecialidade(this.idEditando); 
    }
  }

  carregarEspecialidade(id: number): void {
    this.especialidadeService.getById(id).subscribe({
      next: (especialidade) => {
        this.especialidadeForm.patchValue(especialidade); 
      },
      error: (err) => {
        console.error('Erro ao carregar especialidade:', err);
      },
    });
  }

  onSubmit(): void {
    if (this.especialidadeForm.valid) {
      const especialidade = this.especialidadeForm.value;
  
      if (this.idEditando) {
        especialidade.id = this.idEditando;
        this.especialidadeService.save(especialidade).subscribe({
          next: () => {
            console.log('Especialidade atualizada com sucesso!');
            this.router.navigate(['/especialidade']);
          },
          error: (err) => {
            console.error('Erro ao atualizar especialidade:', err);
            if (err.status === 403) {
              alert('Você não tem permissão para atualizar esta especialidade.');
            } else {
              alert('Erro ao atualizar especialidade. Tente novamente mais tarde.');
            }
          },
        });
      } else {
        this.especialidadeService.save(especialidade).subscribe({
          next: () => {
            console.log('Especialidade cadastrada com sucesso!');
            this.router.navigate(['/especialidade']);
          },
          error: (err) => {
            console.error('Erro ao cadastrar especialidade:', err);
            alert('Erro ao cadastrar especialidade. Tente novamente mais tarde.');
          },
        });
      }
    } else {
      console.log('Formulário inválido');
    }
  }

  onCancel(): void {
    this.router.navigate(['/especialidade']); 
  }
}