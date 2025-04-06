import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-usuario-form',
  standalone: false,
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.scss']
})
export class UsuarioFormComponent implements OnInit {
  usuarioForm!: FormGroup;
  idEditando: number | null = null;
  papeis = ['ADMIN', 'ATENDENTE'];

  constructor(
    private fb: FormBuilder,
    private usuarioService: UsuarioService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.usuarioForm = this.fb.group({
      nomeUsuario: ['', Validators.required],
      telefone: [''],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', Validators.required],
      papel: ['', Validators.required]
    });

    const id = this.route.snapshot.queryParamMap.get('id');
    if (id) {
      this.usuarioService.getById(+id).subscribe({
        next: (res: Usuario) => {
          this.usuarioForm.patchValue(res);
          this.idEditando = res.id ?? null;
        }
      });
    }
  }

  onSubmit(): void {
    if (this.usuarioForm.valid) {
      const usuario: Usuario = this.usuarioForm.value;
      if (this.idEditando) usuario.id = this.idEditando;

      this.usuarioService.save(usuario).subscribe({
        next: () => this.router.navigate(['/usuarios']),
        error: (err) => console.error('Erro ao salvar usuário:', err)
      });
    }
  }

  cancel(): void {
    this.router.navigate(['/usuario']);
  }
}
