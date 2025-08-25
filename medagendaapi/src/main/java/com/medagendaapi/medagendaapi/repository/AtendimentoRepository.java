package com.medagendaapi.medagendaapi.repository;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.medagendaapi.medagendaapi.model.Atendimento;
import com.medagendaapi.medagendaapi.model.EAtendimento;

public interface AtendimentoRepository extends JpaRepository<Atendimento, Long> {

    @Query(
        "SELECT a from Atendimento a " + 
        "LEFT JOIN Medico m on m = a.medico " + 
        "LEFT JOIN Paciente p on p = a.paciente " +
        "WHERE (:termoBusca IS NULL OR m.nomeCompleto LIKE %:termoBusca%) " +
        "OR (:termoBusca IS NULL OR p.nomeCompleto LIKE %:termoBusca%) "
    )
    List<Atendimento> busca(String termoBusca);

    @Query(
        "SELECT a from Atendimento a " + 
        "LEFT JOIN Medico m on m = a.medico " + 
        "LEFT JOIN Paciente p on p = a.paciente " +
        "WHERE (:termoBusca IS NULL OR m.nomeCompleto LIKE %:termoBusca%) " +
        "OR (:termoBusca IS NULL OR p.nomeCompleto LIKE %:termoBusca%) " +
        "AND (:data IS NULL OR a.dataDeAtendimento = :data) " +
        "AND (:tipoDeAtendimento IS NULL OR a.tipoDeAtendimento = :tipoDeAtendimento) "
    )
    Page<Atendimento> buscaPaginada(String termoBusca, LocalDate data, EAtendimento tipoDeAtendimento,  Pageable page);
}
