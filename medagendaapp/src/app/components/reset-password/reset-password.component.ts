import { Component } from '@angular/core';

@Component({
  selector: 'app-reset-password',
  standalone: false,
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent {
  newPassword: string = '';
  confirmPassword: string = '';

  onResetPassword() {
    if (!this.newPassword || !this.confirmPassword) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    if (this.newPassword !== this.confirmPassword) {
      alert('As senhas não coincidem. Tente novamente.');
      return;
    }

    alert('Senha redefinida com sucesso!');
  }
}