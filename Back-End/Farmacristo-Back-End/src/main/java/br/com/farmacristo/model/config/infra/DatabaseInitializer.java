package br.com.farmacristo.model.config.infra;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import br.com.farmacristo.model.DTO.pharmacy.NewPharmacyDTO;
import br.com.farmacristo.model.DTO.product.NewProductDTO;
import br.com.farmacristo.model.DTO.user.NewUserDTO;
import br.com.farmacristo.model.entity.User;
import br.com.farmacristo.model.entity.enums.UserTier;
import br.com.farmacristo.model.exception.FarmaCristoException;
import br.com.farmacristo.model.repository.UserRepository;
import br.com.farmacristo.model.service.PharmacyService;
import br.com.farmacristo.model.service.ProductService;
import br.com.farmacristo.model.service.UserService;

@Configuration
public class DatabaseInitializer {
	
    @Bean
    CommandLineRunner init(@Autowired UserService userService, @Autowired PharmacyService pharmacyService, @Autowired UserRepository userRepository) {
		return args -> {
			List<NewUserDTO> newUsersList = new ArrayList<NewUserDTO>();
			List<NewPharmacyDTO> newPharmaciesList = new ArrayList<NewPharmacyDTO>();
			
			insertUsersData(newUsersList);
			insertPharmaciesData(newPharmaciesList);

			newUsersList.forEach(user -> {
				try {
					userService.save(user);
					User savedUser = userRepository.findByEmail(user.email()).get();
					savedUser.updateTier(UserTier.Administrator);
					userRepository.save(savedUser);
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
				new NewUserDTO("Administrador Farmacristo", "admin", "admin@redefarmacristo.com.br")
		));
    }
    
    public void insertPharmaciesData(List<NewPharmacyDTO> array) {
    	
    	
    	array.addAll(Arrays.asList(
        		new NewPharmacyDTO("Farmacristo", "11977789878", "farmacristo1@redefarmacristo.com.br", "18550524")
        ));
    }
    
}
