package com.medagendaapi.medagendaapi.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.medagendaapi.medagendaapi.model.Especialidade;
import com.medagendaapi.medagendaapi.repository.EspecialidadeRepository;

@Service
public class EspecialidadeService implements ICrudService<Especialidade> {

    @Autowired
    private EspecialidadeRepository repo;

    @Override
    public void delete(Long id) {
        repo.deleteById(id);
    }

    @Override
    public List<Especialidade> get(String termoBusca) {
        List<Especialidade> registros = repo.busca(termoBusca);
        return registros;
    }

    @Override
    public Especialidade get(Long id) {
        Especialidade registro = repo.findById(id).orElse(null);
        return registro;
    }

    @Override
    public Especialidade save(Especialidade objeto) {
        Especialidade registro = repo.save(objeto);
        return registro;
    }
    
}
