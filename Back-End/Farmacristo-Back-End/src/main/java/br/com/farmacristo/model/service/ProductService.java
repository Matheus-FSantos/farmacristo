package br.com.farmacristo.model.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.farmacristo.model.DTO.product.NewProductDTO;
import br.com.farmacristo.model.annotation.Auth;
import br.com.farmacristo.model.annotation.FieldsValidation;
import br.com.farmacristo.model.annotation.OnlyAdmin;
import br.com.farmacristo.model.entity.Product;
import br.com.farmacristo.model.exception.specialization.InvalidFields;
import br.com.farmacristo.model.exception.specialization.product.ProductNotFound;
import br.com.farmacristo.model.repository.ProductRepository;
import br.com.farmacristo.model.util.images.ImageUtils;
import br.com.farmacristo.model.util.validation.ProductValidation;
import jakarta.transaction.Transactional;

@Service
public class ProductService {
	
	@Autowired
	private ProductRepository productRepository;
	
	@Auth(required=false)
	public List<Product> findAll() {
		return this.productRepository.findAll();
	}
	
	@OnlyAdmin
	@Auth(required=true)
	public Product findById(UUID id) throws ProductNotFound {
		return this.productRepository.findById(id).orElseThrow(() -> new ProductNotFound("Produto não encontrado.", "Você tentou buscar informações de um produto inexistente. Por favor, altere as informações e realize uma nova busca."));
	}
	
	@Auth(required=false)
	public List<Product> findByNameLike(String name) {
		return this.productRepository.findByNameLike(name);
	}
	
	@OnlyAdmin
	@Transactional
	@FieldsValidation
	@Auth(required=true)
	public void save(NewProductDTO newProductDTO) throws InvalidFields {
		/* Fields Validation */
		ProductValidation.validation(newProductDTO);
		Product newProduct = new Product(newProductDTO.getName(), newProductDTO.getDescription(), newProductDTO.getBrand(), newProductDTO.getPrice(), newProductDTO.getPromotionalPrice(), newProductDTO.getPrescriptionIsRequired(), LocalDateTime.now(), LocalDateTime.now());
		
		newProduct.updateImage(ImageUtils.encryptedDefaultImage);
		this.productRepository.save(newProduct);
	}
	
	@OnlyAdmin
	@Transactional
	@FieldsValidation
	@Auth(required=true)
	public void update(UUID id, NewProductDTO updatedProductDTO) throws InvalidFields, ProductNotFound {
		/* Fields Validation */
		ProductValidation.validation(updatedProductDTO);
		Product oldProduct = this.findById(id);
		this.modify(oldProduct, updatedProductDTO);
		this.productRepository.save(oldProduct);
	}
	
	@OnlyAdmin
	@Transactional
	@Auth(required=true)
	public void updateImage(UUID id, byte[] newImageBytes) throws ProductNotFound {
		Product product = this.findById(id);
		product.updateImage(newImageBytes);
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
	
}
