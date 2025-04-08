package com.medagendaapi.medagendaapi.config;

import java.io.IOException;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.medagendaapi.medagendaapi.model.RespostaErro;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Component
public class TokenFilter extends OncePerRequestFilter {

    private final TokenService tokenService;
    private final PerfilUsuarioService usuarioService;
    private final ObjectMapper objectMapper;

    public TokenFilter(
        TokenService tokenService,
        PerfilUsuarioService usuarioService,
        ObjectMapper objectMapper){
            this.tokenService = tokenService;
            this.usuarioService = usuarioService;
            this.objectMapper = objectMapper;
    }

    private String recuperarToken(HttpServletRequest request){
        var authHeader = request.getHeader("Authorization");
        // System.out.println("AAAAAAAAAAAAAAA " +authHeader);
        // System.out.println("request " + request.getHeader("Bearer"));
        if (authHeader == null || !authHeader.startsWith("Bearer ")){
            return null;
        }
        return authHeader.replace("Bearer ", "");
    }

    @Override
    protected void doFilterInternal(@SuppressWarnings("null") HttpServletRequest request, @SuppressWarnings("null") HttpServletResponse response, @SuppressWarnings("null") FilterChain filterChain)
    throws ServletException, IOException{

        var token = this.recuperarToken(request);
        if (token != null){
            var login = tokenService.validarToken(token);
            if (login != null){
                var usuario = usuarioService.loadUserByUsername(login);
                var auth = new UsernamePasswordAuthenticationToken(usuario, null, usuario.getAuthorities());    
                SecurityContextHolder.getContext().setAuthentication(auth);         
            } else {
                var mensagemErro = List.of("Token inválido ou expirado");
                var respostaErro = new RespostaErro(mensagemErro);
                var respostaJson = objectMapper.writeValueAsString(respostaErro);
                response.setStatus(HttpStatus.UNAUTHORIZED.value());
                response.setContentType("application/json");
                response.getWriter().write(respostaJson);
                return;
            }

        }
        filterChain.doFilter(request, response);
    }
    
}

