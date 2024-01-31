package br.com.farmacristo.model.service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import br.com.farmacristo.model.DTO.user.NewUserDTO;
import br.com.farmacristo.model.DTO.user.UserDTO;
import br.com.farmacristo.model.annotation.Auth;
import br.com.farmacristo.model.annotation.FieldsValidation;
import br.com.farmacristo.model.annotation.OnlyAdmin;
import br.com.farmacristo.model.entity.ShoppingCart;
import br.com.farmacristo.model.entity.User;
import br.com.farmacristo.model.entity.enums.UserTier;
import br.com.farmacristo.model.exception.FarmaCristoException;
import br.com.farmacristo.model.exception.specialization.InvalidFields;
import br.com.farmacristo.model.exception.specialization.user.UserAlreadyExist;
import br.com.farmacristo.model.exception.specialization.user.UserNotFound;
import br.com.farmacristo.model.repository.UserRepository;
import br.com.farmacristo.model.util.images.ImageUtils;
import br.com.farmacristo.model.util.validation.UserValidation;
import jakarta.transaction.Transactional;

@Service
public class UserService {
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private ShoppingCartService shoppingCartService;
	
	@Autowired
	private PasswordEncoder passwordEncoder;

	@OnlyAdmin
	@Auth(required=false)
	public List<UserDTO> findAll() throws FarmaCristoException {
		List<User> users = this.userRepository.findAll();
		List<UserDTO> usersDTO = new ArrayList<UserDTO>();
		
		for(User user : users)
			usersDTO.add(new UserDTO(user.getId(), user.getName(), user.getEmail(), user.getPassword(), user.getTier()));
		
		
		return usersDTO;
	}
	
	@Auth(required=true)
	public UserDTO findById(UUID id) throws FarmaCristoException {
		User user = this.findByIdDefault(id);
		return new UserDTO(user.getId(), user.getEmail(), user.getEmail(), user.getPassword(), user.getTier());
	}
	
	public User findByIdDefault(UUID id) throws UserNotFound {
		return this.userRepository.findById(id).orElseThrow(() -> new UserNotFound("Usuário não encontrado.", "Você tentou buscar informações de um usuário inexistente. Por favor, altere as informações e realize uma nova busca."));
	}
	
	@Transactional
	@FieldsValidation
	@Auth(required=true)
	public void save(NewUserDTO newUserDTO) throws InvalidFields, UserAlreadyExist {
		/* Fields Validation */
		UserValidation.validation(newUserDTO);
		
		if(this.userRepository.findByEmail(newUserDTO.email()).isEmpty()) {
			User newUser = new User(UserTier.Client, newUserDTO.name(), newUserDTO.email(), this.passwordEncoder.encode(newUserDTO.password()));
			newUser.updateImage(ImageUtils.encryptedDefaultUserImage);
			newUser = userRepository.save(newUser);
			ShoppingCart shoppingCart = shoppingCartService.newShoppingCart(newUser);
			newUser.updateShoppingCart(shoppingCart);
		} else
			throw new UserAlreadyExist("Campos inválidos.", "Esta conta já existe em nosso sistema. Se você já é um usuário registrado, por favor, faça login para acessar sua conta.");
	}

	@Transactional
	@Auth(required=true)
	public void updateUser(NewUserDTO updatedUser, UUID id) throws InvalidFields, UserAlreadyExist, UserNotFound {
		/* Fields Validation */
		UserValidation.validation(updatedUser);
		
		User oldUser = this.findByIdDefault(id);
		Optional<User> user = this.userRepository.findByEmail(updatedUser.email());
		
		
		if((user.isPresent() && user.get().getId().equals(id)) || user.isEmpty()) {
			oldUser.updateName(updatedUser.name());
			oldUser.updateEmail(updatedUser.email());
			oldUser.updatePassword(updatedUser.password());
			oldUser.updateUpdatedAt();
			
			this.userRepository.save(oldUser);
		} else
			throw new UserAlreadyExist("Campos inválidos.", "Esta conta já existe em nosso sistema. Se você já é um usuário registrado, por favor, faça login para acessar sua conta.");
	}
	
	@Transactional
	@Auth(required=true)
	public void updateUserImage(UUID id, MultipartFile newImageBytes) throws UserNotFound, InvalidFields, IOException {
		/* Fields Validation */
		ImageUtils.validation(newImageBytes);
		
		User user = this.findByIdDefault(id);
		user.updateImage(newImageBytes.getBytes());
		this.userRepository.save(user);
	}
	
	@OnlyAdmin
	@Transactional
	@Auth(required=true)
	public void updateUserTierToAdmin(UUID id) throws UserNotFound {
		User user = this.findByIdDefault(id);
		user.updateTier(UserTier.Administrator);
		this.userRepository.save(user);
	}
	
	@OnlyAdmin
	@Transactional
	@Auth(required=true)
	public void updateUserTierToClient(UUID id) throws UserNotFound {
		User user = this.findByIdDefault(id);
		user.updateTier(UserTier.Client);
		this.userRepository.save(user);
	}

	@Transactional
	@Auth(required=true)
	public void delete(UUID id) throws UserNotFound {
		if(this.userRepository.existsById(id))
			this.userRepository.deleteById(id);
		else
			throw new UserNotFound("Usuário não encontrado.", "Você tentou deletar um usuário inexistente em nosso sistema. Por favor, altere as informações e tente novamente.");
	}
	
}
