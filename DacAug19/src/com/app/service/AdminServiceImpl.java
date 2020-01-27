package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.IAdminDao;
import com.app.pojos.User;

@Service
@Transactional
public class AdminServiceImpl implements AdminService {

	@Autowired
	private IAdminDao dao;
	
	@Override
	public List<User> listUsers() {
		
		return dao.listUsers();
	}

	@Override
	public User findUser(int userId) {
		
		return dao.findUser(userId);
	}

}
