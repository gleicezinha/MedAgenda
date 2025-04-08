package com.medagendaapi.medagendaapi.controller;


import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import com.auth0.jwt.JWT;
import com.medagendaapi.medagendaapi.config.PerfilUsuario;
import com.medagendaapi.medagendaapi.config.TokenService;
import com.medagendaapi.medagendaapi.model.Usuario;
import com.medagendaapi.medagendaapi.service.UsuarioService;


@RestController
public class LoginController {

    private final AuthenticationManager authManeger;
    private final UsuarioService usuarioService;
    private final TokenService tokenService;

    public LoginController(
            AuthenticationManager authManager,
            UsuarioService usuarioService,
            TokenService tokenService) {
        this.authManeger = authManager;
        this.usuarioService = usuarioService;
        this.tokenService = tokenService;
        
    }

    @PostMapping("/autenticacao")
    public ResponseEntity<String> autenticar(@RequestBody Usuario usuario) {
        // System.out.println(usuario.getCpf());
        var loginToken = new UsernamePasswordAuthenticationToken(usuario.getCpf(), usuario.getSenha());
        var auth = authManeger.authenticate(loginToken);
        PerfilUsuario principal = (PerfilUsuario) auth.getPrincipal();
        var usuarioAutenticado = usuarioService.buscaPorCpf(principal.getCpf());

        var token = tokenService.criarToken(usuarioAutenticado);

        return ResponseEntity.ok(token);
    }

    @GetMapping("/renovar")
    public ResponseEntity<String> renovar (@RequestHeader("Authorization") String authHeader) {
        
        var token = authHeader.replace("Bearer ", "");
        var tokenDecodificado = JWT.decode(token);

        if (tokenService.isDataLimiteExpirada(tokenDecodificado)) {
            var mensagem = "Data limite de renovação expirada";
            return ResponseEntity.badRequest().body(mensagem);
        }

        var cpf = tokenDecodificado.getSubject();
        var usuario = usuarioService.buscaPorCpf(cpf);
        var tokenNovo = tokenService.criarToken(usuario);

        return ResponseEntity.ok(tokenNovo);
    }
    
}
