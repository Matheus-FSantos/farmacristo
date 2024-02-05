package br.com.farmacristo.model.service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import br.com.farmacristo.model.DTO.career.CurriculumDTO;
import br.com.farmacristo.model.DTO.career.NewCurriculumDTO;
import br.com.farmacristo.model.annotation.Auth;
import br.com.farmacristo.model.annotation.FieldsValidation;
import br.com.farmacristo.model.annotation.OnlyAdmin;
import br.com.farmacristo.model.entity.Curriculum;
import br.com.farmacristo.model.exception.specialization.InvalidFields;
import br.com.farmacristo.model.exception.specialization.curriculum.CurriculumNotFound;
import br.com.farmacristo.model.repository.CurriculumRepository;
import br.com.farmacristo.model.util.validation.CurriculumValidation;
import br.com.farmacristo.model.util.validation.DocumentValidation;
import jakarta.transaction.Transactional;

@Service
public class CurriculumService {

	@Autowired
	private CurriculumRepository repository;
	
	private Logger logger = LoggerFactory.getLogger(getClass());
	
	@OnlyAdmin
	@Auth(required=true)
	public List<CurriculumDTO> findAll() {
		List<Curriculum> resumes = this.repository.findAll();
		List<CurriculumDTO> resumesDTO = new ArrayList<CurriculumDTO>();
		
		for(Curriculum curriculum : resumes)
			resumesDTO.add(new CurriculumDTO(curriculum.getName(), curriculum.getDescription(), curriculum.getIsViewed(), curriculum.getCreatedAt()));
		
		return resumesDTO;
	}
	
	@OnlyAdmin
	@Auth(required=true)
	public CurriculumDTO findById(UUID id) throws CurriculumNotFound {
		Curriculum curriculum = this.findByIdDefault(id);
		return new CurriculumDTO(curriculum.getName(), curriculum.getDescription(), curriculum.getIsViewed(), curriculum.getCreatedAt());
	}
	
	public Curriculum findByIdDefault(UUID id) throws CurriculumNotFound {
		return this.repository.findById(id).orElseThrow(() -> new CurriculumNotFound("Curriculo não encontrado.", "Você tentou buscar informações de um curriculo inexistente. Por favor, altere as informações e realize uma nova busca."));
	}
	
	@Transactional
	@FieldsValidation
	@Auth(required=false)
	public UUID save(NewCurriculumDTO newCurriculum) throws InvalidFields {
		logger.info(newCurriculum.toString());
		
		/* Fields Validation */
		CurriculumValidation.validation(newCurriculum);	
		
		Curriculum curriculum = new Curriculum(newCurriculum.name(), newCurriculum.description());
		return this.repository.save(curriculum).getId();
	}
	
	
	@Transactional
	@FieldsValidation
	@Auth(required=true)
	public void updateCurriculumCV(UUID id, MultipartFile multipart) throws InvalidFields, CurriculumNotFound {
		DocumentValidation.pdfValidation(multipart);
		Curriculum curriculum = this.findByIdDefault(id);
		
		try {
			curriculum.updateCV(multipart.getBytes());
			this.repository.save(curriculum);
		} catch (IOException e) {
			System.out.println(e.getMessage());
		}		
	}

	@OnlyAdmin
	@Transactional
	@Auth(required=true)
	public void updateView(UUID id) throws CurriculumNotFound {
		Curriculum curriculum = this.findByIdDefault(id);
		curriculum.updateIsViewed(true);
		this.repository.save(curriculum);
	}
	
}
