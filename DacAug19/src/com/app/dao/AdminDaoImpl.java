package com.app.dao;

import java.util.List;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.app.pojos.User;


@Repository
@Transactional
public class AdminDaoImpl implements IAdminDao {

	//dependency
	@Autowired
	private SessionFactory sf;
	
	@Override
	public List<User> listUsers() {
		
		String jpql="select u from User u where u.role='USER'";
		
		return sf.getCurrentSession().createQuery(jpql,User.class).getResultList();
	}

	@Override
	public User findUser(int userId) {
		
		return sf.getCurrentSession().get(User.class,userId);
	}

	@Override
	public User findByEmail(String email) {
		// TODO Auto-generated method stub
		String jpql="select u from User u where email=:em";
		
		return sf.getCurrentSession().createQuery(jpql,User.class).setParameter("em", email).getSingleResult();
	}

	@Override
	public Integer changeStatus(int id) {
		User user=sf.getCurrentSession().get(User.class,id);
		if(user.isStatus())
		{
			user.setStatus(false);
		}
		else
		{
			user.setStatus(true);
		}
		if(user!=null)
		{
			return 1;
		}
		else 
		{
			return 0;
		}
	}
	/*
	 * @Override public String deleteUser(int userId) {
	 * sf.getCurrentSession().delete(findUser(userId)); return
	 * "User deleted succesfully"; }
	 */
	
}
