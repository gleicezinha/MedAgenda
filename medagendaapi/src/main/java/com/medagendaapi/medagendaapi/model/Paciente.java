package com.medagendaapi.medagendaapi.model;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;

@Entity
public class Paciente extends Usuario {
    
    @Column(nullable = false)
    private LocalDate dataNascimento;

    @Enumerated(EnumType.STRING)
    private EGrupoSanguineo grupoSanguineo;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private ESexo sexo;
}
