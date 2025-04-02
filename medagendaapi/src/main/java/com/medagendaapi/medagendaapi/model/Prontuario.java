package com.medagendaapi.medagendaapi.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;

@Entity
public class Prontuario {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false)
    private Long id;

    @Column(length = 2000)
    private String problemaRelatado;

    @Column(length = 2000)
    private String descricao;

    @Column(length = 2000)
    private String prescricao;

    @OneToOne(optional = false)
    private Atendimento atendimento;

    private boolean temAlergia;

    private String qualAlergia;

    private boolean temRemedio;

    private String qualRemedio;

    private boolean temDoencaCognitiva;

    private String qualDoencaCognitiva;

    public void setQualDoencaCognitiva(String qualDoencaCognitiva) {
        this.qualDoencaCognitiva = qualDoencaCognitiva;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Atendimento getAtendimento() {
        return atendimento;
    }

    public void setAtendimento(Atendimento atendimento) {
        this.atendimento = atendimento;
    }

    public String getProblemaRelatado() {
        return problemaRelatado;
    }

    public void setProblemaRelatado(String problemaRelatado) {
        this.problemaRelatado = problemaRelatado;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public String getPrescricao() {
        return prescricao;
    }

    public void setPrescricao(String prescricao) {
        this.prescricao = prescricao;
    }

    public boolean isTemAlergia() {
        return temAlergia;
    }

    public void setTemAlergia(boolean temAlergia) {
        this.temAlergia = temAlergia;
    }

    public String getQualAlergia() {
        return qualAlergia;
    }

    public void setQualAlergia(String qualAlergia) {
        this.qualAlergia = qualAlergia;
    }

    public boolean isTemRemedio() {
        return temRemedio;
    }

    public void setTemRemedio(boolean temRemedio) {
        this.temRemedio = temRemedio;
    }

    public String getQualRemedio() {
        return qualRemedio;
    }

    public void setQualRemedio(String qualRemedio) {
        this.qualRemedio = qualRemedio;
    }

    public boolean isTemDoencaCognitiva() {
        return temDoencaCognitiva;
    }

    public void setTemDoencaCognitiva(boolean temDoencaCognitiva) {
        this.temDoencaCognitiva = temDoencaCognitiva;
    }

    public String getQualDoencaCognitiva() {
        return qualDoencaCognitiva;
    }

}
