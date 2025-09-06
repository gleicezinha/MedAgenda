package com.medagendaapi.medagendaapi.controller.mapper;

import org.mapstruct.InheritInverseConfiguration;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import com.medagendaapi.medagendaapi.controller.dto.AtendimentoDto;
import com.medagendaapi.medagendaapi.model.Atendimento;

@Mapper(componentModel = "spring")
public interface AtendimentoMapper {
    
    @Mapping(target = "medico_id", source = "medico.id")
    @Mapping(target = "medico_nome", source = "medico.nomeCompleto")
    @Mapping(target = "paciente_id", source = "paciente.id")
    @Mapping(target = "paciente_nome", source = "paciente.nomeCompleto")
    AtendimentoDto toDto(Atendimento atendimento);

    @InheritInverseConfiguration
    Atendimento toEntity(AtendimentoDto dto);
}
