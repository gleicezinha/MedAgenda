package com.medagendaapi.medagendaapi.controller;

import java.util.List;

import org.springdoc.core.annotations.ParameterObject;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.medagendaapi.medagendaapi.model.Medico;
import com.medagendaapi.medagendaapi.service.MedicoService;
import org.springframework.web.bind.annotation.RequestParam;



@RestController
@RequestMapping("/medico")
public class MedicoController implements ICrudController<Medico> {

    private final MedicoService servico;

    public MedicoController(MedicoService servico){
        this.servico = servico;
    }

    @Override
    @DeleteMapping("/remover/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id) {
        servico.delete(id);
        return ResponseEntity.ok().build();
    }

    @Override
    @GetMapping("/consultar-todos")
    public ResponseEntity<List<Medico>> get(String termoBusca) {
        List<Medico> registros = servico.get(termoBusca);
        return ResponseEntity.ok(registros);
    }

    @Override
    @GetMapping("/{id}")
    public ResponseEntity<Medico> get(@PathVariable Long id) {
        Medico registro = servico.get(id);
        return ResponseEntity.ok(registro);
    }

    @Override
    @PostMapping("/inserir")
    public ResponseEntity<Medico> insert(@RequestBody Medico objeto) {
        Medico registro = servico.save(objeto);
        return ResponseEntity.ok(registro);
    }

    @Override
    @PutMapping("/atualizar")
    public ResponseEntity<?> update(@RequestBody Medico objeto) {
        Medico registro = servico.save(objeto);
        return ResponseEntity.ok(registro);
    }

    @GetMapping("/consultar-paginado")
    public ResponseEntity<Page<Medico>> getPaginada(
        @RequestParam(required = false) String termoBusca,
        @ParameterObject Pageable page) {
        Page<Medico> registros = servico.buscaPaginada(termoBusca, page);
        return ResponseEntity.ok(registros);
    }
    
    
}
