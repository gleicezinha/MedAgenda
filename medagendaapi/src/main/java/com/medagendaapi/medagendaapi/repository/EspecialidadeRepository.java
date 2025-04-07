package com.medagendaapi.medagendaapi.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.medagendaapi.medagendaapi.model.Especialidade;

public interface EspecialidadeRepository extends JpaRepository<Especialidade, Long> {

    @Query(
        """
        SELECT e from Especialidade e
        WHERE (:termoBusca IS NULL OR e.nome LIKE %:termoBusca%)
        """
    )
    List<Especialidade> busca (String termoBusca);
    
}
