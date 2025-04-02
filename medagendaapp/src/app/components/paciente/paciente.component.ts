import { Component } from '@angular/core';

@Component({
  selector: 'app-paciente',
  standalone: false,
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.scss'],
})
export class PacienteComponent {
  pacientes = [
    { id: 1, nome: 'Dona Lourdes Medeira Soares Silveira', dataNascimento: '23/10/2000', cpf: '000.000.000-00', contato: '(00) 00000-0000', email: 'lourdesmedeira@gmail.com', endereco: 'Maria das Dores', tipoSanguineo: 'A+', sexo: 'Feminino' },
    { id: 2, nome: 'João José Machado de Assis', dataNascimento: '12/05/1985', cpf: '111.111.111-11', contato: '(11) 11111-1111', email: 'joaoassis@gmail.com', endereco: 'Rua Machado de Assis', tipoSanguineo: 'O-', sexo: 'Masculino' },
    { id: 3, nome: 'Tereza das Neves Satana', dataNascimento: '05/07/1990', cpf: '222.222.222-22', contato: '(22) 22222-2222', email: 'tereza.satana@gmail.com', endereco: 'Rua das Neves', tipoSanguineo: 'B+', sexo: 'Feminino' },
    { id: 4, nome: 'Samandra Bezerra Maia dos Santos', dataNascimento: '18/03/1995', cpf: '333.333.333-33', contato: '(33) 33333-3333', email: 'samandra.maia@gmail.com', endereco: 'Rua Bezerra Maia', tipoSanguineo: 'AB-', sexo: 'Feminino' },
    { id: 5, nome: 'Glória Mayara Limas de Araújo', dataNascimento: '25/12/1988', cpf: '444.444.444-44', contato: '(44) 44444-4444', email: 'gloria.araujo@gmail.com', endereco: 'Rua Limas de Araújo', tipoSanguineo: 'O+', sexo: 'Feminino' },
    { id: 6, nome: 'Maria Esperança Conceição Silva', dataNascimento: '10/01/1992', cpf: '555.555.555-55', contato: '(55) 55555-5555', email: 'maria.silva@gmail.com', endereco: 'Rua Conceição Silva', tipoSanguineo: 'A-', sexo: 'Feminino' },
    { id: 7, nome: 'Daricélio Moreira Soares', dataNascimento: '30/06/1980', cpf: '666.666.666-66', contato: '(66) 66666-6666', email: 'daricelio.soares@gmail.com', endereco: 'Rua Moreira Soares', tipoSanguineo: 'B-', sexo: 'Masculino' },
    { id: 8, nome: 'Yan Juaquinha da Rocha Junior', dataNascimento: '15/09/1998', cpf: '777.777.777-77', contato: '(77) 77777-7777', email: 'yan.junior@gmail.com', endereco: 'Rua da Rocha', tipoSanguineo: 'AB+', sexo: 'Masculino' },
    { id: 9, nome: 'Pedro Soares Neymar Roberto', dataNascimento: '20/11/1993', cpf: '888.888.888-88', contato: '(88) 88888-8888', email: 'pedro.neymar@gmail.com', endereco: 'Rua Neymar Roberto', tipoSanguineo: 'O-', sexo: 'Masculino' },
  ];
}