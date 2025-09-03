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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.medagendaapi.medagendaapi.model.Atendente;
import com.medagendaapi.medagendaapi.service.AtendenteService;

@RestController
@RequestMapping("/atendente")
public class AtendenteController implements ICrudController<Atendente> {

    private final AtendenteService servico;
    
    public AtendenteController(AtendenteService servico){
        this.servico = servico;
    }

    @Override
    @DeleteMapping("remover/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id) {
        servico.delete(id);
        return ResponseEntity.ok().build();
    }

    @Override
    @GetMapping("/consultar-todos")
    public ResponseEntity<List<Atendente>> get(@RequestParam(required = false) String termoBusca) {
        List<Atendente> registros = servico.get(termoBusca);
        return ResponseEntity.ok(registros);
    }

    @Override
    @GetMapping("/{id}")
    public ResponseEntity<Atendente> get(@PathVariable Long id) {
        Atendente registro = servico.get(id);
        return ResponseEntity.ok(registro);
    }

    @Override
    @PostMapping("/inserir")
    public ResponseEntity<Atendente> insert(@RequestBody Atendente objeto) {
        Atendente registro = servico.save(objeto);
        return ResponseEntity.ok(registro);
    }

    @Override
    @PutMapping("/atualizar")
    public ResponseEntity<Atendente> update(@RequestBody Atendente objeto) {
        Atendente registro = servico.save(objeto);
        return ResponseEntity.ok(registro);
    }

    @GetMapping("/consultar-paginado")
    public ResponseEntity<Page<Atendente>> getPaginada(
        @RequestParam(required = false)String termoBusca,
        @ParameterObject Pageable page){

        Page<Atendente> registros = servico.buscaPaginada(termoBusca, page);
        return ResponseEntity.ok(registros);
    }
    
}
