package com.medagendaapi.medagendaapi.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.medagendaapi.medagendaapi.model.Usuario;
import com.medagendaapi.medagendaapi.service.UsuarioService;

@RestController
@RequestMapping("/config/usuario")
public class UsuarioController implements ICrudController<Usuario> {

    private final UsuarioService servico;

    public UsuarioController(UsuarioService servico){
        this.servico = servico;
    }

    @Override
    @GetMapping("/consultar/todos")
    public ResponseEntity<List<Usuario>> get(String termoBusca) {
        var registros = servico.get(termoBusca);
        return ResponseEntity.ok(registros);
    }

    @Override
    @GetMapping("/{id}")
    public ResponseEntity<Usuario> get(Long id) {
        var registro = servico.get(id);
        return ResponseEntity.ok(registro);
    }

    @Override
    @PostMapping("/inserir")
    public ResponseEntity<Usuario> insert(Usuario objeto) {
        Usuario registro = servico.save(objeto);
        return ResponseEntity.ok(registro);
    }

    @Override
    @PutMapping("/atualizar")
    public ResponseEntity<Usuario> update(Usuario objeto) {
        Usuario registro = servico.save(objeto);
        return ResponseEntity.ok(registro);
    }

    @Override
    @DeleteMapping("remover/{id}")
    public ResponseEntity<?> delete(Long id) {
        servico.delete(id);
        return ResponseEntity.ok().build();
    }
    
}
