import { Especialidade } from "./especialidade.model";

export type Medico = {
  id?: number;
  nomeCompleto: string;
  registroConselho: string;
  especialidade: Especialidade;
  cpf: string;
  email: string;
  telefone: string;
  cep: string;
  estado: string;
  bairro: string;
  endereco: string;
};
