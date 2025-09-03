package com.medagendaapi.medagendaapi.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.medagendaapi.medagendaapi.model.Anamnese;

public interface AnamneseRepository extends JpaRepository<Anamnese, Long>{

    @Query("""
    SELECT a FROM Anamnese a
    WHERE (:termoBusca IS NULL OR a.paciente.nomeCompleto LIKE %:termoBusca%)
    """)
    List<Anamnese> busca(String termoBusca);

}