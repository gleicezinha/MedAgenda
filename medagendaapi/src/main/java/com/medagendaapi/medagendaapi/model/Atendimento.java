package com.medagendaapi.medagendaapi.model;

import java.io.Serializable;
import java.time.LocalDate;
import java.time.LocalTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;

@Entity
public class Atendimento implements Serializable {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false)
    private Long id;

    @Column(nullable = false)
    private LocalDate dataDeAtendimento;

    @Column(nullable = false)
    private LocalTime horarioDeAtendimento;

    @ManyToOne
    private Medico medico;

    @ManyToOne
    private Paciente paciente;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private EStatus status;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDate getDataDeAtendimento() {
        return dataDeAtendimento;
    }

    public void setDataDeAtendimento(LocalDate dataDeAtendimento) {
        this.dataDeAtendimento = dataDeAtendimento;
    }

    public LocalTime getHorarioDeAtendimento() {
        return horarioDeAtendimento;
    }

    public void setHorarioDeAtendimento(LocalTime horarioDeAtendimento) {
        this.horarioDeAtendimento = horarioDeAtendimento;
    }

    public Medico getMedico() {
        return medico;
    }

    public void setMedico(Medico medico) {
        this.medico = medico;
    }

    public Paciente getPaciente() {
        return paciente;
    }

    public void setPaciente(Paciente paciente) {
        this.paciente = paciente;
    }

    public EStatus getStatus() {
        return status;
    }

    public void setStatus(EStatus status) {
        this.status = status;
    }
    
}
