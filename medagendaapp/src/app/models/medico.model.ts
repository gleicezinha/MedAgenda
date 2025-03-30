import { Especialidade } from "./especialidade.model";

export type Medico = {
    id: number;
    nome: string;
    registroConselho: string;
    telefone: string;
    email: string;
    especialidade_id: number;
    especialidade_nome: string;
    unidade_id: number;
    unidade_nome: string;
}