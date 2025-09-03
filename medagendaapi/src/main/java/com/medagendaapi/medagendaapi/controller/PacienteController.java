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

import com.medagendaapi.medagendaapi.model.Anamnese;
import com.medagendaapi.medagendaapi.model.Paciente;
import com.medagendaapi.medagendaapi.service.PacienteService;

@RestController
@RequestMapping("/paciente")
public class PacienteController implements ICrudController<Paciente> {

    private final PacienteService servico;

    public PacienteController(PacienteService servico){
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
    public ResponseEntity<List<Paciente>> get(@RequestParam(required = false) String termoBusca) {
        List<Paciente> registros = servico.get(termoBusca);
        return ResponseEntity.ok(registros);
    }

    @GetMapping("/cpf/{cpf}")
    public ResponseEntity<Paciente> getByCpf(@PathVariable String cpf){
        Paciente registro = servico.getByCpf(cpf);
        return ResponseEntity.ok(registro);
    }

    @Override
    @GetMapping("/{id}")
    public ResponseEntity<Paciente> get(@PathVariable Long id) {
        Paciente registro = servico.get(id);
        return ResponseEntity.ok(registro);
    }

    @Override
    @PostMapping("/inserir")
    public ResponseEntity<Paciente> insert(@RequestBody Paciente objeto) {
        Paciente registro = servico.save(objeto);
        return ResponseEntity.ok(registro);
    }

    @Override
    @PutMapping("/atualizar")
    public ResponseEntity<Paciente> update(@RequestBody Paciente objeto) {
        Paciente registro = servico.save(objeto);
        return ResponseEntity.ok(registro);
    }

    @GetMapping("/anamnese/{id}")
    public ResponseEntity<Anamnese> fichaDoPaciente(@PathVariable Long id){
        Paciente registro = servico.get(id);
        
        if (registro != null){
            System.out.println(registro.getAnamnese().getObservacao());
            Anamnese anamnese = registro.getAnamnese();
            return ResponseEntity.ok(anamnese);
        } else {
            return ResponseEntity.badRequest().body(null);
        }
    }

    @GetMapping("/consultar-paginado")
    public ResponseEntity<Page<Paciente>> getPaginado(
        @RequestParam(required = false) String termoBusca,
        @ParameterObject Pageable page) {

    Page<Paciente> registros = servico.getPaginado(termoBusca, page);
    return ResponseEntity.ok(registros);
    }
    
}
