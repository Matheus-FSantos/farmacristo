package br.com.farmacristo.model.service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.farmacristo.model.DTO.pharmacy.NewPharmacyDTO;
import br.com.farmacristo.model.DTO.pharmacy.PharmacyDTO;
import br.com.farmacristo.model.DTO.viacep.AddressDTO;
import br.com.farmacristo.model.DTO.viacep.ViaCEPDTO;
import br.com.farmacristo.model.annotation.Auth;
import br.com.farmacristo.model.annotation.FieldsValidation;
import br.com.farmacristo.model.annotation.OnlyAdmin;
import br.com.farmacristo.model.entity.Pharmacy;
import br.com.farmacristo.model.exception.specialization.InvalidFields;
import br.com.farmacristo.model.exception.specialization.pharmacy.PharmacyAlreadyExist;
import br.com.farmacristo.model.exception.specialization.pharmacy.PharmacyNotFound;
import br.com.farmacristo.model.exception.specialization.viacep.CEPNotFound;
import br.com.farmacristo.model.repository.PharmacyRepository;
import br.com.farmacristo.model.service.restTemplate.ViaCEPService;
import br.com.farmacristo.model.util.validation.PharmacyValidation;
import jakarta.transaction.Transactional;

@Service
public class PharmacyService {

	@Autowired
	private PharmacyRepository pharmacyRepository;
	
	@Autowired
	private ViaCEPService viaCEPRepository;
	
	@Auth(required=false)
	public List<PharmacyDTO> findAll() throws CEPNotFound {
		List<Pharmacy> pharmacies = this.pharmacyRepository.findAll();
		List<PharmacyDTO> pharmaciesDTO = new ArrayList<PharmacyDTO>();
		
		for(Pharmacy pharmacy : pharmacies) {
			ViaCEPDTO viaCepDTO = this.viaCEPRepository.getAddressByCEP(pharmacy.getPostalCode());
			AddressDTO address = new AddressDTO(viaCepDTO);
			pharmacy.updatePostalCode(viaCepDTO.getCep());
			
			pharmaciesDTO.add(new PharmacyDTO(pharmacy, address));
		}
		
		return pharmaciesDTO;
	}
	
	@Auth(required=false)
	public PharmacyDTO findById(UUID id) throws PharmacyNotFound, CEPNotFound {
		Optional<Pharmacy> pharmacy = this.pharmacyRepository.findById(id);
		
		if(pharmacy.isPresent()) {
			ViaCEPDTO viaCepDTO = this.viaCEPRepository.getAddressByCEP(pharmacy.get().getPostalCode());
			AddressDTO address = new AddressDTO(viaCepDTO);
			
			pharmacy.get().updatePostalCode(viaCepDTO.getCep());
			return new PharmacyDTO(pharmacy.get(), address);
		} else
			throw new PharmacyNotFound("Farmácia não encontrada.", "Você tentou buscar informações de uma farmácia inexistente. Por favor, altere as informações e realize uma nova busca.");
	}
	
	@Auth(required=false)
	public List<Pharmacy> findByNameLike(String name) {
		return this.pharmacyRepository.findByNameLike(name);
	}
	
	@FieldsValidation
	@Auth(required=true)
	public void save(NewPharmacyDTO newPharmacyDTO) throws CEPNotFound, InvalidFields, PharmacyAlreadyExist {
		PharmacyValidation.validation(newPharmacyDTO);
		this.viaCEPRepository.CEPValidation(newPharmacyDTO.postalCode());
		
		if(this.pharmacyRepository.findByEmail(newPharmacyDTO.email()).isEmpty()) {
			Pharmacy newPharmacy = new Pharmacy(newPharmacyDTO.name(), newPharmacyDTO.number(), newPharmacyDTO.email(), newPharmacyDTO.postalCode(), LocalDateTime.now(), LocalDateTime.now());
			this.pharmacyRepository.save(newPharmacy);
		} else
			throw new PharmacyAlreadyExist("Campos inválidos.", "Esta farmácia já existe em nosso sistema. Por favor, altere as informações e tente novamente.");
	}
	
	@OnlyAdmin
	@Transactional
	@Auth(required=true)
	public void delete(UUID id) throws PharmacyNotFound {
		if(this.pharmacyRepository.existsById(id))
			this.pharmacyRepository.deleteById(id);
		else
			throw new PharmacyNotFound("Farmácia não encontrada.", "Você tentou deletar uma farmácia inexistente em nosso sistema. Por favor, altere as informações e tente novamente.");
	}
	
}
