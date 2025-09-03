package com.medagendaapi.medagendaapi.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.medagendaapi.medagendaapi.model.Anamnese;
import com.medagendaapi.medagendaapi.repository.AnamneseRepository;

@Service
public class AnamneseService implements ICrudService<Anamnese> {

    @Autowired
    private AnamneseRepository repo;

    @Override
    public void delete(Long id) {
        repo.deleteById(id);
    }

    @Override
    public List<Anamnese> get(String termoBusca) {
        List<Anamnese> registros = repo.busca(termoBusca);
        return registros;
    }

    @Override
    public Anamnese get(Long id) {
        Anamnese registro = repo.findById(id).orElse(null);
        return registro;
    }

    @Override
    public Anamnese save(Anamnese objeto) {
        Anamnese registro = repo.save(objeto);
        return registro;
    }
    
}
