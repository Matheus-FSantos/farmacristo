package br.com.farmacristo.model.config.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
@EnableMethodSecurity
public class WebSecurityConfig {

	@Autowired
	private CustomBasicAuthenticationFilter customBasicAuthenticationFilter;
	
	@Bean
	SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
		return http
			.csrf(csrf -> csrf.disable())
				.sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
				.authorizeHttpRequests((request) -> request
						.requestMatchers(HttpMethod.POST, "/api/users/**", "/api/resumes").permitAll()
						.requestMatchers(HttpMethod.GET, "/api/products/**", "/api/pharmacies/**").permitAll()
						.requestMatchers(HttpMethod.PUT, "/api/resumes/cv/**").permitAll()
						.requestMatchers("/swagger-ui/**", "/v3/api-docs/**", "/swagger-ui.html", "/h2-console").permitAll()
						.anyRequest().authenticated()
				).addFilterBefore(customBasicAuthenticationFilter, UsernamePasswordAuthenticationFilter.class)
				.build();
	}
	
}
