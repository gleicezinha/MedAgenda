import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-paciente-detalhes',
  standalone: false,
  templateUrl: './paciente-detalhes.component.html',
  styleUrls: ['./paciente-detalhes.component.scss'],
})
export class PacienteDetalhesComponent implements OnInit {
  paciente: any;

  pacientes = [
    {
      id: 1,
      nome: 'Dona Lourdes Medeira Soares Silveira',
      dataNascimento: '23/10/2000',
      cpf: '000.000.000-00',
      contato: '(00) 00000-0000',
      email: 'lourdesmedeira@gmail.com',
      endereco: 'Maria das Dores',
      tipoSanguineo: 'A+',
      sexo: 'Feminino',
      consultas: ['20/12/2022', '20/01/2023', '22/02/2023'],
    },
    {
      id: 2,
      nome: 'João José Machado de Assis',
      dataNascimento: '12/05/1985',
      cpf: '111.111.111-11',
      contato: '(11) 11111-1111',
      email: 'joaoassis@gmail.com',
      endereco: 'Rua Machado de Assis',
      tipoSanguineo: 'O-',
      sexo: 'Masculino',
      consultas: ['15/03/2023', '10/06/2023', '05/09/2023'],
    },
    {
      id: 3,
      nome: 'Tereza das Neves Satana',
      dataNascimento: '05/07/1990',
      cpf: '222.222.222-22',
      contato: '(22) 22222-2222',
      email: 'tereza.satana@gmail.com',
      endereco: 'Rua das Neves',
      tipoSanguineo: 'B+',
      sexo: 'Feminino',
      consultas: ['01/02/2023', '12/04/2023', '20/08/2023'],
    },
    {
      id: 4,
      nome: 'Samandra Bezerra Maia dos Santos',
      dataNascimento: '18/03/1995',
      cpf: '333.333.333-33',
      contato: '(33) 33333-3333',
      email: 'samandra.maia@gmail.com',
      endereco: 'Rua Bezerra Maia',
      tipoSanguineo: 'AB-',
      sexo: 'Feminino',
      consultas: ['10/01/2023', '25/05/2023', '30/09/2023'],
    },
    {
      id: 5,
      nome: 'Glória Mayara Limas de Araújo',
      dataNascimento: '25/12/1988',
      cpf: '444.444.444-44',
      contato: '(44) 44444-4444',
      email: 'gloria.araujo@gmail.com',
      endereco: 'Rua Limas de Araújo',
      tipoSanguineo: 'O+',
      sexo: 'Feminino',
      consultas: ['05/03/2023', '15/07/2023', '20/11/2023'],
    },
    {
      id: 6,
      nome: 'Maria Esperança Conceição Silva',
      dataNascimento: '10/01/1992',
      cpf: '555.555.555-55',
      contato: '(55) 55555-5555',
      email: 'maria.silva@gmail.com',
      endereco: 'Rua Conceição Silva',
      tipoSanguineo: 'A-',
      sexo: 'Feminino',
      consultas: ['12/02/2023', '18/06/2023', '25/10/2023'],
    },
    {
      id: 7,
      nome: 'Daricélio Moreira Soares',
      dataNascimento: '30/06/1980',
      cpf: '666.666.666-66',
      contato: '(66) 66666-6666',
      email: 'daricelio.soares@gmail.com',
      endereco: 'Rua Moreira Soares',
      tipoSanguineo: 'B-',
      sexo: 'Masculino',
      consultas: ['08/01/2023', '22/05/2023', '10/09/2023'],
    },
    {
      id: 8,
      nome: 'Yan Juaquinha da Rocha Junior',
      dataNascimento: '15/09/1998',
      cpf: '777.777.777-77',
      contato: '(77) 77777-7777',
      email: 'yan.junior@gmail.com',
      endereco: 'Rua da Rocha',
      tipoSanguineo: 'AB+',
      sexo: 'Masculino',
      consultas: ['02/03/2023', '14/07/2023', '18/11/2023'],
    },
    {
      id: 9,
      nome: 'Pedro Soares Neymar Roberto',
      dataNascimento: '20/11/1993',
      cpf: '888.888.888-88',
      contato: '(88) 88888-8888',
      email: 'pedro.neymar@gmail.com',
      endereco: 'Rua Neymar Roberto',
      tipoSanguineo: 'O-',
      sexo: 'Masculino',
      consultas: ['10/04/2023', '20/08/2023', '30/12/2023'],
    },
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.paciente = this.pacientes.find((p) => p.id === id);
  }
}