package br.com.farmacristo.controller;

import java.io.IOException;
import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import br.com.farmacristo.model.DTO.user.LoginDTO;
import br.com.farmacristo.model.DTO.user.LoginResponseDTO;
import br.com.farmacristo.model.DTO.user.NewUserDTO;
import br.com.farmacristo.model.DTO.user.UserDTO;
import br.com.farmacristo.model.entity.User;
import br.com.farmacristo.model.exception.FarmaCristoException;
import br.com.farmacristo.model.service.UserService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;

@RestController
@RequestMapping(path="/api/users")
@Tag(name="User", description="Controller class that will handle all requests coming to the URL: \"/api/users\" - that is, it controls everything related to the user.")
public class UserController {
	
	@Autowired
	private UserService userService;
	
	@PreAuthorize("hasRole('Administrator')")
	@Operation (
		summary="Find all users",
		description="With this method you will be able to search for all existing users in our system. In return for the request, all formatted information will come from the respective user, if it exists." 
	)
	@Cacheable("users")
	@GetMapping
	public ResponseEntity<List<UserDTO>> findAll() throws FarmaCristoException {
		return ResponseEntity.ok().body(this.userService.findAll());
	}

	@Operation (
		summary="Find user by id",
		description="With this method you can search for a specific user in our system. In return, all formatted information will come from the respective user, if it exists." 
	)
	@GetMapping("/{userId}")
	public ResponseEntity<UserDTO> findById(@PathVariable(name="userId") UUID id) throws FarmaCristoException {
		return ResponseEntity.ok().body(this.userService.findById(id));
	}
	
	@Operation (
		summary="Find user image by id",
		description="With this method you can search for a specific image of a user in our system. In return for this request, the image of the user will come, if it exists in our system." 
	)
	@GetMapping("/image/{userId}")
	public ResponseEntity<ByteArrayResource> findUserImageById(@PathVariable(name="userId") UUID id) throws FarmaCristoException {
		User user = this.userService.findByIdDefault(id);
		
		HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.IMAGE_JPEG);
	
        ByteArrayResource image= new ByteArrayResource(user.getImageBytes());
        
		return ResponseEntity
				.ok()
					.headers(headers)
					.contentLength(user.getImageBytes().length)
					.body(image);
	}
	
	@Operation (
		summary="Save a new user",
		description="With this method you can add a new user to our system. In response to the request, a 204 will be returned if everything goes well, if any invalid data is entered an error message will be displayed and the status 422 will be returned and between others." 
	)
	@CacheEvict(value="users", allEntries=true)
	@PostMapping
	public ResponseEntity<Void> save(@RequestBody NewUserDTO newUserDTO) throws FarmaCristoException {
		this.userService.save(newUserDTO);
		return ResponseEntity.status(HttpStatus.CREATED).build();
	}
	
	@Operation (
		summary="Login",
		description="Login method." 
	)
	@CacheEvict(value="users", allEntries=true)
	@PostMapping("/login")
	public ResponseEntity<LoginResponseDTO> login(@RequestBody LoginDTO login) throws FarmaCristoException {
		return ResponseEntity.ok().body(this.userService.login(login));
	}
	
	@Operation (
		summary="Update an existent user",
		description="With this method you update an existing user in our system. In response to the request, a 204 will be returned if everything goes well, if any invalid data is entered an error message will be displayed and the status 422 will be returned and between others." 
	)
	@CacheEvict(value="users", allEntries=true)
	@PutMapping("/{userId}")
	public ResponseEntity<Void> update(@RequestBody NewUserDTO newUsersDTO, @PathVariable(name="userId") UUID id) throws FarmaCristoException {
		this.userService.updateUser(newUsersDTO, id);
		return ResponseEntity.noContent().build();
	}
	
	@Operation (
		summary="Update the image of an existing user",
		description="With this method you update the image of an existing user in our system. In response to the request, a 204 will be returned if everything goes well, otherwise an error message will be reported." 
	)
	@CacheEvict(value="users", allEntries=true)
	@PutMapping("/image/{userId}")
	public ResponseEntity<Void> updateUserImageById(@PathVariable(name="userId") UUID id, @RequestParam(name="image") MultipartFile file) throws IOException, FarmaCristoException {
		this.userService.updateUserImage(id, file);
		return ResponseEntity.noContent().build();
	}
	
	@PreAuthorize("hasRole('Administrator')")
	@Operation (
		summary="Downgrade the tier of an existing user (to client)",
		description="With this method you lower the level of an existing user in our system. In response to the request, a 204 will be returned if everything goes well, otherwise an error message will be reported." 
	)
	@CacheEvict(value="users", allEntries=true)
	@PutMapping("/tier-administrator/{userId}")
	public ResponseEntity<Void> updateUserTierToAdminById(@PathVariable(name="userId") UUID id) throws FarmaCristoException {
		this.userService.updateUserTierToAdmin(id);
		return ResponseEntity.noContent().build();
	}
	
	@PreAuthorize("hasRole('Administrator')")
	@Operation (
		summary="Update the tier of an existing user (to admin)",
		description="With this method you increase the level of an existing user in our system. In response to the request, a 204 will be returned if everything goes well, otherwise an error message will be reported." 
	)
	@CacheEvict(value="users", allEntries=true)
	@PutMapping("/tier-client/{userId}")
	public ResponseEntity<Void> updateUserTierToClientById(@PathVariable(name="userId") UUID id) throws FarmaCristoException {
		this.userService.updateUserTierToClient(id);
		return ResponseEntity.noContent().build();
	}
	
	@Operation (
		summary="Delete an existent user",
		description="With this method you delete an existing user in our system. In response to the request, a 204 will be returned if everything goes well, if the ID is incorrect an error message will be returned and the status will be 404." 
	)
	@CacheEvict(value="users", allEntries=true)
	@DeleteMapping("/{userId}")
	public ResponseEntity<Void> delete(@PathVariable(name="userId") UUID id) throws FarmaCristoException {
		this.userService.delete(id);
		return ResponseEntity.noContent().build();
	}
	
}
