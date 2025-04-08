import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AtendenteService } from '../../services/atendente.service';
import { Atendente } from '../../models/atendente.model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-atendente-form',
  standalone: false,
  templateUrl: './atendente-form.component.html',
  styleUrls: ['./atendente-form.component.scss'],
})
export class AtendenteFormComponent implements OnInit {
  atendenteForm!: FormGroup;
  idEditando: number | null = null;

  ufs = [
    { sigla: 'AC', nome: 'Acre' },
    { sigla: 'AL', nome: 'Alagoas' },
    { sigla: 'AM', nome: 'Amazonas' },
    { sigla: 'BA', nome: 'Bahia' },
    { sigla: 'CE', nome: 'Ceará' },
    { sigla: 'DF', nome: 'Distrito Federal' },
    { sigla: 'ES', nome: 'Espírito Santo' },
    { sigla: 'GO', nome: 'Goiás' },
    { sigla: 'MA', nome: 'Maranhão' },
    { sigla: 'MG', nome: 'Minas Gerais' },
    { sigla: 'MS', nome: 'Mato Grosso do Sul' },
    { sigla: 'MT', nome: 'Mato Grosso' },
    { sigla: 'PA', nome: 'Pará' },
    { sigla: 'PB', nome: 'Paraíba' },
    { sigla: 'PE', nome: 'Pernambuco' },
    { sigla: 'PI', nome: 'Piauí' },
    { sigla: 'PR', nome: 'Paraná' },
    { sigla: 'RJ', nome: 'Rio de Janeiro' },
    { sigla: 'RN', nome: 'Rio Grande do Norte' },
    { sigla: 'RO', nome: 'Rondônia' },
    { sigla: 'RR', nome: 'Roraima' },
    { sigla: 'RS', nome: 'Rio Grande do Sul' },
    { sigla: 'SC', nome: 'Santa Catarina' },
    { sigla: 'SE', nome: 'Sergipe' },
    { sigla: 'SP', nome: 'São Paulo' },
    { sigla: 'TO', nome: 'Tocantins' }
  ];

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private atendenteService: AtendenteService
  ) {}

  ngOnInit(): void {
    this.atendenteForm = this.fb.group({
      nomeCompleto: ['', Validators.required],
      cpf: ['', Validators.required],
      especialidadeAtendente: ['', Validators.required],
      telefone: [''],
      email: ['', [Validators.email]],
      cep: [''],
      bairro: [''],
      estado: [''],
      endereco: ['']
    });

    const idParam = this.route.snapshot.queryParamMap.get('id');
    if (idParam) {
      this.idEditando = +idParam;
      this.atendenteService.getById(this.idEditando).subscribe({
        next: (res: Atendente) => {
          this.atendenteForm.patchValue(res);
        },
        error: (err: HttpErrorResponse) => {
          console.error('Erro ao carregar atendente:', err.message);
        }
      });
    }
  }

  save(): void {
    if (this.atendenteForm.invalid) return;

    const atendente: Atendente = this.atendenteForm.value;

    if (this.idEditando) {
      atendente.id = this.idEditando;
    }

    this.atendenteService.save(atendente).subscribe({
      next: () => {
        console.log('Atendente salvo com sucesso!');
        this.atendenteForm.reset();
        this.router.navigate(['/atendente-usuario']);
      },
      error: (err: HttpErrorResponse) => {
        console.error('Erro ao salvar atendente:', err.message);
      }
    });
  }

  cancel(): void {
    this.router.navigate(['/atendente-usuario']);
  }
}