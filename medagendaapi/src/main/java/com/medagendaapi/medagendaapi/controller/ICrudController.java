package com.medagendaapi.medagendaapi.controller;

import org.springframework.http.ResponseEntity;

public interface ICrudController <T> {
    
    public ResponseEntity<?> get(String termoBusca);
    public ResponseEntity<?> get(Long id);
    public ResponseEntity<?> insert(T objeto);
    public ResponseEntity<?> update(T objeto);
    public ResponseEntity<?> delete(Long id);

}
