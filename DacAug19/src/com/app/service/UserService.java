package com.app.service;

import com.app.pojos.User;

public interface UserService {
	
public User findByEmail(String email);

public int generateOtp();


}
