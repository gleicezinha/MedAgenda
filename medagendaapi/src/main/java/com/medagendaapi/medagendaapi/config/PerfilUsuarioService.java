package com.medagendaapi.medagendaapi.config;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.medagendaapi.medagendaapi.service.UsuarioService;

@Service
public class PerfilUsuarioService implements UserDetailsService{

    private final UsuarioService servico;

    public PerfilUsuarioService(UsuarioService servico){
        this.servico = servico;
    }

    @Override
    public UserDetails loadUserByUsername(String cpf) throws UsernameNotFoundException {
        var usuario = servico.buscaPorCpf(cpf);
        if(usuario == null){
            throw new UsernameNotFoundException("Usuário não encontrado com o CPF: " + cpf);
        }
        return new PerfilUsuario(usuario);
    }
    
}
