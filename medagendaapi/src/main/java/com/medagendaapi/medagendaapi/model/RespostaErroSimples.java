package com.medagendaapi.medagendaapi.model;

import java.time.Instant;

import org.springframework.http.HttpStatus;

public record RespostaErroSimples(String message, Instant moment, HttpStatus status) {
    
}
