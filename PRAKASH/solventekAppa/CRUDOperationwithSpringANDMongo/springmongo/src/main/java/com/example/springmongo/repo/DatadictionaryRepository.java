package com.example.springmongo.repo;

import java.util.Optional;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import com.example.demo.model.Datadictionary;



@Repository
public interface DatadictionaryRepository extends MongoRepository<Datadictionary, Long>{

	Optional<Datadictionary> findByDdid(long id);}
