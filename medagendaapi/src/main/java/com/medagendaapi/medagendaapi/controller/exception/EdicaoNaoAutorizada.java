package com.medagendaapi.medagendaapi.controller.exception;

public class EdicaoNaoAutorizada extends RuntimeException{
    public EdicaoNaoAutorizada (String message){
        super(message);
    }
}
