package com.springboot.entity;

import org.hibernate.annotations.GenericGenerator;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;


@Entity
public class Roles {

	  @Id
	    @GeneratedValue(strategy= GenerationType.AUTO,generator="native")
	    @GenericGenerator(name = "native",strategy = "native")
	    private Long Roles_id;

	    private String name;

	    @ManyToOne
	    @JoinColumn(name = "id")
	    private Users user;
	    
		public Long getRoles_id() {
			return Roles_id;
		}

		public void setRoles_id(Long roles_id) {
			Roles_id = roles_id;
		}

		public String getName() {
			return name;
		}

		public void setName(String name) {
			this.name = name;
		}

		public Users getUser() {
			return user;
		}

		public void setUser(Users user) {
			this.user = user;
		}

		@Override
		public String toString() {
			return "Roles [Roles_id=" + Roles_id + ", name=" + name + ", user=" + user + "]";
		}

		public Roles(Long roles_id, String name, Users user) {
			super();
			Roles_id = roles_id;
			this.name = name;
			this.user = user;
		}

		public Roles() {
			super();
		}
	
}
