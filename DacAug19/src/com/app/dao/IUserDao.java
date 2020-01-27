package com.app.dao;

import com.app.pojos.User;

public interface IUserDao {
	public Integer registerUser(User user);
	
	public User login(User user);
	
	public User profile(User user);
	
	
	public User findByEmail(String email);
	
	public void setPass(String pass, String email);
	
	

}
