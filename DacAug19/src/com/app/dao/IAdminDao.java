package com.app.dao;

import java.util.List;

import com.app.pojos.User;

public interface IAdminDao {
	public List<User> listUsers();
	
	
	User findUser(int userId);
	
	User findByEmail(String email);
	
	Integer changeStatus(int id);
	
	/* String deleteUser(int userId); */
}
