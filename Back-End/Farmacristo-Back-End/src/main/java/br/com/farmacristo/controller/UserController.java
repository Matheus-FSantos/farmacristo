package br.com.farmacristo.controller;

import java.io.IOException;
import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
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

import br.com.farmacristo.model.DTO.user.NewUserDTO;
import br.com.farmacristo.model.entity.User;
import br.com.farmacristo.model.exception.FarmaCristoException;
import br.com.farmacristo.model.service.UserService;

@RestController
@CrossOrigin("*")
@RequestMapping(path="/api/users")
public class UserController {
	
	@Autowired
	private UserService userService;
	
	@GetMapping
	public ResponseEntity<List<User>> findAll() {
		return ResponseEntity.ok().body(this.userService.findAll());
	}
	
	@GetMapping("/{userId}")
	public ResponseEntity<User> findById(@PathVariable(name="userId") UUID id) throws FarmaCristoException {
		return ResponseEntity.ok().body(this.userService.findById(id));
	}
	
	@GetMapping("/image/{userId}")
	public ResponseEntity<ByteArrayResource> findUserImageById(@PathVariable(name="userId") UUID id) throws FarmaCristoException {
		User user = this.userService.findById(id);
		
		HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.IMAGE_JPEG);
	
        ByteArrayResource image= new ByteArrayResource(user.getImageBytes());
        
		return ResponseEntity
				.ok()
					.headers(headers)
					.contentLength(user.getImageBytes().length)
					.body(image);
	}
	
	@PutMapping("/{userId}")
	public ResponseEntity<Void> update(@RequestBody NewUserDTO newUsersDTO, @PathVariable(name="userId") UUID id) throws FarmaCristoException {
		this.userService.updateUser(newUsersDTO, id);
		return ResponseEntity.noContent().build();
	}
	
	@PutMapping("/image/{userId}")
	public ResponseEntity<Void> updateUserImageById(@PathVariable(name="userId") UUID id, @RequestParam(name="image") MultipartFile file) throws IOException, FarmaCristoException {
		this.userService.updateUserImage(id, file.getBytes());
		return ResponseEntity.noContent().build();
	}
	
	@PutMapping("/tier-administrator/{userId}")
	public ResponseEntity<Void> updateUserTierToAdminById(@PathVariable(name="userId") UUID id) throws FarmaCristoException {
		this.userService.updateUserTierToAdmin(id);
		return ResponseEntity.noContent().build();
	}
	
	@PutMapping("/tier-client/{userId}")
	public ResponseEntity<Void> updateUserTierToClientById(@PathVariable(name="userId") UUID id) throws FarmaCristoException {
		this.userService.updateUserTierToClient(id);
		return ResponseEntity.noContent().build();
	}
	
	@PostMapping
	public ResponseEntity<Void> save(@RequestBody NewUserDTO newUserDTO) throws FarmaCristoException {
		this.userService.save(newUserDTO);
		return ResponseEntity.status(HttpStatus.CREATED).build();
	}
	
	@DeleteMapping("/{userId}")
	public ResponseEntity<Void> delete(@PathVariable(name="userId") UUID id) throws FarmaCristoException {
		this.userService.delete(id);
		return ResponseEntity.noContent().build();
	}
	
}
