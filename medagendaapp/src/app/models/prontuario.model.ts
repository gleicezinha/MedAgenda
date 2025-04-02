export type Prontuario = {
    id: number;
    data: string;
    paciente_id: number;
    paciente_nome: string;
    medico_id: number;
    medico_nome: string;
    TipoDeAtendimento_id: number;
    TipoDeAtendimento_nome: string;
    temAlergia: boolean;
    qualAlergia: string;
    temDoencaCognitiva: boolean;
    qualDoencaCognitiva: string;
    temRemedio: boolean;
    qualRemedio: string;
};
