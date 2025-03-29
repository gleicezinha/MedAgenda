package com.medagendaapi.medagendaapi.controller;

import java.util.List;
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
import com.medagendaapi.medagendaapi.model.Prontuario;
import com.medagendaapi.medagendaapi.service.ProntuarioService;

@RestController
@RequestMapping("/prontuario")
public class ProntuarioController implements ICrudController<Prontuario> {

    private final ProntuarioService servico;

    public ProntuarioController(ProntuarioService servico){
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
    public ResponseEntity<List<Prontuario>> get(@RequestParam(required = false) String termoBusca) {
        List<Prontuario> registros = servico.get(termoBusca);
        return ResponseEntity.ok(registros);
    }

    @Override
    @GetMapping("/{id}")
    public ResponseEntity<Prontuario> get(@PathVariable Long id) {
        Prontuario registro = servico.get(id);
        return ResponseEntity.ok(registro);
    }

    @Override
    @PostMapping("/inserir")
    public ResponseEntity<Prontuario> insert(@RequestBody Prontuario objeto) {
        Prontuario registro = servico.save(objeto);
        return ResponseEntity.ok(registro);
    }

    @Override
    @PutMapping("/atualizar")
    public ResponseEntity<Prontuario> update(@RequestBody Prontuario objeto) {
        Prontuario registro = servico.save(objeto);
        return ResponseEntity.ok(registro);
    }
    
}
