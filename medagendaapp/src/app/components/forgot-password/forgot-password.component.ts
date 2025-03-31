import { Component } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  standalone: false,
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent {
  email: string = '';

  onSubmit() {
    if (!this.email) {
      alert('Por favor, insira um email válido.');
      return;
    }

    alert('Se o email estiver cadastrado, você receberá um link para redefinir sua senha.');
  }
}