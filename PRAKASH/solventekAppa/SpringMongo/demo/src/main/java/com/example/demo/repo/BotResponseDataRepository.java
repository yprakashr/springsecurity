package com.example.demo.repo;

import java.util.Optional;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Botresponsedata;




@Repository
public interface BotResponseDataRepository extends MongoRepository<Botresponsedata, Long>{

	Optional<Botresponsedata[]> findByprojectId(Long id);}
