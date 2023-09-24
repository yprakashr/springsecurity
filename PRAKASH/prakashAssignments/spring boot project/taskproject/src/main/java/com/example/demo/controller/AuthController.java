package com.example.demo.controller;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.entity.Users;
import com.example.demo.payload.JWTauthenticaitonResponse;
import com.example.demo.payload.LoginDto;
import com.example.demo.payload.Userdto;
import com.example.demo.security.JwTokenProvider;
import com.example.demo.service.UserService;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
	@Autowired
	private UserService userService;
	@Autowired
	private AuthenticationManager auth;
	@Autowired
	private JwTokenProvider jwtTokenProvider;
	@PostMapping("/register")
	public ResponseEntity<Userdto> createUser(@RequestBody Userdto usersdto) {
		return new ResponseEntity<>(userService.createUser(usersdto), HttpStatus.CREATED);
	}

	@PostMapping("/login")
	public ResponseEntity<JWTauthenticaitonResponse> loginUser(@RequestBody LoginDto logindto) throws Exception {
		Authentication authentication = auth
				.authenticate(new UsernamePasswordAuthenticationToken(logindto.getEmail(), logindto.getPassword()));
		SecurityContextHolder.getContext().setAuthentication(authentication);
		String token=jwtTokenProvider.generateToken(authentication);
		return  ResponseEntity.ok(new JWTauthenticaitonResponse(token));
	}

	@GetMapping("/users")
	public List<Users> getAllusers() {
		return  userService.getAllUsers();
	}

}






