package com.medagendaapi.medagendaapi.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.medagendaapi.medagendaapi.model.Usuario;
import com.medagendaapi.medagendaapi.repository.UsuarioRepository;

@Service
public class UsuarioService implements ICrudService<Usuario>  {

    @Autowired
    private UsuarioRepository repo;

    @Override
    public List<Usuario> get(String termoBusca) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'get'");
    }

    @Override
    public Usuario get(Long id) {
        Usuario registro = repo.findById(id).orElse(null);
        return registro;
    }

    @Override
    public Usuario save(Usuario objeto) {
        Usuario registro = repo.save(objeto);
        return registro;
    }

    @Override
    public void delete(Long id) {
        repo.deleteById(id);
    }

    public Usuario buscaPorCpf(String cpf){
        Usuario registro = repo.buscaPorCpf(cpf);
        return registro;
    }
    
}
