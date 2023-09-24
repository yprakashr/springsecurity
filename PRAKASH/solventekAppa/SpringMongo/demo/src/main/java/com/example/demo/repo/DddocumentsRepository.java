package com.example.demo.repo;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Dddocuments;



@Repository
public interface DddocumentsRepository extends MongoRepository<Dddocuments, Long>{}
