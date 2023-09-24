package com.example.springmongo.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Datadictionary;
import com.example.demo.model.Dddocuments;
import com.example.springmongo.repo.DddocumentsRepository;

@Service
public class DddocumentsService {

	
	@Autowired
	private DatadictionaryService datadictionaryService;
	
	@Autowired
	private DddocumentsRepository dddocumentsRepository;
	
	
	@Autowired
	private SequenceGeneratorService sequenceGeneratorService;
	

	
	public List<Dddocuments> getAllDddocuments() {
	    return dddocumentsRepository.findAll();
	}
	
	
	public Optional<Dddocuments> getDddocumentsById(Long id) {
	    return dddocumentsRepository.findById(id);
	}
	
	public Dddocuments createDddocuments(Dddocuments dddocuments) {
		List<Datadictionary> docs=datadictionaryService.getAllDatadictionary();
		String docName=dddocuments.getDocname();
		List<Datadictionary> filteredList = docs.stream()
			    .filter(p -> p.getDictionaryname().equals(docName))
			    .collect(Collectors.toList());
		if(!filteredList.isEmpty()) {
			for(Datadictionary data:filteredList) {
				dddocuments.setDdid(data.getDdid());
			}
		}
		dddocuments.setId(sequenceGeneratorService.generateSequence(dddocuments.getId()));
	    return dddocumentsRepository.save(dddocuments);
	}
	
	
	  public boolean deleteDddocuments(long id) {
	        Dddocuments existingDddocuments = dddocumentsRepository.findById(id).orElse(null);
	        if (existingDddocuments != null) {
	            dddocumentsRepository.delete(existingDddocuments);
	            return true;
	        } else {
	            return false;
	        }
	    }
	
	 public Dddocuments updateDddocuments(long id, Dddocuments dddocuments) {
	        Dddocuments existingDddocuments = dddocumentsRepository.findById(id).orElse(null);
	        if (existingDddocuments != null) {
	            existingDddocuments.setDdid(dddocuments.getDdid());
	            existingDddocuments.setDocname(dddocuments.getDocname());
	            existingDddocuments.setDocjson(dddocuments.getDocjson());
	            return dddocumentsRepository.save(existingDddocuments);
	        } else {
	            return null;
	        }
	    }

}
