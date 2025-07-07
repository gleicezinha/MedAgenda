package com.medagendaapi.medagendaapi.controller;

import java.time.Instant;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import com.medagendaapi.medagendaapi.controller.exception.AtendimentoDuplicado;
import com.medagendaapi.medagendaapi.controller.exception.EdicaoNaoAutorizada;
import com.medagendaapi.medagendaapi.model.RespostaErroSimples;

@ControllerAdvice
public class MedAgendaExceptionHandler {

    @ExceptionHandler(EdicaoNaoAutorizada.class)
    public ResponseEntity<RespostaErroSimples> handleEdicaoNaoAutorizada(EdicaoNaoAutorizada e){
        RespostaErroSimples erro = new RespostaErroSimples(e.getMessage(), Instant.now(), HttpStatus.UNAUTHORIZED);
        return ResponseEntity.status(erro.status()).body(erro);
    }

    @ExceptionHandler(AtendimentoDuplicado.class)
    public ResponseEntity<RespostaErroSimples> handleAtendimentoDuplicado(AtendimentoDuplicado e){
        RespostaErroSimples erro = new RespostaErroSimples(e.getMessage(), Instant.now(), HttpStatus.CONFLICT);
        return ResponseEntity.status(erro.status()).body(erro);
    }
    
}
