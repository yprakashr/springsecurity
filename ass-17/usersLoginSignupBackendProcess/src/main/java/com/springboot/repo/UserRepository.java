package com.springboot.repo;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Repository;
import com.springboot.entity.Users;


@Repository
public interface UserRepository extends JpaRepository<Users, Long> {

	   @Query(value = "select * from users u where u.username=?1", nativeQuery = true)
	   public List<Users> userLogin(String username);

	public List<Users> findByusername(String username);

	public Optional<Users> findByemail(String email);
	
}
