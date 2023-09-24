package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

import com.example.demo.model.Botresponsedata;
import com.example.demo.model.Datadictionary;
import com.example.demo.model.Dddocuments;
import com.example.demo.model.Projects;
import com.example.demo.repo.BotResponseDataRepository;
import com.example.demo.repo.DatadictionaryRepository;

@Service
public class BotResponseDataService {

	@Autowired
	private SequenceGeneratorService sequenceGeneratorService;

	@Autowired
	private MongoTemplate mongoTemplate;

	@Autowired
	private BotResponseDataRepository botResData;

	public List<Botresponsedata> getAllBotResData() {
		return botResData.findAll();
	}

	public Optional<Botresponsedata> getBotResDataById(Long id) {
		return botResData.findById(id);
	}

	public Botresponsedata createBotResData(Botresponsedata datadictionary) {
		datadictionary.setId(sequenceGeneratorService.generateSequence(datadictionary.getId()));
		return botResData.save(datadictionary);
	}

	public Optional<Botresponsedata[]> getBotResDatayByProjectId(Long id) {
		return botResData.findByprojectId(id);
	}

	public void updateBotResData(Botresponsedata resData) {
		botResData.save(resData);
	}

	public String getCountofReviewdDocs(Long id) {

		Botresponsedata existingProjects[] = botResData.findByprojectId(id).orElse(null);

		int reviewd = 0;

		for (int i = 0; i < existingProjects.length; i++) {
			if (existingProjects[i].isFlag()) {
				reviewd = reviewd + 1;
			} else {

			}
		}

		return reviewd + " of " + existingProjects.length;
	}

}
