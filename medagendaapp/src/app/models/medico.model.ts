import { Especialidade } from "./especialidade.model";

export type Medico = {
    id: number;
    nomeCompleto: string;
    registroConselho: string;
    telefone: string;
    email: string;
    especialidade: Especialidade;
}