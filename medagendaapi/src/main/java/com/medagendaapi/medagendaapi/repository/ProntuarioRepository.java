package com.medagendaapi.medagendaapi.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.medagendaapi.medagendaapi.model.Prontuario;

public interface ProntuarioRepository extends JpaRepository<Prontuario, Long> {

    @Query(
        "SELECT p from Prontuario p " + 
        "LEFT JOIN Atendimento a ON a = p.atendimento " +
        "WHERE (:termoBusca IS NULL OR a.medico.nomeCompleto LIKE %:termoBusca%) " +
        "OR (:termoBusca IS NULL OR a.paciente.nomeCompleto LIKE %:termoBusca%) "
    )
    List<Prontuario> busca(String termoBusca);

    @Query(
    "SELECT p FROM Prontuario p " +
    "WHERE p.atendimento.paciente.id = :pacienteId"
    )
    List<Prontuario> buscaPorPaciente(Long pacienteId);

    @Query(
        """
        SELECT p FROM Prontuario p
        WHERE p.atendimento.id = :idAtendimento
        """
    )
    Prontuario buscaPorAtendimento(Long idAtendimento);

    
}
