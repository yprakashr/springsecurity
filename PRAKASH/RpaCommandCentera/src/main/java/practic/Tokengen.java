package practic;

import java.util.UUID;
import java.security.SecureRandom;
import java.util.Base64;

public class Tokengen {
	
	private static final int TOKEN_LENGTH = 32;
public static void main(String[] args) {
	String token=UUID.randomUUID().toString();
	System.out.println(token);
	
	SecureRandom random = new SecureRandom();
    byte[] tokenBytes = new byte[TOKEN_LENGTH];
    random.nextBytes(tokenBytes);
  String str=  Base64.getUrlEncoder().withoutPadding().encodeToString(tokenBytes);
  System.out.println(str);
}
}
