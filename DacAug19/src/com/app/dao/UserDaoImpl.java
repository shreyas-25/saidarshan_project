package com.app.dao;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.pojos.User;

@Service
@Transactional
public class UserDaoImpl implements IUserDao {

	@Autowired
	SessionFactory sf;
	
	
	
	@Override
	public Integer registerUser(User user) {

		return (Integer) sf.getCurrentSession().save(user);
	}



	@Override
	public User login(User user) {
		String jpql="select u from User u where u.email=:em and u.password=:pass";
		return sf.getCurrentSession().createQuery(jpql,User.class).setParameter("em",user.getEmail()).setParameter("pass",user.getPassword()).getSingleResult();
	}



	@Override
	public User findByEmail(String email) {
		System.out.println("in dao "+email);
		String str = "select u from User u where u.email=:em";
		return sf.getCurrentSession().createQuery(str,User.class).setParameter("em",email).
				getSingleResult();
	}



	@Override
	public void setPass(String pass, String email) {
		
		String str = "select u from User u where u.email=:em";
		User u= sf.getCurrentSession().createQuery(str,User.class).setParameter("em",email).
					getSingleResult();	
			u.setPassword(pass);
	}



	@Override
	public User profile(User user) {
		// TODO Auto-generated method stub
		
		String jpql="select u from User u where u.email=:em";
		User u = sf.getCurrentSession().createQuery(jpql,User.class).setParameter("em",user.getEmail()).getSingleResult();
		u.setFirstName(user.getFirstName());
		u.setMiddleName(user.getMiddleName());
		u.setLastName(user.getLastName());
		u.setDob(user.getDob());
		u.setGender(user.getGender());
		u.setState(user.getState());
		u.setRole(user.getRole());
		return user;	
	}
	

}
