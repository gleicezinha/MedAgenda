package com.medagendaapi.medagendaapi.controller;

import java.io.IOException;
import org.springframework.http.HttpHeaders;


import org.springframework.core.io.Resource;
import org.springframework.core.io.ClassPathResource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class pdfController {

    @GetMapping("/atestado/pdf")
    public ResponseEntity<Resource> atestadoDownload() throws IOException {
        Resource recurso = new ClassPathResource("pdfs/atestado_medico.pdf");

        return ResponseEntity.ok()
            .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"atestado.pdf\"")
            .contentType(MediaType.APPLICATION_PDF)
            .contentLength(recurso.contentLength())
            .body(recurso);
    }

    @GetMapping("/pericia/pdf")
    public ResponseEntity<Resource> relatorioDownload() throws IOException {
        Resource recurso = new ClassPathResource("pdfs/relatorio_pericia.pdf");

        return ResponseEntity.ok()
            .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"pericia.pdf\"")
            .contentType(MediaType.APPLICATION_PDF)
            .contentLength(recurso.contentLength())
            .body(recurso);
    }

    @GetMapping("/exame/pdf")
    public ResponseEntity<Resource> exameDownload() throws IOException {
        Resource recurso = new ClassPathResource("pdfs/requisicao_exame.pdf");

        return ResponseEntity.ok()
            .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"exame.pdf\"")
            .contentType(MediaType.APPLICATION_PDF)
            .contentLength(recurso.contentLength())
            .body(recurso);
    }
    
}
