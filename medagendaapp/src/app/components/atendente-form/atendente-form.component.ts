import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AtendenteService } from '../../services/atendente.service';

@Component({
  selector: 'app-atendente-form',
  standalone: false,
  templateUrl: './atendente-form.component.html',
  styleUrls: ['./atendente-form.component.scss'],
})
export class AtendenteFormComponent implements OnInit {
  atendenteForm!: FormGroup;

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

  constructor(
    private fb: FormBuilder,
    private atendenteService: AtendenteService,
    private router: Router)
  {}

  ngOnInit(): void {
    this.atendenteForm = this.fb.group({
      nomeCompleto: [''],
      cpf: [''],
      especialidadeAtendente: [''],
      telefone: [''],
      email: [''],
      cep: [''],
      bairro: [''],
      endereco: [''],
      estado: [''],
    });
  }

  onSubmit(): void {
    if (this.atendenteForm.valid) {
      const atendente = this.atendenteForm.value;
      this.atendenteService.save(atendente).subscribe({
        next: () => {
          console.log('Atendente salvo com sucesso!');
        },
        error: (err) => {
          console.error('Erro ao salvar atendente:', err);
        }
      });
    } else {
      console.log('Formulário inválido');
    }
  }
  

  onCancel(): void {
    this.router.navigate(['/atendente-usuario']);
  }
}