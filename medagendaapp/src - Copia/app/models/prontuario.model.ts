import { Atendimento } from "./atendimento.model";
import { Paciente } from "./paciente.model";
import { Medico } from "./medico.model";

export type Prontuario = {
    id: number;
    problemaRelatado: string;
    descricao: string;
    prescricao: string;
    atendimento: Atendimento;
    temAlergia: boolean;
    qualAlergia: string;
    temRemedio: boolean;
    qualRemedio: string;
    temDoencaCognitiva: boolean;
    qualDoencaCognitiva: string;
}