package com.medagendaapi.medagendaapi.service;

import java.util.List;
import org.springframework.stereotype.Service;
import com.medagendaapi.medagendaapi.model.Prontuario;
import com.medagendaapi.medagendaapi.repository.ProntuarioRepository;

@Service
public class ProntuarioService implements ICrudService<Prontuario> {

    private final ProntuarioRepository repo;

    public ProntuarioService(ProntuarioRepository repo){
        this.repo = repo;
    }

    @Override
    public void delete(Long id) {
        repo.deleteById(id);
    }

    @Override
    public List<Prontuario> get(String termoBusca) {
        List<Prontuario> registros = repo.busca(termoBusca);
        return registros;
    }

    @Override
    public Prontuario get(Long id) {
        Prontuario registro = repo.findById(id).orElse(null);
        return registro;
    }

    @Override
    public Prontuario save(Prontuario objeto) {
        Prontuario registro = repo.save(objeto);
        return registro;
    }

    public List<Prontuario> getByPaciente(Long pacienteId) {
        List<Prontuario> registros = repo.buscaPorPaciente(pacienteId);
        return registros;
    }

    public Prontuario getByAtendimento(Long idAtendimento){
        Prontuario registro = repo.buscaPorAtendimento(idAtendimento);
        return registro;
    }
    
}
