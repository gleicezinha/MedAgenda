package com.medagendaapi.medagendaapi.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.medagendaapi.medagendaapi.model.Usuario;
import com.medagendaapi.medagendaapi.repository.UsuarioRepository;

@Service
public class UsuarioService implements ICrudService<Usuario> {

    @Autowired
    private UsuarioRepository repo;

    @Override
    public List<Usuario> get(String termoBusca) {
        List<Usuario> registros = repo.busca(termoBusca);
        return registros;
    }

    @Override
    public Usuario get(Long id) {
        Usuario registro = repo.findById(id).orElse(null);
        return registro;
    }

    @Override
    public Usuario save(Usuario objeto) {
        if (objeto.getSenha() == null || objeto.getSenha().isBlank()) {
            var usuario = get(objeto.getId());
            if (usuario != null) {
                objeto.setSenha(usuario.getSenha());
            }
        } else {
            var passEncoder = new BCryptPasswordEncoder();
            var senhaCriptografada = passEncoder.encode(objeto.getSenha());
            objeto.setSenha(senhaCriptografada);
        }
        return repo.save(objeto);
    }

    @Override
    public void delete(Long id) {
        repo.deleteById(id);
    }

    public Usuario buscaPorCpf(String cpf) {
        Usuario registro = repo.buscaPorCpf(cpf);
        
        return registro;
    }

}
