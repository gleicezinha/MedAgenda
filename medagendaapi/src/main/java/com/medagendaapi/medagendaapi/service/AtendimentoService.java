package com.medagendaapi.medagendaapi.service;

import java.util.List;

import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

import com.medagendaapi.medagendaapi.controller.exception.AtendimentoDuplicado;
import com.medagendaapi.medagendaapi.model.Atendimento;
import com.medagendaapi.medagendaapi.model.EStatus;
import com.medagendaapi.medagendaapi.repository.AtendimentoRepository;

@Service
public class AtendimentoService implements ICrudService<Atendimento> {

    private final AtendimentoRepository repo;

    public AtendimentoService(AtendimentoRepository repo){
        this.repo = repo;
    }

    @Override
    public void delete(Long id) { //Não iremos deletar o atendimento
        Atendimento registro = this.get(id);
        if (registro != null){
            registro.setStatus(EStatus.CANCELADO);
            this.save(registro);
        }
    }

    @Override
    public List<Atendimento> get(String termoBusca) {
        List<Atendimento> registros  = repo.busca(termoBusca);
        return registros;
    }

    @Override
    public Atendimento get(Long id) {
        Atendimento registro = repo.findById(id).orElse(null);
        return registro;
    }

    @Override
    public Atendimento save(Atendimento objeto) {
        try{
            Atendimento registro = repo.save(objeto);
            return registro;
        }
        catch(DataIntegrityViolationException d){
            throw new AtendimentoDuplicado("Médico ou paciente com atendimento já marcado!");
        }
        
    }

    public Atendimento updateStatus(Long id) {
        var registro = this.get(id);
        if (registro != null) {
            var novoStatus = registro.getStatus().proximo();
            registro.setStatus(novoStatus);
            this.save(registro);
        }
        return registro;
    }
    
}
