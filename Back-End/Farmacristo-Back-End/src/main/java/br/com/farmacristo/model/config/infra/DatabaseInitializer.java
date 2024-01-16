package br.com.farmacristo.model.config.infra;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import br.com.farmacristo.model.DTO.pharmacy.NewPharmacyDTO;
import br.com.farmacristo.model.DTO.product.NewProductDTO;
import br.com.farmacristo.model.DTO.user.NewUserDTO;
import br.com.farmacristo.model.exception.FarmaCristoException;
import br.com.farmacristo.model.service.PharmacyService;
import br.com.farmacristo.model.service.ProductService;
import br.com.farmacristo.model.service.UserService;

@Configuration
public class DatabaseInitializer {
	
    @Bean
    CommandLineRunner init(@Autowired UserService userService, @Autowired ProductService productService, @Autowired PharmacyService pharmacyService) {
		return args -> {
			List<NewUserDTO> newUsersList = new ArrayList<NewUserDTO>();
			List<NewProductDTO> newProductsList = new ArrayList<NewProductDTO>();
			List<NewPharmacyDTO> newPharmaciesList = new ArrayList<NewPharmacyDTO>();
			
			insertUsersData(newUsersList);
			insertProductsData(newProductsList);
			insertPharmaciesData(newPharmaciesList);
			
			newUsersList.forEach(user -> {
				try {
					userService.save(user);
				} catch (FarmaCristoException e) {
					System.out.println(e.getMessages());
				}
			});
			
			newProductsList.forEach(product -> {
				try {
					productService.save(product);
				} catch (FarmaCristoException e) {
					System.out.println(e.getMessages());
				}
			});
			
			newPharmaciesList.forEach(pharmacy -> {
				try {
					pharmacyService.save(pharmacy);
				} catch (FarmaCristoException e) {
					System.out.println(e.getMessages());
				}
			});
		};
	}
    
    public void insertUsersData(List<NewUserDTO> array) {
    	array.addAll(Arrays.asList(
				new NewUserDTO("Matheus Ferreira", "strongPassword", "matheus@gmail.com"),
				new NewUserDTO("Administrador FarmaCristo", "strongPassword", "admin@redefarmacristo.com.br"),
				new NewUserDTO("Antônio Fagundes", "strongPassword", "antonio@gmail.com")
		));
    }

    public void insertProductsData(List<NewProductDTO> array) {
    	//array.addAll(Arrays.asList(
    	//	new NewProductDTO(
    	//		"Desodorante Antitranspirante Aerossol Rexona Men Active Dry 250ml", 
    	//		"Desodorante Antitranspirante Aerossol Rexona Men Active Dry 250ml",
    	//		"Rexona",
    	//		17.90,
    	//		null,
    	//		false,
    	//	),
    	//	new NewProductDTO(
    	//		"Glifage XR 500mg Merck S/A 30 comprimidos",
    	//		"Glifage XR 500mg Merck S/A 30 comprimidos é indicado para tratar diabetes tipo 2, associado a uma dieta alimentar. Pode ser usado junto com a insulinoterapia, na diabetes tipo 1, prevenção da diabetes tipo 2, em pré-diabéticos e síndrome do ovário policístico. Uso adulto, sob orientação médica.",
    	//		"Glifage",
    	//		6.62,
    	//		null,
    	//		false
    	//	)
    	//));
    }
    
    public void insertPharmaciesData(List<NewPharmacyDTO> array) {
    	
    	
    	array.addAll(Arrays.asList(
        		new NewPharmacyDTO("Farmacristo 1", "11977789878", "farmacristo1@redefarmacristo.com.br", "05875350"),
        		new NewPharmacyDTO("Farmacristo 2", "11977789878", "farmacristo2@redefarmacristo.com.br", "05875350"),
        		new NewPharmacyDTO("Farmacristo 3", "11977789878", "farmacristo3@redefarmacristo.com.br", "05875350")
    	));
    }
    
}
