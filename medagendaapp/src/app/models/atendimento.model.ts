import { Paciente } from './paciente.model';
import { Medico } from './medico.model';
import { EAtendimento } from './eatendimento.model';
import { EStatus } from './estatus.model';

export type Atendimento = {
  id?: number;
  dataDeAtendimento: string; // 'YYYY-MM-DD'
  horarioDeAtendimento: string; // 'HH:mm:ss.SSSSSS'
  status: EStatus;
  tipoDeAtendimento: EAtendimento;
  paciente: Paciente;
  medico: Medico;
  idPai?: number;
};
