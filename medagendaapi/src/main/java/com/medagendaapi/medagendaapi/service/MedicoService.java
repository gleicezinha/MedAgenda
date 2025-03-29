package com.medagendaapi.medagendaapi.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.medagendaapi.medagendaapi.model.EPapel;
import com.medagendaapi.medagendaapi.model.Medico;
import com.medagendaapi.medagendaapi.model.Usuario;
import com.medagendaapi.medagendaapi.repository.MedicoRepository;

@Service
public class MedicoService implements ICrudService<Medico> {

    private final MedicoRepository repo;
    private final UsuarioService repoUsuario;

    public MedicoService(MedicoRepository repo, UsuarioService repoUsuario){
        this.repo = repo;
        this.repoUsuario = repoUsuario;
    }

    @Override
    public void delete(Long id) {
        repo.deleteById(id);
    }

    @Override
    public List<Medico> get(String termoBusca) {
        List<Medico> registros = repo.busca(termoBusca);
        return registros;
    }

    @Override
    public Medico get(Long id) {
        Medico registro = repo.findById(id).orElse(null);
        return registro;
    }

    @Override
    public Medico save(Medico objeto) {
        if (objeto.getId() == null){ //Caso o médico não exista no banco, será criado um usuário para ele
            Usuario usuario = new Usuario();
            usuario.setCpf(objeto.getCpf());
            usuario.setEmail(objeto.getEmail());
            usuario.setTelefone(objeto.getTelefone());
            usuario.setNomeUsuario(objeto.getNomeCompleto().split(" ")[0]);
            usuario.setPapel(EPapel.MEDICO);
            usuario.setSenha("senha123");
            repoUsuario.save(usuario);
        }
        Medico registro = repo.save(objeto);
        return registro;
    }
    
}
