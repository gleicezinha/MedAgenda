export type Atendimento = {
    id: number;
    data: string;
    hora: string;
    status: string;
    paciente_id: number;
    paciente_nome: string;
    medico_id: number;
    medico_nome: string;
    TipoDeAtendimento_id: number;
    TipoDeAtendimento_nome: string;
}