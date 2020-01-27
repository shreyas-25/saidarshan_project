package com.app.service;

import java.util.List;

import com.app.pojos.User;

public interface AdminService {
	List<User> listUsers();

	User findUser(int userId);
}
