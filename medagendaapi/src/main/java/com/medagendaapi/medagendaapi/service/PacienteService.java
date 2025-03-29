package com.medagendaapi.medagendaapi.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.medagendaapi.medagendaapi.model.EPapel;
import com.medagendaapi.medagendaapi.model.Paciente;
import com.medagendaapi.medagendaapi.model.Usuario;
import com.medagendaapi.medagendaapi.repository.PacienteRepository;

@Service
public class PacienteService implements ICrudService<Paciente>{

    private final PacienteRepository repo;
    private final UsuarioService servicoUsuario;

    public PacienteService(PacienteRepository repo, UsuarioService servicoUsuario){
        this.repo = repo;
        this.servicoUsuario = servicoUsuario;
    }

    @Override
    public void delete(Long id) {
        Paciente registro = this.get(id);
        Usuario usuario = servicoUsuario.buscaPorCpf(registro.getCpf());
        if (usuario != null){
            servicoUsuario.delete(usuario.getId());
        }
        repo.deleteById(id);
    }

    @Override
    public List<Paciente> get(String termoBusca) {
        List<Paciente> registros = repo.busca(termoBusca);
        return registros;
    }

    @Override
    public Paciente get(Long id) {
        Paciente registro = repo.findById(id).orElse(null);
        return registro;
    }

    @Override
    public Paciente save(Paciente objeto) {
        Paciente registro = repo.save(objeto);
        if(objeto.getId() == null){ //Criando um usuário para o 
            Usuario usuario = new Usuario();
            usuario.setNomeUsuario(objeto.getNomeCompleto().split(" ")[0]);
            usuario.setCpf(objeto.getCpf());
            usuario.setEmail(objeto.getEmail());
            usuario.setTelefone(objeto.getTelefone());
            usuario.setPapel(EPapel.PACIENTE);
            usuario.setSenha("senha123");
            servicoUsuario.save(usuario);
        }
        return registro;
    }
    
}
