package br.com.farmacristo.model.util.validation;

import java.util.ArrayList;
import java.util.List;

import javax.mail.internet.AddressException;
import javax.mail.internet.InternetAddress;

import br.com.farmacristo.model.DTO.user.LoginDTO;
import br.com.farmacristo.model.DTO.user.NewUserDTO;
import br.com.farmacristo.model.exception.specialization.InvalidFields;

public class UserValidation {
	
	private static String __NAME_REGEX__ = "\\b[A-Za-zÀ-ú][A-Za-zÀ-ú]+,?\\s[A-Za-zÀ-ú][A-Za-zÀ-ú]{2,60}\\b";
	
	public static void validation(NewUserDTO newUserDTO) throws InvalidFields {
		List<String> messages = new ArrayList<String>();
		
		UserValidation.nameValidation(messages, newUserDTO.name());
		UserValidation.emailValidation(messages, newUserDTO.email());
		UserValidation.passwordValidation(messages, newUserDTO.password());
		
		if(!messages.isEmpty())
			throw new InvalidFields(messages, "Algumas informações foram inseridas de maneira incorreta. Por favor, verifique e corrija os campos necessários.");
	}
	
	public static void validation(LoginDTO login) throws InvalidFields {
		List<String> messages = new ArrayList<String>();
		
		UserValidation.emailValidation(messages, login.email());
		UserValidation.passwordValidation(messages, login.password());
		
		if(!messages.isEmpty())
			throw new InvalidFields(messages, "Algumas informações foram inseridas de maneira incorreta. Por favor, verifique e corrija os campos necessários.");
	}
	
	
	public static void passwordValidation(List<String> messages, String password) {
		if(password == null)
			messages.add("O campo SENHA não pode ser nulo.");
		else
			if(password.length() < 4 || password.length() > 120)
				messages.add("O campo SENHA deve conter entre 4 e 120 caracteres.");
	}
	
	public static void emailValidation(List<String> messages, String email) {
		if(email == null)
			messages.add("O campo E-MAIL não pode ser nulo.");
		else {
			if(email.length() < 5 || email.length() > 120)
				messages.add("O campo E-MAIL deve conter entre 5 e 120 caracteres.");
			else {
				try {
		            InternetAddress emailAddr = new InternetAddress(email);
		            emailAddr.validate();
		        } catch (AddressException exception) {
		            messages.add("O campo E-MAIL é inválido.");
		        }
			}
		}
	}
	
	public static void nameValidation(List<String> messages, String name) {
		if(name == null)
			messages.add("O campo NOME não pode ser nulo.");
		else {
			if(name.length() < 2 || name.length() > 60)
				messages.add("O campo NOME deve conter entre 2 e 60 caracteres.");
			else if(!name.matches(UserValidation.__NAME_REGEX__))
				messages.add("O campo NOME deve conter: seu PRIMEIRO e SEGUNDO nome.");
		}
	}
	
}
