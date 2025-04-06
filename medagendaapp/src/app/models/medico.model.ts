import { Especialidade } from "./especialidade.model";

export type Medico = {
    id: number;
    nome: string;
    registroConselho: string;
    telefone: string;
    email: string;
    especialidade: Especialidade;
}