package com.medagendaapi.medagendaapi.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import static org.springframework.security.config.Customizer.withDefaults;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.csrf.XorCsrfTokenRequestAttributeHandler;


@SuppressWarnings("unused")
@Configuration
// @EnableWebSecurity
public class Seguranca {

    private final PerfilUsuarioService perfilUsuarioService;
    private final TokenFilter tokenFilter;

    public Seguranca(
            PerfilUsuarioService perfilUsuarioService,
            TokenFilter tokenFilter) {
        this.perfilUsuarioService = perfilUsuarioService;
        this.tokenFilter = tokenFilter;
    }

    @Bean
    AuthenticationManager authManager(AuthenticationConfiguration authConfig) throws Exception {
        return authConfig.getAuthenticationManager();
    }

    @Bean
    UserDetailsService udService() {
        return perfilUsuarioService;
    }

    @Bean
    BCryptPasswordEncoder passEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    DaoAuthenticationProvider authProvider() {
        var authProvider = new DaoAuthenticationProvider();
        authProvider.setUserDetailsService(udService());
        authProvider.setPasswordEncoder(passEncoder());
        return authProvider;
    } //Area do DAO mas sem ele o filter chain não funciona

    // @Bean
    // @Order(1)
    // SecurityFilterChain swaggerFilterChain(HttpSecurity http) throws Exception {
        
    //     http.securityMatcher("/v3/api-docs/**", "/v3/api-docs*", "/swagger-ui/**", "/login");
    //     http.formLogin(form -> form.defaultSuccessUrl("/swagger-ui/index.html")); //Aqui coloquei Indexhtml seguindo o sgcm mas imagino que deva ser a tela que vai apos sucesso no login
    //     http.csrf(csrf -> csrf.disable());
    //     http.authenticationProvider(authProvider());
    //     http.authorizeHttpRequests(
    //         authorize -> authorize.anyRequest().hasRole("ESTRATEGICO")
    //     );

    //     return http.build();
    // }

    @Bean
    SecurityFilterChain filterChain(HttpSecurity http) throws Exception {

        http.cors(withDefaults());
        http.authenticationProvider(authProvider());
        http.sessionManagement(
            session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS)
        );

        var gerenciadorCsrf = new XorCsrfTokenRequestAttributeHandler();
        gerenciadorCsrf.setCsrfRequestAttributeName(null);
        http.csrf(
            csrf -> csrf.disable()
                // .ignoringRequestMatchers("/autenticacao")
                // .csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse())
                // .csrfTokenRequestHandler(gerenciadorCsrf::handle)
        );
        

        http.authorizeHttpRequests(
            authorize -> authorize
                .requestMatchers("/autenticacao").permitAll()
                .anyRequest().permitAll()
        );

        http.addFilterBefore(tokenFilter, UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }
    
}

