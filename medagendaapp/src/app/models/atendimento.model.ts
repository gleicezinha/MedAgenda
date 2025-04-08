import { Paciente } from './paciente.model';
import { Medico } from './medico.model';

export type Atendimento = {
  id?: number;
  dataDeAtendimento: string; // 'YYYY-MM-DD'
  horarioDeAtendimento: string; // 'HH:mm:ss.SSSSSS'
  status: string;
  tipoDeAtendimento: string;
  paciente: Paciente;
  medico: Medico;
  idPai?: number;
  
};
