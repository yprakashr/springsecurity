package com.example.demo.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.Task;

public interface TaskRepo extends JpaRepository<Task,Long > {

	List<Task> findAllByusersId(long userid);

}
