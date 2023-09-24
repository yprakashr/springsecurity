package com.example.demo.repo;

import java.util.List;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;
import com.example.demo.model.Datadictionary;



@Repository
public interface DatadictionaryRepository extends MongoRepository<Datadictionary, Long>{

	List<Datadictionary> findByprojectId(Long id);
	
}
