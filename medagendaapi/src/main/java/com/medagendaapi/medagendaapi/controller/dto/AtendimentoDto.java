package com.medagendaapi.medagendaapi.controller.dto;

import java.time.LocalDate;
import java.time.LocalTime;

public record AtendimentoDto(
    Long id,
    LocalDate dataDeAtendimento,
    LocalTime horarioDeAtendimento,
    String status,
    Long medico_id,
    String medico_nome,
    Long paciente_id,
    String paciente_nome,
    String tipoDeAtendimento,
    String problemaRelatado,
    Long idPai
) {
    
}
