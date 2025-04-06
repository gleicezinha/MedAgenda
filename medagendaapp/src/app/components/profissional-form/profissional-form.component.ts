
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MedicoService } from '../../services/medico.service';
import { ActivatedRoute, Router } from '@angular/router';
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
  idEditando: number | null = null;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private medicoService: MedicoService,
    private router: Router
  ) {}

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

    const idParam = this.route.snapshot.queryParamMap.get('id');
    if (idParam) {
      this.idEditando = +idParam;
      this.medicoService.getById(this.idEditando).subscribe((res: Medico) => {
        this.profissionalForm.patchValue({
          nome: res.nomeCompleto,
          cpf: res.cpf,
          especialidade: res.especialidade.nome,
          contato: res.telefone,
          registroConselho: res.registroConselho,
          email: res.email,
          cep: res.cep,
          bairro: res.bairro,
          uf: res.estado,
          endereco: res.endereco
        });
      });
    }
  }

  save(): void {
    if (this.profissionalForm.valid) {
      const profissional: Medico = this.profissionalForm.value;
      if (this.idEditando) profissional.id = this.idEditando;

      this.medicoService.save(profissional).subscribe({
        next: () => {
          console.log('Profissional salvo com sucesso!');
          this.profissionalForm.reset();
          this.router.navigate(['/profissionais']);
        },
        error: (err: HttpErrorResponse) => {
          console.error('Erro ao salvar profissional:', err.message);
        }
      });
    }
  }

  cancel(): void {
    this.router.navigate(['/profissionais']);
  }
}
