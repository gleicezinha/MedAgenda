package com.medagendaapi.medagendaapi.service;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import com.medagendaapi.medagendaapi.model.Atendente;
import com.medagendaapi.medagendaapi.model.EPapel;
import com.medagendaapi.medagendaapi.model.Usuario;
import com.medagendaapi.medagendaapi.repository.AtendenteRepository;

@Service
public class AtendenteService implements ICrudService<Atendente> {

    @Autowired
    private AtendenteRepository repo;

    @Autowired 
    private UsuarioService repoUsuario;

    @Override
    public void delete(Long id) {
        repo.deleteById(id);
    }

    @Override
    public List<Atendente> get(String termoBusca) {
        List<Atendente> registros = repo.busca(termoBusca);
        return registros;
    }

    @Override
    public Atendente get(Long id) {
        Atendente registro = repo.findById(id).orElse(null);
        return registro;
    }

    @Override
    public Atendente save(Atendente objeto) {
        if (objeto.getId() == null){ //Caso o médico não exista no banco, será criado um usuário para ele
            Usuario usuario = new Usuario();
            usuario.setCpf(objeto.getCpf());
            usuario.setEmail(objeto.getEmail());
            usuario.setTelefone(objeto.getTelefone());
            usuario.setNomeUsuario(objeto.getNomeCompleto().split(" ")[0]);
            usuario.setPapel(EPapel.ROLE_ATENDENTE);
            usuario.setSenha("senha123");
            repoUsuario.save(usuario);
        }
        Atendente registro = repo.save(objeto);
        return registro;
    }

    public Page<Atendente> buscaPaginada(String termoBusca, Pageable page){
        Page<Atendente> registros = repo.buscaPaginado(termoBusca, page);
        return registros;
    }
            
}
