package com.medagendaapi.medagendaapi.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import com.medagendaapi.medagendaapi.model.Atendente;

public interface AtendenteRepository extends JpaRepository<Atendente, Long> {
    @Query(
        """
        SELECT a from Atendente a
        WHERE (:termoBusca IS NULL OR a.nomeCompleto LIKE %:termoBusca%)
        """
    )
    List<Atendente> busca(String termoBusca);
}
