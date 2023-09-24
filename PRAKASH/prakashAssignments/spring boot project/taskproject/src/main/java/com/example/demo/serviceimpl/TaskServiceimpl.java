package com.example.demo.serviceimpl;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Task;
import com.example.demo.entity.Users;
import com.example.demo.exception.APIException;
import com.example.demo.exception.TaskNotFound;
import com.example.demo.exception.UserNotFound;
import com.example.demo.payload.Taskdto;
import com.example.demo.repo.TaskRepo;
import com.example.demo.repo.UserRepo;
import com.example.demo.service.TaskService;

@Service
public class TaskServiceimpl implements TaskService {

	@Autowired
	private ModelMapper modelMapper;
	@Autowired
	private UserRepo userRepo;
	@Autowired
	private TaskRepo taskrepo;

	@Override
	public Taskdto saveTask(long userid, Taskdto taskdto) {
		Users user = userRepo.findById(userid)
				.orElseThrow(() -> new UserNotFound(String.format("User id %d not found", userid)));
		Task task = modelMapper.map(taskdto, Task.class);
		task.setUsers(user);
		// After setting the user we are saving the task
		Task savedtask = taskrepo.save(task);
		return modelMapper.map(savedtask, Taskdto.class);
	}

	@Override
	public List<Taskdto> getAllTasks(long userid) {
		userRepo.findById(userid).orElseThrow(() -> new UserNotFound(String.format("user ID %d not found", userid)));
		List<Task> tasks = taskrepo.findAllByusersId(userid);
		return tasks.stream().map(task -> modelMapper.map(task, Taskdto.class)).collect(Collectors.toList());
	}

	@Override
	public Taskdto getTask(long userid, long taskid) {
		Users user = userRepo.findById(userid)
				.orElseThrow(() -> new UserNotFound(String.format("user id %d not foumd", userid)));
		Task task = taskrepo.findById(taskid)
				.orElseThrow(() -> new TaskNotFound(String.format("user id %d not found", taskid)));
		if (user.getId() != task.getUsers().getId()) {
			throw new APIException(String.format("Task Id %d is not belongs to this User Id %d", taskid, userid));
		}
		return modelMapper.map(task, Taskdto.class);
	}


	@Override
	public void deleteTask(long userid, long taskid) {
		Users user = userRepo.findById(userid).orElseThrow(() -> new UserNotFound(String.format("user id %d not foumd", userid)));
		Task task = taskrepo.findById(taskid)
				.orElseThrow(() -> new TaskNotFound(String.format("user id %d not found", taskid)));
		if (user.getId() != task.getUsers().getId()) {
			throw new APIException(String.format("Task Id %d is not belongs to this User Id %d", taskid, userid));
		}
		taskrepo.deleteById(taskid);
	}

}
