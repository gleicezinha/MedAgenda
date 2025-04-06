import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card'; 
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FullCalendarModule } from '@fullcalendar/angular';
import { HttpClientModule } from '@angular/common/http'; // ✅ Import necessário

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
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


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    UsuarioComponent,
    ProfissionaisComponent,
    ProfissionalFormComponent,
    AtendimentoComponent,
    AtendimentoFormComponent,
    PacienteComponent,
    PacienteFormComponent, 
    PacienteDetalhesComponent,
    AtendenteFormComponent,
    EspecialidadeFormComponent,
    CalendarioComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule, // ✅ Aqui está a importação adicionada
    FullCalendarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatCheckboxModule,
    MatCardModule,
    MatToolbarModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
