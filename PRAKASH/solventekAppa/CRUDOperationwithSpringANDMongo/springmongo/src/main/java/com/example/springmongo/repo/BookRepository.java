package com.example.springmongo.repo;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.springmongo.model.Bookstore;

@Repository
public interface BookRepository extends MongoRepository<Bookstore, Long>{}







