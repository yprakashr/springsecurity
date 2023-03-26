package com.springboot.config;

import java.util.Collections;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.config.http.SessionCreationPolicy;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;
import org.springframework.security.web.csrf.CookieCsrfTokenRepository;
import org.springframework.security.web.csrf.CsrfTokenRequestAttributeHandler;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import com.springboot.filter.CsrfCookieFilter;
import jakarta.servlet.http.HttpServletRequest;


@Configuration
public class SecurityConfiguration {


    @Bean
    SecurityFilterChain defaultSecurityFilterChain(HttpSecurity http) throws Exception {
        
 	   CsrfTokenRequestAttributeHandler requestHandler = new CsrfTokenRequestAttributeHandler();
       requestHandler.setCsrfRequestAttributeName("_csrf");
       
    http.csrf().disable()
    .securityContext().requireExplicitSave(false)
    .and()
    .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.ALWAYS))
    .cors().configurationSource(new CorsConfigurationSource() {
    	
        @Override
        public CorsConfiguration getCorsConfiguration(HttpServletRequest request) {
            CorsConfiguration config = new CorsConfiguration();
            config.setAllowedOrigins(Collections.singletonList("http://localhost:4200"));
            config.setAllowedMethods(Collections.singletonList("*"));
            config.setAllowCredentials(true);
            config.setAllowedHeaders(Collections.singletonList("*"));
            config.setMaxAge(3600L);
            return config;
            }
        })
    .and()
    .csrf((csrf) -> csrf.csrfTokenRequestHandler(requestHandler).ignoringRequestMatchers("/user")
            .csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse()))
            .addFilterAfter(new CsrfCookieFilter(), BasicAuthenticationFilter.class)  
		.authorizeHttpRequests()
		.requestMatchers("/user").permitAll()
//		.requestMatchers("/user/getmap").permitAll()
		.requestMatchers("/user/**").authenticated()	
//		.and().formLogin()
         .and().httpBasic();
		return http.build();
	}


	@Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
	
	
}















