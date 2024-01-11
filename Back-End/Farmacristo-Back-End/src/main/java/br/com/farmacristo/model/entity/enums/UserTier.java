package br.com.farmacristo.model.entity.enums;

import br.com.farmacristo.model.exception.specialization.user.InvalidUserTierCode;

public enum UserTier {
	
	Client(1),
	Administrator(2);
	
	private int code;
	
	private UserTier(int code) {
		this.code = code;
	}
	
	public int getCode() {
		return code;
	}
	
	public static UserTier valueOf(int code) throws InvalidUserTierCode {
		for(UserTier value : UserTier.values()) {
			if(code == value.getCode()) {
				return value;
			}
		}
		
		throw new InvalidUserTierCode("Código inválido", "O código inserido é inválido. Por favor, insira um código válido.");
	}
}
