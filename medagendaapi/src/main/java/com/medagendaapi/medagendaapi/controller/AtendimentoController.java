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

import com.medagendaapi.medagendaapi.config.TokenService;
import com.medagendaapi.medagendaapi.model.Atendimento;
import com.medagendaapi.medagendaapi.model.EPapel;
import com.medagendaapi.medagendaapi.model.EStatus;
import com.medagendaapi.medagendaapi.service.AtendimentoService;

@RestController
@RequestMapping("/atendimento")
public class AtendimentoController implements ICrudController<Atendimento> {

    private final AtendimentoService servico;
    private final TokenService tokenService;

    public AtendimentoController(AtendimentoService servico, TokenService tokenService){
        this.servico = servico;
        this.tokenService = tokenService;
    }

    @Override
    @DeleteMapping("/remover/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id) {
        servico.delete(id);
        return ResponseEntity.ok().build();
    }

    @Override
    @GetMapping("/consultar-todos")
    public ResponseEntity<List<Atendimento>> get(@RequestParam(required = false) String termoBusca) {
        List<Atendimento> registros = servico.get(termoBusca);
        return ResponseEntity.ok(registros);
    }

    @Override
    @GetMapping("/{id}")
    public ResponseEntity<Atendimento> get(@PathVariable Long id) {
        Atendimento registro = servico.get(id);
        return ResponseEntity.ok(registro);
    }

    @Override
    @PostMapping("/inserir")
    public ResponseEntity<Atendimento> insert(@RequestBody Atendimento objeto) {
        Atendimento registro = null;
        String papel = tokenService.PapelDoUsuarioAutenticado();
        if (papel == EPapel.ROLE_PACIENTE.toString()){
            objeto.setStatus(EStatus.SOLICITADO);
        }
        registro = servico.save(objeto);
        
        return ResponseEntity.ok(registro);
    }

    // @PostMapping("/solicitar")
    // public ResponseEntity<Atendimento> socilicitar(@RequestBody Atendimento objeto) {
    //     Atendimento registro = null;
    //     String papel = tokenService.PapelDoUsuarioAutenticado();
    //     if (objeto.getStatus() == EStatus.SOLICITADO && papel == EPapel.ROLE_PACIENTE.toString()){
    //         registro = servico.save(objeto);
    //     }
    //     return ResponseEntity.ok(registro);
    // }

    @Override
    @PutMapping("/atualizar")
    public ResponseEntity<?> update(@RequestBody Atendimento objeto) {
        Atendimento registro = servico.save(objeto);
        return ResponseEntity.ok(registro);
    }

    @PutMapping("/status/{id}")
    public ResponseEntity<Atendimento> atualizarStatus(@PathVariable Long id) {
        Atendimento registro = servico.updateStatus(id);
        return ResponseEntity.ok(registro);
    }
    
}
