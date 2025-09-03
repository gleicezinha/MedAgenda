package com.medagendaapi.medagendaapi.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import com.medagendaapi.medagendaapi.model.Medico;

public interface MedicoRepository extends JpaRepository<Medico, Long> { 

    @Query(
        "SELECT m from Medico m " +
        "WHERE (:termoBusca IS NULL OR m.nomeCompleto LIKE %:termoBusca%) "
    )
    List<Medico> busca(String termoBusca);

    @Query(
        "SELECT m from Medico m " +
        "WHERE (:termoBusca IS NULL OR m.nomeCompleto LIKE %:termoBusca%) "
    )
    Page<Medico> buscaPaginada(String termoBusca, Pageable page);
}
