import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PacienteService } from '../../services/paciente.service';
import { Paciente } from '../../models/paciente.model';

@Component({
  selector: 'app-paciente-form',
  standalone: false,
  templateUrl: './paciente-form.component.html',
  styleUrls: ['./paciente-form.component.scss'],
})
export class PacienteFormComponent implements OnInit {
  pacienteForm!: FormGroup;
  idEditando: number | null = null;

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
  ];

  constructor(
    private fb: FormBuilder,
    private pacienteService: PacienteService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.pacienteForm = this.fb.group({
      nomeCompleto: ['', Validators.required],
      dataNascimento: ['', Validators.required],
      cpf: ['', [Validators.required]],
      telefone: ['', Validators.required],
      telefoneEmergencia: [''],
      email: ['', [Validators.required, Validators.email]],
      sexo: ['', Validators.required],
      grupoSanguineo: ['', Validators.required],
      cep: ['', Validators.required],
      bairro: ['', Validators.required],
      endereco: ['', Validators.required],
      estado: ['', Validators.required],
    });

    const id = this.route.snapshot.queryParamMap.get('id');
    if (id) {
      this.pacienteService.getById(+id).subscribe({
        next: (paciente: Paciente) => {
          this.pacienteForm.patchValue(paciente);
          this.idEditando = paciente.id ?? null;
        },
        error: (err) => {
          console.error('Erro ao carregar paciente:', err);
        }
      });
    }
  }

  onSubmit(): void {
    if (this.pacienteForm.valid) {
      const paciente: Paciente = this.pacienteForm.value;

      if (this.idEditando) {
        paciente.id = this.idEditando;
      }

      this.pacienteService.save(paciente).subscribe({
        next: (pacienteSalvo: Paciente) => {
          console.log('Paciente salvo com sucesso!');
          this.router.navigate(['/paciente-detalhes', pacienteSalvo.id]);
        },
        error: (err) => {
          console.error('Erro ao salvar paciente:', err);
        }
      });
    } else {
      console.log('Formulário inválido');
    }
  }

  onCancel(): void {
    this.router.navigate(['/paciente']);
  }
}
