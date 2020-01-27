package com.app.dao;

import java.util.List;

import com.app.pojos.DarshanBooking;
import com.app.pojos.User;

public interface IBookingDao {
	
	public Integer bookSlot(DarshanBooking booking);
	
	public List<User> listUsers(DarshanBooking booking);
	//public List<DarshanBooking> bookedSlots();
	

	//to display list of slots booked to the user
	public List<DarshanBooking> userBookedList(int uid);
}
