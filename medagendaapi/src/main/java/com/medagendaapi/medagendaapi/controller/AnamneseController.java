package com.medagendaapi.medagendaapi.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.medagendaapi.medagendaapi.model.Anamnese;
import com.medagendaapi.medagendaapi.service.AnamneseService;

import io.swagger.v3.oas.annotations.parameters.RequestBody;

@RestController
@RequestMapping("/anamnese")
public class AnamneseController implements ICrudController<Anamnese>{

    private final AnamneseService servico;

    public AnamneseController(AnamneseService servico){
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
    public ResponseEntity<List<Anamnese>> get(@RequestParam(required = false) String termoBusca) {
        List<Anamnese> registros = servico.get(termoBusca);
        return ResponseEntity.ok(registros);
    }

    @Override
    @GetMapping("/{id}")
    public ResponseEntity<Anamnese> get(@PathVariable Long id) {
        Anamnese registro = servico.get(id);
        return ResponseEntity.ok(registro);
    }

    @Override
    @PostMapping("/inserir")
    public ResponseEntity<Anamnese> insert(@RequestBody Anamnese objeto) {
        Anamnese registro = servico.save(objeto);
        return ResponseEntity.ok(registro);
    }

    @Override
    @PutMapping("/atualizar")
    public ResponseEntity<Anamnese> update(@RequestBody Anamnese objeto) {
        Anamnese registro = servico.save(objeto);
        return ResponseEntity.ok(registro);
    }


    
}
