package br.com.farmacristo;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class RegexTest {
	
	@Test
	void nameTest() {
		String regex = "\\b[A-Za-zÀ-ú][A-Za-zÀ-ú]+,?\\s[A-Za-zÀ-ú][A-Za-zÀ-ú]{2,60}\\b";
		String name = "Matheus Ferreira";
		
		String refusedName1 = "matheus Ferreira";
		String refusedName2 = "Matheus ferreira";
		String refusedName3 = "1Matheus Ferreira";
		String refusedName4 = "MatheusFerreira2";

		assertEquals(name.matches(regex), true);
		
		assertEquals(refusedName1.matches(regex), true);
		assertEquals(refusedName2.matches(regex), true);
		assertEquals(refusedName3.matches(regex), false);
		assertEquals(refusedName4.matches(regex), false);
	}
}
