import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MedicoService } from '../../services/medico.service';
import { Medico } from '../../models/medico.model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-profissional-form',
  standalone: false,
  templateUrl: './profissional-form.component.html',
  styleUrls: ['./profissional-form.component.scss']
})
export class ProfissionalFormComponent implements OnInit {
  profissionalForm!: FormGroup;
  ufs = [
    { sigla: 'AC', nome: 'Acre' },
    { sigla: 'AL', nome: 'Alagoas' },
    { sigla: 'AP', nome: 'Amapá' },
    { sigla: 'AM', nome: 'Amazonas' },
    { sigla: 'BA', nome: 'Bahia' },
    { sigla: 'CE', nome: 'Ceará' },
    { sigla: 'DF', nome: 'Distrito Federal' },
    { sigla: 'ES', nome: 'Espírito Santo' },
    { sigla: 'GO', nome: 'Goiás' },
    { sigla: 'MA', nome: 'Maranhão' },
    { sigla: 'MT', nome: 'Mato Grosso' },
    { sigla: 'MS', nome: 'Mato Grosso do Sul' },
    { sigla: 'MG', nome: 'Minas Gerais' },
    { sigla: 'PA', nome: 'Pará' },
    { sigla: 'PB', nome: 'Paraíba' },
    { sigla: 'PR', nome: 'Paraná' },
    { sigla: 'PE', nome: 'Pernambuco' },
    { sigla: 'PI', nome: 'Piauí' },
    { sigla: 'RJ', nome: 'Rio de Janeiro' },
    { sigla: 'RN', nome: 'Rio Grande do Norte' },
    { sigla: 'RS', nome: 'Rio Grande do Sul' },
    { sigla: 'RO', nome: 'Rondônia' },
    { sigla: 'RR', nome: 'Roraima' },
    { sigla: 'SC', nome: 'Santa Catarina' },
    { sigla: 'SP', nome: 'São Paulo' },
    { sigla: 'SE', nome: 'Sergipe' },
    { sigla: 'TO', nome: 'Tocantins' }
  ];

  constructor(private fb: FormBuilder, private medicoService: MedicoService) {}

  ngOnInit(): void {
    this.profissionalForm = this.fb.group({
      nome: ['', Validators.required],
      cpf: [''],
      especialidade: [''],
      contato: [''],
      registroConselho: [''],
      email: ['', [Validators.email]],
      cep: [''],
      bairro: [''],
      uf: [''],
      endereco: ['']
    });
  }

  onSubmit(): void {
    if (this.profissionalForm.valid) {
      const profissional: Medico = this.profissionalForm.value;
      this.medicoService.save(profissional).subscribe({
        next: () => {
          console.log('Profissional salvo com sucesso!');
          this.profissionalForm.reset();
        },
        error: (err: HttpErrorResponse) => {
          console.error('Erro ao salvar profissional:', err.message);
        }
      });
    }
  }

  onCancel(): void {
    this.profissionalForm.reset();
  }
}
