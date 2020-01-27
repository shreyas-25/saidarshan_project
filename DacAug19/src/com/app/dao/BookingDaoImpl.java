package com.app.dao;

import java.util.List;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.pojos.DarshanBooking;
import com.app.pojos.User;

@Service
@Transactional
public class BookingDaoImpl implements IBookingDao {

	@Autowired
	SessionFactory sf;
	
	@Override
	public Integer bookSlot(DarshanBooking booking) {
		
		return (Integer) sf.getCurrentSession().save(booking);
	}

	@Override
	public List<User> listUsers(DarshanBooking booking) {
		System.out.println("in darshan booking dao");
		
//		String jpql = "select User.userIderIderId, User.firstName, User.lastName, DarshanBooking.date, DarshanBooking.noOfPeople, DarshanBooking.slot from DarshanBooking join fetch User on DarshanBooking.userId=User.userId";
//				select firstName,lastName,date,noOfPeople,User.userId from booking inner join User on booking.UserId=User.userId;
		String jpql="select u from User u ";
		return sf.getCurrentSession().createQuery(jpql, User.class).getResultList();
	}

	@Override
	public List<DarshanBooking> userBookedList(int uid) {
		System.out.println("in userBooked list dao");
		User u=sf.getCurrentSession().get(User.class,uid);
		u.getDarshanBooking().size();
		//String jpql="select b from DarshanBooking b where b.userId='uid'";
		return u.getDarshanBooking();
	}

}
