import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-paciente-form',
  standalone: false,
  templateUrl: './paciente-form.component.html',
  styleUrls: ['./paciente-form.component.scss'],
})
export class PacienteFormComponent implements OnInit {
  pacienteForm!: FormGroup;

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
    { sigla: 'TO', nome: 'Tocantins' },
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.pacienteForm = this.fb.group({
      nome: ['', Validators.required],
      dataNascimento: ['', Validators.required],
      cpf: ['', [Validators.required, Validators.pattern(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/)]],
      contato: ['', Validators.required],
      contatoEmergencia: [''],
      email: ['', [Validators.required, Validators.email]],
      sexo: ['', Validators.required],
      tipoSanguineo: ['', Validators.required],
      cep: ['', Validators.required],
      bairro: ['', Validators.required],
      endereco: ['', Validators.required],
      uf: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.pacienteForm.valid) {
      console.log('Paciente cadastrado:', this.pacienteForm.value);
    } else {
      console.log('Formulário inválido');
    }
  }

  onCancel(): void {
    this.pacienteForm.reset();
  }
}