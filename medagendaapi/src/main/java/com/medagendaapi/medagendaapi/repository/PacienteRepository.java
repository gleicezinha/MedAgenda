package com.medagendaapi.medagendaapi.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.medagendaapi.medagendaapi.model.Paciente;

public interface PacienteRepository extends JpaRepository<Paciente, Long> {
    @Query(
        "SELECT p from Paciente p " +
        "WHERE (:termoBusca IS NULL OR p.nomeCompleto LIKE %:termoBusca%)"
    )
    List<Paciente> busca(String termoBusca);
}
