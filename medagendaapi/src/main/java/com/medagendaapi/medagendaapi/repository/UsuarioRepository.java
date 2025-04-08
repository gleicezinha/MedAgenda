package com.medagendaapi.medagendaapi.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.medagendaapi.medagendaapi.model.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {

        @Query("""
                SELECT u from Usuario u
                WHERE (:termoBusca IS NULL OR u.nomeUsuario LIKE %:termoBusca%)
                """)
        List<Usuario> busca(String termoBusca);

        @Query("SELECT u FROM Usuario u WHERE u.cpf = :cpf")
        Usuario buscaPorCpf(@Param("cpf") String cpf);


}
