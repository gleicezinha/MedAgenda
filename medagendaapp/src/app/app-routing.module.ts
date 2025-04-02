import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component'; 
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { ProfissionaisComponent } from './components/profissionais/profissionais.component';
import { AtendimentoComponent } from './components/atendimento/atendimento.component';
import { PacienteComponent } from './components/paciente/paciente.component';
import { PacienteDetalhesComponent } from './components/paciente-detalhes/paciente-detalhes.component';
import { PacienteFormComponent } from './components/paciente-form/paciente-form.component';
import { ProfissionalFormComponent } from './components/profissional-form/profissional-form.component';
import { AtendimentoFormComponent } from './components/atendimento-form/atendimento-form.component';
import { AtendenteFormComponent } from './components/atendente-form/atendente-form.component';
import { EspecialidadeFormComponent } from './components/especialidade-form/especialidade-form.component';
import { CalendarioComponent } from './components/calendario/calendario.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'reset-password', component: ResetPasswordComponent }, 
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'profissionais', component: ProfissionaisComponent }, 
  {path: 'atendimento', component: AtendimentoComponent },
  {path: 'paciente', component: PacienteComponent },
  {path: 'paciente-form', component: PacienteFormComponent },
  { path: 'paciente-detalhes/:id', component: PacienteDetalhesComponent }, 
  {path: 'profissional-form', component: ProfissionalFormComponent },
  { path: 'usuario', component: UsuarioComponent },
  {path: 'atendimento-form', component: AtendimentoFormComponent},
  {path: 'atendente-form', component: AtendenteFormComponent},
  {path: 'especialidade-form', component: EspecialidadeFormComponent},
  {path: 'calendario', component: CalendarioComponent},
  { path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }