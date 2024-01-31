package br.com.farmacristo.model.config.security;

import java.util.ArrayList;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import br.com.farmacristo.model.entity.User;

public class UserPrincipal {

	private String email;
	private String password;
	private List<GrantedAuthority> authorities = new ArrayList<GrantedAuthority>();
	
	private UserPrincipal(User user) {
		this.email = user.getEmail();
		this.password = user.getPassword();
		
		try {			
			this.authorities.add(new SimpleGrantedAuthority("ROLE_".concat(user.getTier().toString())));
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
	}
	
	public static UserPrincipal create(User user) {
		return new UserPrincipal(user );
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public List<GrantedAuthority> getAuthorities() {
		return authorities;
	}
	
}
