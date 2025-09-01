package com.medagendaapi.medagendaapi.repository;

import java.util.List;

import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.medagendaapi.medagendaapi.model.Paciente;

public interface PacienteRepository extends JpaRepository<Paciente, Long> {
    @Query(
        "SELECT p from Paciente p " +
        "WHERE (:termoBusca IS NULL OR p.nomeCompleto LIKE %:termoBusca%) " +
        "AND (:termoBusca IS NULL OR p.cpf LIKE %:termoBusca%) "
    )
    List<Paciente> busca(String termoBusca);

    @Query(
        "SELECT p from Paciente p " +
        "WHERE (:termoBusca IS NULL OR p.nomeCompleto LIKE %:termoBusca%) " +
        "AND (:termoBusca IS NULL OR p.cpf LIKE %:termoBusca%) "
    )
    Page<Paciente> buscaPaginada(String termoBusca, Pageable page);

    @Query(
        "SELECT p from Paciente p " + 
        "WHERE p.cpf = :cpf "
    )
    Paciente buscaPorCpf(String cpf);
}
