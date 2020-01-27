package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.app.dao.IAdminDao;
import com.app.pojos.User;
import com.app.service.AdminService;

@CrossOrigin(allowedHeaders = "*")
@Controller
@RequestMapping("/admin")
public class AdminController {
	
	@Autowired
	private AdminService service;
	
	@Autowired
	private IAdminDao dao;
	
	
	public AdminController() {
	System.out.println("in ctor of admincontroller");
	}
	
	@GetMapping("/getuser")
	public ResponseEntity<?> listUsers()
	{
		System.out.println("in list of user");
		
		List<User> list=service.listUsers();
		
		if(list.isEmpty())
			return new ResponseEntity<String>("No users",HttpStatus.NO_CONTENT);
		return new ResponseEntity<List<User>>(list,HttpStatus.OK);
	}
	
	
	@GetMapping("/user/{userId}")
	public ResponseEntity<?> findUser(@PathVariable int userId)
	{
		System.out.println("in admin controller findbyID");
		User userDetails=service.findUser(userId);
		if(userDetails==null)
			return new ResponseEntity<String>("User Not found",HttpStatus.NOT_FOUND);
		return new ResponseEntity<User>(userDetails,HttpStatus.OK);
	}
	
	@GetMapping("/getuser/{em}")
	public ResponseEntity<?> getUserByEmail(@RequestParam String em)
	{
		System.out.println("in admin controller findbyEmail");
		User userDetails=dao.findByEmail(em);
		if(userDetails==null)
			return new ResponseEntity<String>("User Not found",HttpStatus.NOT_FOUND);
		return new ResponseEntity<User>(userDetails,HttpStatus.OK);

	}
	
	
	@PostMapping("/changestatus")
	public int changeStatus(@RequestParam int id)
	{
		int stat=dao.changeStatus(id);
		return stat;
	}
	
	@GetMapping("/bookedslots")
	public ResponseEntity<?> bookedSlots()
	{
//		System.out.println("in admin controller bookedSlots");
//		if(user==null)
//			return new ResponseEntity<String>("User Not found",HttpStatus.NOT_FOUND);
//		return new ResponseEntity<User>(user,HttpStatus.OK);
		List<User> list=dao.listUsers();
		return new ResponseEntity<List<User>>(list,HttpStatus.OK);
	}
	
	/*
	 * @DeleteMapping("/delete/{userId}") public String
	 * deleteUser(@PathVariable("userId")int uid) {
	 * System.out.println("in admin controller delete"); return dao.deleteUser(uid);
	 * }
	 */
}
