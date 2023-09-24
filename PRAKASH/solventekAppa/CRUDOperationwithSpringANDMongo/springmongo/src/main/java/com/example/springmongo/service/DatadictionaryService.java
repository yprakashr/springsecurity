package com.example.springmongo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;


import com.example.demo.model.Datadictionary;
import com.example.demo.model.Dddocuments;
import com.example.springmongo.repo.DatadictionaryRepository;

@Service
public class DatadictionaryService {

	

	
	@Autowired
	private SequenceGeneratorService sequenceGeneratorService;

	@Autowired
	private MongoTemplate mongoTemplate;
	
	 @Autowired
	 private DatadictionaryRepository datadictionaryRepository;
	 
	 
	 public List<Datadictionary> getAllDatadictionary() {
	        return datadictionaryRepository.findAll();
	    }
	 
	 public Optional<Datadictionary> getDatadictionaryById(Long id) {
	        return datadictionaryRepository.findById(id);
	    }
	 
	   public Datadictionary createDatadictionary(Datadictionary datadictionary) {
	        datadictionary.setDdid(sequenceGeneratorService.generateSequence(datadictionary.getDdid()));
	        return datadictionaryRepository.save(datadictionary);
	    }
		  
	

	    public Datadictionary updateInsurance(long id, Datadictionary insurance) {
	        Query query = new Query(Criteria.where("ddid").is(id));
	        Update update = new Update()
	            .set("ddname", insurance.getDictionaryname())
	            .set("dd_structure", insurance.getFormFields());
	        mongoTemplate.updateFirst(query, update, Datadictionary.class);
	        return insurance;
	    }
	    
	    
	   
	   
	   public void deleteDatadictionaryById(Long id) {
	        datadictionaryRepository.deleteById(id);
	    }
	
}
