package com.example.springmongo.repo;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.demo.model.Projects;

public interface ProjectsRepository extends MongoRepository<Projects, Long> {}
