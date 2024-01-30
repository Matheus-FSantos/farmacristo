package br.com.farmacristo.model.service;

import java.io.IOException;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import br.com.farmacristo.model.DTO.pharmacy.PharmacyDTO;
import br.com.farmacristo.model.DTO.product.NewProductDTO;
import br.com.farmacristo.model.DTO.product.ProductDTO;
import br.com.farmacristo.model.DTO.product.ProductPharmacyDTO;
import br.com.farmacristo.model.annotation.Auth;
import br.com.farmacristo.model.annotation.FieldsValidation;
import br.com.farmacristo.model.annotation.OnlyAdmin;
import br.com.farmacristo.model.entity.Pharmacy;
import br.com.farmacristo.model.entity.Product;
import br.com.farmacristo.model.exception.specialization.InvalidFields;
import br.com.farmacristo.model.exception.specialization.pharmacy.PharmacyNotFound;
import br.com.farmacristo.model.exception.specialization.product.ProductNotFound;
import br.com.farmacristo.model.exception.specialization.viacep.CEPNotFound;
import br.com.farmacristo.model.repository.ProductRepository;
import br.com.farmacristo.model.util.images.ImageUtils;
import br.com.farmacristo.model.util.validation.ProductValidation;
import jakarta.transaction.Transactional;

@Service
public class ProductService {
	
	@Autowired
	private ProductRepository productRepository;
	
	@Autowired
	private PharmacyService pharmacyService;
	
	@Auth(required=false)
	public List<ProductDTO> findAll() throws PharmacyNotFound, CEPNotFound {
		List<Product> products = this.productRepository.findAll();
		List<ProductDTO> productsDTO = new ArrayList<ProductDTO>();
		
		Set<PharmacyDTO> pharmaciesDTO = new HashSet<PharmacyDTO>();
		
		for(Product product : products) {
			for(Pharmacy pharmacy : product.getPharmacies())
				pharmaciesDTO.add(this.pharmacyService.findById(pharmacy.getId()));
			
			productsDTO.add(new ProductDTO(product.getId(), product.getName(), product.getDescription(), product.getBrand(), product.getPrice(), product.getPromotionalPrice(), product.getPrescriptionIsRequired(), pharmaciesDTO));			
		}
		
		return productsDTO;
	}
	
	@OnlyAdmin
	@Auth(required=true)
	public ProductDTO findById(UUID id) throws ProductNotFound, PharmacyNotFound, CEPNotFound {
		Product product = this.findByIdDefault(id);
		Set<PharmacyDTO> pharmaciesDTO = new HashSet<PharmacyDTO>();
		
		
		for(Pharmacy pharmacy : product.getPharmacies())
			pharmaciesDTO.add(this.pharmacyService.findById(pharmacy.getId()));
		
		return new ProductDTO(product.getId(), product.getName(), product.getDescription(), product.getBrand(), product.getPrice(), product.getPromotionalPrice(), product.getPrescriptionIsRequired(), pharmaciesDTO);
	}

	public Product findByIdDefault(UUID id) throws ProductNotFound {
		return this.productRepository.findById(id).orElseThrow(() -> new ProductNotFound("Produto não encontrado.", "Você tentou buscar informações de um produto inexistente. Por favor, altere as informações e realize uma nova busca."));
	}
	
	@OnlyAdmin
	@Transactional
	@FieldsValidation
	@Auth(required=true)
	public void save(NewProductDTO newProductDTO) throws InvalidFields, PharmacyNotFound, CEPNotFound {
		/* Fields Validation */
		ProductValidation.validation(newProductDTO);
		Set<Pharmacy> pharmacies = this.getPharmacies(newProductDTO.getPharmacies());
		
		Product newProduct = new Product(newProductDTO.getName(), newProductDTO.getDescription(), newProductDTO.getBrand(), newProductDTO.getPrice(), newProductDTO.getPromotionalPrice(), newProductDTO.getPrescriptionIsRequired(), LocalDateTime.now(), LocalDateTime.now());
		
		newProduct.getPharmacies().clear();
		newProduct.getPharmacies().addAll(pharmacies);
		newProduct.updateImage(ImageUtils.encryptedDefaultImage);
		
		this.productRepository.save(newProduct);
	}
	
	@OnlyAdmin
	@Transactional
	@FieldsValidation
	@Auth(required=true)
	public void update(UUID id, NewProductDTO updatedProductDTO) throws InvalidFields, ProductNotFound, PharmacyNotFound, CEPNotFound {
		/* Fields Validation */
		ProductValidation.validation(updatedProductDTO);
		Set<Pharmacy> pharmacies = this.getPharmacies(updatedProductDTO.getPharmacies());
		Product oldProduct = this.findByIdDefault(id);
		this.modify(oldProduct, updatedProductDTO);
		
		oldProduct.getPharmacies().clear();
		oldProduct.getPharmacies().addAll(pharmacies);
		this.productRepository.save(oldProduct);
	}
	
	@OnlyAdmin
	@Transactional
	@Auth(required=true)
	public void updateImage(UUID id, MultipartFile newImageBytes) throws ProductNotFound, InvalidFields, IOException {
		/* Fields Validation */
		ImageUtils.validation(newImageBytes);
		
		Product product = this.findByIdDefault(id);
		product.updateImage(newImageBytes.getBytes());
		this.productRepository.save(product);
	}
	
	@OnlyAdmin
	@Transactional
	@Auth(required=true)
	public void delete(UUID id) throws ProductNotFound {
		if(this.productRepository.existsById(id))
			this.productRepository.deleteById(id);
		else
			throw new ProductNotFound("Produto não encontrado.", "Você tentou deletar um produto inexistente em nosso sistema. Por favor, altere as informações e tente novamente.");
	}
	
	private void modify(Product oldProduct, NewProductDTO updatedProductDTO) {
		oldProduct.updateBrand(updatedProductDTO.getBrand());
		oldProduct.updateDescription(updatedProductDTO.getDescription());
		oldProduct.updateName(updatedProductDTO.getName());
		oldProduct.updatePrescriptionIsRequired(updatedProductDTO.getPrescriptionIsRequired());
		oldProduct.updatePrice(updatedProductDTO.getPrice());
		oldProduct.updatePromotionalPrice(updatedProductDTO.getPromotionalPrice());
		oldProduct.updateUpdatedAt();
	}
	
	private Set<Pharmacy> getPharmacies(Set<ProductPharmacyDTO> pharmacies) throws PharmacyNotFound, CEPNotFound {
		Set<Pharmacy> pharmaciesFinal = new HashSet<Pharmacy>();
		
		for(ProductPharmacyDTO pharmacy : pharmacies) {
			pharmaciesFinal.add(pharmacyService.findByIdDefault(UUID.fromString(pharmacy.id())));
		}
		
		return pharmaciesFinal;
	}
	
}
