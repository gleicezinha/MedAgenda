import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component'; 
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { ProfissionaisComponent } from './components/profissionais/profissionais.component';
import { AtendimentoComponent } from './components/atendimento/atendimento.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'reset-password', component: ResetPasswordComponent }, 
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'profissionais', component: ProfissionaisComponent }, 
  {path: 'atendimento', component: AtendimentoComponent },
  { path: 'usuario', component: UsuarioComponent },
  { path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }