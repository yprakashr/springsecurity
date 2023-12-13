package com.example.demo.service;

import java.util.List;

import com.example.demo.payload.Taskdto;

public interface TaskService {

	public Taskdto saveTask(long userId, Taskdto taskdto);

	public List<Taskdto> getAllTasks(long userid);

	public Taskdto getTask(long userid, long taskid);

	public void deleteTask(long userid, long taskid);

}
