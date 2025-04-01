import { Component } from '@angular/core';

@Component({
  selector: 'app-profissionais',
  standalone: false,
  templateUrl: './profissionais.component.html',
  styleUrls: ['./profissionais.component.scss'],
})
export class ProfissionaisComponent {
  displayedColumns: string[] = ['nome', 'especialidade', 'contato', 'email', 'acoes'];
  profissionais = [
    { nome: 'John Dayan', especialidade: 'Clínico Geral', contato: '(00) 00000-0000', email: 'aaaaaaaaaaaaa@gmail.com' },
    { nome: 'Cirilo Theo', especialidade: 'Psicologo', contato: '(00) 00000-0000', email: 'aaaaaaaaaaaaa@gmail.com' },
    { nome: 'Grace Horper', especialidade: 'Psiquiatra', contato: '(00) 00000-0000', email: 'aaaaaaaaaaaaa@gmail.com' },
    { nome: 'Roberto Carlos', especialidade: 'Cardiologista', contato: '(00) 00000-0000', email: 'aaaaaaaaaaaaa@gmail.com' },
    { nome: 'Gleice Beatriz', especialidade: 'Pediatra', contato: '(00) 00000-0000', email: 'aaaaaaaaaaaaa@gmail.com' },
    { nome: 'Maria Betanea', especialidade: 'Fisioterapeuta', contato: '(00) 00000-0000', email: 'aaaaaaaaaaaaa@gmail.com' },
  ];
}