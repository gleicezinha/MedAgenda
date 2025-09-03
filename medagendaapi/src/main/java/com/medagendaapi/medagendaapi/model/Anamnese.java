package com.medagendaapi.medagendaapi.model;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;

@Entity
public class Anamnese implements Serializable{
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, updatable = false)
    private Long id;

    @OneToOne
    @JoinColumn(name = "paciente_id", unique = true)
    @JsonBackReference
    private Paciente paciente;

    private boolean temDoencaCronica;

    private String qualDoencaCronica;

    private boolean fezCirurgia;

    private String qualCirurgia;

    private boolean tomaMedicacao;

    private String qualMedicacao;

    private boolean temDeficienciaFisica;

    private String qualDeficiencia;

    private boolean temDoencaNeurologica;

    private String qualDoencaNeurologica;

    @Column(length = 2000)
    private String observacao;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Paciente getPaciente() {
        return paciente;
    }

    public void setPaciente(Paciente paciente) {
        this.paciente = paciente;
    }

    public boolean isTemDoencaCronica() {
        return temDoencaCronica;
    }

    public void setTemDoencaCronica(boolean temDoencaCronica) {
        this.temDoencaCronica = temDoencaCronica;
    }

    public String getQualDoencaCronica() {
        return qualDoencaCronica;
    }

    public void setQualDoencaCronica(String qualDoencaCronica) {
        this.qualDoencaCronica = qualDoencaCronica;
    }

    public boolean isFezCirurgia() {
        return fezCirurgia;
    }

    public void setFezCirurgia(boolean fezCirurgia) {
        this.fezCirurgia = fezCirurgia;
    }

    public String getQualCirurgia() {
        return qualCirurgia;
    }

    public void setQualCirurgia(String qualCirurgia) {
        this.qualCirurgia = qualCirurgia;
    }

    public boolean isTomaMedicacao() {
        return tomaMedicacao;
    }

    public void setTomaMedicacao(boolean tomaMedicacao) {
        this.tomaMedicacao = tomaMedicacao;
    }

    public String getQualMedicacao() {
        return qualMedicacao;
    }

    public void setQualMedicacao(String qualMedicacao) {
        this.qualMedicacao = qualMedicacao;
    }

    public boolean isTemDeficienciaFisica() {
        return temDeficienciaFisica;
    }

    public void setTemDeficienciaFisica(boolean temDeficienciaFisica) {
        this.temDeficienciaFisica = temDeficienciaFisica;
    }

    public String getQualDeficiencia() {
        return qualDeficiencia;
    }

    public void setQualDeficiencia(String qualDeficiencia) {
        this.qualDeficiencia = qualDeficiencia;
    }

    public boolean isTemDoencaNeurologica() {
        return temDoencaNeurologica;
    }

    public void setTemDoencaNeurologica(boolean temDoencaNeurologica) {
        this.temDoencaNeurologica = temDoencaNeurologica;
    }

    public String getQualDoencaNeurologica() {
        return qualDoencaNeurologica;
    }

    public void setQualDoencaNeurologica(String qualDoencaNeurologica) {
        this.qualDoencaNeurologica = qualDoencaNeurologica;
    }

    public String getObservacao() {
        return observacao;
    }

    public void setObservacao(String observacao) {
        this.observacao = observacao;
    }
    
}
