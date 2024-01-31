package br.com.farmacristo.model.config.security;

import java.io.IOException;
import java.util.Base64;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;
 
import br.com.farmacristo.model.entity.User;
import br.com.farmacristo.model.repository.UserRepository;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Component
public class CustomBasicAuthenticationFilter extends OncePerRequestFilter {

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private PasswordEncoder passwordEncoder;

	private static final String AUTHORIZATION = "Authorization";

	private static final String BASIC = "Basic ";

	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
		if (isBasicAuthentication(request)) {
			String[] credentials = decodeBase64(getHeader(request).replace(CustomBasicAuthenticationFilter.BASIC, ""))
					.split(":");

			String username = credentials[0];
			String password = credentials[1];

			Optional<User> user = this.userRepository.findByEmail(username);

			if (user.isPresent()) {
				Boolean valid = checkPassword(user.get().getPassword(), password);
				
				if (valid) {
					setAuthentication(user.get());
				} else {
					response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
					return;
				}
			} else {
				response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
				return;
			}
		}
		
		filterChain.doFilter(request, response);
	}

	private void setAuthentication(User user) {
		UsernamePasswordAuthenticationToken authentication = createAuthenticationToken(user);
		SecurityContextHolder.getContext().setAuthentication(authentication);
	}

	private UsernamePasswordAuthenticationToken createAuthenticationToken(User user) {
		UserPrincipal userPrincipal = UserPrincipal.create(user);
		return new UsernamePasswordAuthenticationToken(userPrincipal, null, userPrincipal.getAuthorities());
		 
	} 

	private Boolean checkPassword(String userPassword, String informedPassword) {
		return passwordEncoder.matches(informedPassword, userPassword);
	}

	private String decodeBase64(String base64) {
		byte[] decodeByte = Base64.getDecoder().decode(base64);
		return new String(decodeByte);
	}

	private boolean isBasicAuthentication(HttpServletRequest request) {
		String header = getHeader(request);
		return header != null && header.startsWith(CustomBasicAuthenticationFilter.BASIC);
	}

	private String getHeader(HttpServletRequest request) {
		return request.getHeader(CustomBasicAuthenticationFilter.AUTHORIZATION);
	}

}
