package br.com.farmacristo.model.service.restTemplate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestTemplate;

import br.com.farmacristo.model.DTO.viacep.ViaCEPDTO;
import br.com.farmacristo.model.annotation.ExternalRequest;
import br.com.farmacristo.model.exception.specialization.viacep.CEPNotFound;

@Component
public class ViaCEPService {
	
	@Autowired
	private RestTemplate restTemplate;

	@ExternalRequest
	public void CEPValidation(String CEP) throws CEPNotFound {
		this.getAddressByCEP(CEP);
	}
	
	@ExternalRequest
	public ViaCEPDTO getAddressByCEP(String CEP) throws CEPNotFound {
		try {
            ResponseEntity<ViaCEPDTO> response = this.restTemplate.getForEntity(String.format("https://viacep.com.br/ws/%s/json", CEP), ViaCEPDTO.class);
            return response.getBody();
        } catch (HttpClientErrorException exception){
            throw new CEPNotFound("Endereço não encontrado.", "Você tentou buscar por um endereço inexistente. Por favor, altere as informações de CEP e tente novamente.");
        }
	}
	
}
