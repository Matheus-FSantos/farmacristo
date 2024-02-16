package br.com.farmacristo.model.service;

import java.io.IOException;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

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
import br.com.farmacristo.model.service.restTemplate.CEPService;
import br.com.farmacristo.model.util.images.ImageUtils;
import br.com.farmacristo.model.util.validation.PharmacyValidation;
import jakarta.transaction.Transactional;

@Service
public class PharmacyService {

	@Autowired
	private PharmacyRepository pharmacyRepository;
	
	@Autowired
	private CEPService viaCEPRepository;
	
	@Auth(required=false)
	public List<PharmacyDTO> findAll() throws CEPNotFound {
		List<Pharmacy> pharmacies = this.pharmacyRepository.findAll();
		List<PharmacyDTO> pharmaciesDTO = new ArrayList<PharmacyDTO>();
		
		for(Pharmacy pharmacy : pharmacies) {
			ViaCEPDTO viaCepDTO = this.viaCEPRepository.getAddressByCEP(pharmacy.getPostalCode());
			AddressDTO address = new AddressDTO(viaCepDTO);
			pharmaciesDTO.add(new PharmacyDTO(pharmacy.getId(), pharmacy.getName(), pharmacy.getEmail(), pharmacy.getNumber(), pharmacy.getPostalCode(), address));
		}
		
		return pharmaciesDTO;
	}
	
	public Pharmacy findByIdDefault(UUID id) throws PharmacyNotFound {
		return this.pharmacyRepository.findById(id).orElseThrow(() -> new PharmacyNotFound("Farmácia não encontrada.", "Você tentou buscar informações de uma farmácia inexistente. Por favor, altere as informações e realize uma nova busca."));
	}
	
	@Auth(required=false)
	public PharmacyDTO findById(UUID id) throws PharmacyNotFound, CEPNotFound {
		Optional<Pharmacy> pharmacy = this.pharmacyRepository.findById(id);
		
		if(pharmacy.isPresent()) {
			ViaCEPDTO viaCepDTO = this.viaCEPRepository.getAddressByCEP(pharmacy.get().getPostalCode());
			AddressDTO address = new AddressDTO(viaCepDTO);
			return new PharmacyDTO(pharmacy.get().getId(), pharmacy.get().getName(), pharmacy.get().getEmail(), pharmacy.get().getNumber(), pharmacy.get().getPostalCode(), address);
		} else
			throw new PharmacyNotFound("Farmácia não encontrada.", "Você tentou buscar informações de uma farmácia inexistente. Por favor, altere as informações e realize uma nova busca.");
	}

	@OnlyAdmin
	@Transactional
	@FieldsValidation
	@Auth(required=true)
	public UUID save(NewPharmacyDTO newPharmacyDTO) throws CEPNotFound, InvalidFields, PharmacyAlreadyExist {
		PharmacyValidation.validation(newPharmacyDTO);
		this.viaCEPRepository.CEPValidation(newPharmacyDTO.postalCode());
		
		if(this.pharmacyRepository.findByEmail(newPharmacyDTO.email()).isEmpty()) {
			Pharmacy newPharmacy = new Pharmacy(newPharmacyDTO.name(), newPharmacyDTO.number(), newPharmacyDTO.email(), newPharmacyDTO.postalCode(), LocalDateTime.now(), LocalDateTime.now());
			newPharmacy.updateImage(ImageUtils.encryptedDefaultImage);
			return this.pharmacyRepository.save(newPharmacy).getId();
		} else
			throw new PharmacyAlreadyExist("Campos inválidos.", "Esta farmácia já existe em nosso sistema. Por favor, altere as informações e tente novamente.");
	}
	
	@OnlyAdmin
	@Transactional
	@FieldsValidation
	@Auth(required=true)
	public void updatePharmacy(UUID id, NewPharmacyDTO updatedPharmacy) throws InvalidFields, CEPNotFound, PharmacyNotFound, PharmacyAlreadyExist {
		PharmacyValidation.validation(updatedPharmacy);
		this.viaCEPRepository.CEPValidation(updatedPharmacy.postalCode());
		
		Pharmacy oldPharmacy = this.findByIdDefault(id);
		Optional<Pharmacy> findByEmail = this.pharmacyRepository.findByEmail(updatedPharmacy.email());
		
		if(findByEmail.isEmpty() || (findByEmail.isPresent() && findByEmail.get().getId().equals(id))) {
			Pharmacy newUpdatedPharmacy = new Pharmacy(id, updatedPharmacy.name(), updatedPharmacy.number(), updatedPharmacy.email(), updatedPharmacy.postalCode(), oldPharmacy.getImage(), oldPharmacy.getCreatedAt(), LocalDateTime.now());
			this.pharmacyRepository.save(newUpdatedPharmacy);
		} else
			throw new PharmacyAlreadyExist("Campos inválidos.", "Esta farmácia já existe em nosso sistema. Por favor, altere as informações e tente novamente.");
	}

	@OnlyAdmin
	@Transactional
	@FieldsValidation
	@Auth(required=true)
	public void updatePharmacyImageById(UUID id, MultipartFile newImageBytes) throws PharmacyNotFound, CEPNotFound, InvalidFields, IOException {
		/* Fields Validation */
		ImageUtils.validation(newImageBytes);
		
		Pharmacy pharmacy = this.findByIdDefault(id);
		Pharmacy updatedPharmacy = new Pharmacy(id, pharmacy.getName(), pharmacy.getNumber(), pharmacy.getEmail(), pharmacy.getPostalCode(), newImageBytes.getBytes(), pharmacy.getCreatedAt(), LocalDateTime.now());
		this.pharmacyRepository.save(updatedPharmacy);
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
