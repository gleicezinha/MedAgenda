import { Component } from '@angular/core';

@Component({
  selector: 'app-usuario',
  standalone: false,
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss'],
})
export class UsuarioComponent {
  displayedColumns: string[] = ['nome', 'contato', 'email', 'papel', 'acoes'];
  usuarios = [
    { nome: 'John Pablo', contato: '(00) 00000-0000', email: 'johnpablo@gmail.com', papel: 'Admin' },
    { nome: 'João Silva', contato: '(00) 00000-0000', email: 'aaaaaaaaaaaaa@gmail.com', papel: 'Atendente' },
    { nome: 'Antonieta Araujo', contato: '(00) 00000-0000', email: 'aaaaaaaaaaaaa@gmail.com', papel: 'Atendente' },
    { nome: 'Carlos Sousa', contato: '(00) 00000-0000', email: 'aaaaaaaaaaaaa@gmail.com', papel: 'Admin' },
    { nome: 'Juaquinha Moura', contato: '(00) 00000-0000', email: 'aaaaaaaaaaaaa@gmail.com', papel: 'Atendente' },
    { nome: 'Pedro Alves', contato: '(00) 00000-0000', email: 'aaaaaaaaaaaaa@gmail.com', papel: 'Atendente' },
  ];
}