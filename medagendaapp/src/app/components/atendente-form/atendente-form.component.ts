import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Atendente } from '../../models/atendente.model';
import { AtendenteService } from '../../services/atendente.service';
@Component({
  selector: 'app-atendente-form',
  standalone: false,
  templateUrl: './atendente-form.component.html',
  styleUrls: ['./atendente-form.component.scss'],
})
export class AtendenteFormComponent implements OnInit {
  atendenteForm!: FormGroup;
  atendentes: Atendente[] = [];
  idEditando: number | null = null;

  constructor(
    private atendenteService: AtendenteService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute) {}

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



  ngOnInit(): void {
    this.atendenteForm = this.fb.group({
      nomeCompleto: ['', Validators.required],
      cpf: ['', [Validators.required, Validators.pattern(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/)]],
      especialidade: ['', Validators.required],
      telefone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      cep: ['', Validators.required],
      bairro: ['', Validators.required],
      endereco: ['', Validators.required],
      estado: ['', Validators.required],
    });
    const id = this.route.snapshot.queryParamMap.get('id');
    if (id) {
      this.atendenteService.getById(+id).subscribe({
        next: (res: Atendente) => {
          this.atendenteForm.patchValue(res);
        },
        error: (err) => {
          console.error('Erro ao buscar atendente:', err.message);
        },
      });
    }

  }

  onSubmit(): void {
    if (this.atendenteForm.valid) {
      const atendente: Atendente = this.atendenteForm.value;
      if (this.idEditando) {
        atendente.id = this.idEditando;
      }
      this.atendenteService.save(atendente).subscribe({
        next:(atendenteSalvo: Atendente) => {
          console.log('Atendente salvo:', atendenteSalvo);
          this.router.navigate(['/atendente-usuario']);
        },
        error: (err) => {
          console.error('Erro ao salvar atendente:', err.message);
        }
      });
    } else {
      console.log('Formulário inválido');
    }
  }

  onCancel(): void {
    this.router.navigate(['/atendente-usuario']);
    this.atendenteForm.reset();
  }
}