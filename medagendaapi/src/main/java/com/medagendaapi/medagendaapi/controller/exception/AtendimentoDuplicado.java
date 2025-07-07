package com.medagendaapi.medagendaapi.controller.exception;

public class AtendimentoDuplicado extends RuntimeException {
    
    public AtendimentoDuplicado(String message){
        super(message);
    }
}
