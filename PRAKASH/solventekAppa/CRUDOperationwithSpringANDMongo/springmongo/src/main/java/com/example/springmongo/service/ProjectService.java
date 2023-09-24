package com.example.springmongo.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Datadictionary;
import com.example.demo.model.Dddocuments;
import com.example.demo.model.Projects;
import com.example.springmongo.repo.DddocumentsRepository;
import com.example.springmongo.repo.ProjectsRepository;


@Service
public class ProjectService {

	@Autowired
	private ProjectsRepository projectsRepository;
	
	
	@Autowired
	private SequenceGeneratorService sequenceGeneratorService;
	

	
	public List<Projects> getAllProjects() {
		List<Projects> projects=	 projectsRepository.findAll();
		List<Projects> activeProjects = projects.stream()
                .filter(person -> person.isFlag())
                .collect(Collectors.toList());
	    return activeProjects;
	}
	
	
	public Optional<Projects> getProjectsById(Long id) {
		Optional<Projects> projects = projectsRepository.findById(id);
		if(projects.get().isFlag()) {
	    	    return projects;
		}else {
			return null;
		}}
	
	
	
	public Projects createProjects(Projects projects) {
		projects.setId(sequenceGeneratorService.generateSequence(projects.getId()));
		return projectsRepository.save(projects);
	}
	
	
	  public boolean deleteProgrammers(long id) {
	        Projects existingProjects = projectsRepository.findById(id).orElse(null);
	        if(existingProjects != null && existingProjects.isFlag()) {
	        	existingProjects.setFlag(false);
	        	projectsRepository.save(existingProjects);
	            return true;
      	        } else {
	            return false;
	        }
	    }
	  
	  
	
	 public Projects updateProjects(long id, Projects projects) {
		 Projects project = projectsRepository.findById(id).orElse(null);
	        if (project != null && project.isFlag()) {
	        	project.setId(projects.getId());
	        	project.setName(projects.getName());
	        	project.setDescription(projects.getDescription());
	            return projectsRepository.save(projects);
	        } else {
	            return null;
	        }
	    }
	
	 
}
