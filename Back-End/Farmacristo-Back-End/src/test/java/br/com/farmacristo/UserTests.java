package br.com.farmacristo;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import br.com.farmacristo.model.entity.User;
import br.com.farmacristo.model.entity.enums.UserTier;
import br.com.farmacristo.model.exception.FarmaCristoException;

@SpringBootTest
public class UserTests {

	@Test
	void userTierTest() {
		User user = new User(UserTier.Administrator, "Matheus F", "matheus@gmail.com", "teste");
		try {
			System.out.println(user.getTier().toString());
		} catch (FarmaCristoException e) {
			System.out.println(e.getMessage());
		}
	}
	
}
