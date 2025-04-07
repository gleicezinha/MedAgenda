package com.medagendaapi.medagendaapi.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.medagendaapi.medagendaapi.model.Especialidade;
import com.medagendaapi.medagendaapi.service.EspecialidadeService;

@RestController
@RequestMapping("/especialidade")
public class EspecialidadeController implements ICrudController<Especialidade>{

    @Autowired
    private EspecialidadeService servico;

    @Override
    @DeleteMapping("/remover/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id) {
        servico.delete(id);
        return ResponseEntity.ok().build();
    }

    @Override
    @GetMapping("/consultar-todos")
    public ResponseEntity<List<Especialidade>> get(@RequestParam(required = false) String termoBusca) {
        List<Especialidade> registros = servico.get(termoBusca);
        return ResponseEntity.ok(registros);
    }

    @Override
    @GetMapping("/{id}")
    public ResponseEntity<Especialidade> get(@PathVariable Long id) {
        Especialidade registro = servico.get(id);
        return ResponseEntity.ok(registro);
    }

    @Override
    @PostMapping("/inserir")
    public ResponseEntity<Especialidade> insert(@RequestBody Especialidade objeto) {
        Especialidade registro = servico.save(objeto);
        return ResponseEntity.ok(registro);
    }

    @Override
    @PostMapping("/atualizar")
    public ResponseEntity<Especialidade> update(@RequestBody Especialidade objeto) {
        Especialidade registro = servico.save(objeto);
        return ResponseEntity.ok(registro);
    }
    
}
