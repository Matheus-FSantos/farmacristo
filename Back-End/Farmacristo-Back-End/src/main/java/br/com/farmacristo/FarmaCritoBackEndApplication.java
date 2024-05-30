package br.com.farmacristo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;

@EnableCaching
@SpringBootApplication
public class FarmaCritoBackEndApplication {

	public static void main(String[] args) {
		SpringApplication.run(FarmaCritoBackEndApplication.class, args);
	}

}
