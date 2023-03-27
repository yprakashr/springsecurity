package com.springboot.entity;

import org.hibernate.annotations.GenericGenerator;



import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

public class Roles {

	  @Id
	    @GeneratedValue(strategy= GenerationType.AUTO,generator="native")
	    @GenericGenerator(name = "native",strategy = "native")
	    private Long id;

	    private String name;

	    @ManyToOne
	    @JoinColumn(name = "id")
	    private Users user;
	
	
}
