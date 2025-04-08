import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Usuario } from '../../models/usuario.model';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCard } from '@angular/material/card';


@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  imports: [
    ReactiveFormsModule,
    MatCheckboxModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatCard
  ],
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  formularioLogin: FormGroup;
  erro: string | null = null;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {
    this.formularioLogin = this.fb.group({
      cpf: ['', [Validators.required]],
      senha: ['', [Validators.required]]
    });
  }

  fazerLogin(): void {
    if (this.formularioLogin.invalid) {
      this.erro = 'Preencha todos os campos';
      return;
    }

    const usuario = <Usuario>{}
    usuario.cpf = this.formularioLogin.value.cpf;
    usuario.senha = this.formularioLogin.value.senha;

    try {
      this.loginService.login(usuario);
    } catch (e) {
      this.erro = 'Erro ao realizar login';
      console.error(e);
    }
  }

  irParaEsqueciSenha(): void {
    this.router.navigate(['/forgot-password']); 
  }

}
