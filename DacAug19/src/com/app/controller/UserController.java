package com.app.controller;

import javax.persistence.NoResultException;
import javax.servlet.http.HttpSession;

import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.MailException;
import org.springframework.mail.MailSender;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import static org.springframework.http.HttpStatus.*;

import java.util.List;

import com.app.dao.IBookingDao;
import com.app.dao.IUserDao;
import com.app.pojos.DarshanBooking;
import com.app.pojos.User;
import com.app.service.UserService;

import sun.print.resources.serviceui;

@CrossOrigin(allowedHeaders = "*")
@RestController
@RequestMapping("/user")
public class UserController 
{
	int otp;
@Autowired
IUserDao iuserDao;

@Autowired
IBookingDao ibookingDao;

@Autowired
UserService service;

@Autowired
JavaMailSender mailSender;

User user;


public UserController() {
	System.out.println("In User Controller");
}

@PostMapping("/register")
public Integer register(@RequestBody User user)
{
	System.out.println(user);
	return iuserDao.registerUser(user);
}

@PostMapping("/login")
public User login(@RequestBody User user)
{
	System.out.println(user);
	return iuserDao.login(user);
}

@PostMapping("/profile")
public User profile(@RequestBody User user)
{
	System.out.println(user);
	return iuserDao.profile(user);
}

@PostMapping("/forgot/{em:.+}")
public ResponseEntity<?> processForgotPassword(@PathVariable String em,HttpSession hs)
{
	System.out.println("email "+em);
	user=service.findByEmail(em);
	System.out.println(user);
	try
	{
		user = service.findByEmail(em);
		System.out.println(user);
		if(user !=null)
		{
			
			otp =service.generateOtp();
			System.out.println(otp);
			String msg="Your one time password(OTP) is = "+otp;
			SimpleMailMessage mailMessage = new SimpleMailMessage();
			mailMessage.setTo(user.getEmail());
			mailMessage.setSubject("One Time Password");
			mailMessage.setText(msg);
			try
			{
				mailSender.send(mailMessage);
				
				return new ResponseEntity<String>("success",HttpStatus.OK);
			}
			catch (MailException e) 
			{
				System.out.println("inside mail exception");
				e.printStackTrace();
			}
		}
	} catch (NoResultException e) 
	{
		System.out.println("in other exception");
		e.printStackTrace();
	}
	return new ResponseEntity<String>("error",HttpStatus.INTERNAL_SERVER_ERROR);

}


@PostMapping("/setpass")
public ResponseEntity<?> setpassword(@RequestBody User u,HttpSession hs)
{
	System.out.println(u);
	System.out.println("mail "+user.getEmail()+" otp "+otp);
	if(otp==u.getOtp()) {
		iuserDao.setPass(u.getPassword(),user.getEmail());
		return new ResponseEntity<Integer>(1,OK);
	}
	else {
		return new ResponseEntity<Integer>(0,OK);
	}	
}

@PostMapping("/booking")
public Integer booking(@RequestBody(required = false) DarshanBooking booking)
{
	System.out.println("in booking controller"+ booking);
	return ibookingDao.bookSlot(booking);
}


@GetMapping("/bookinglist")
public ResponseEntity<?> userBookedList(@RequestParam int uid)
{
	System.out.println("in user booked slots list controller");
	
	List<DarshanBooking> list=ibookingDao.userBookedList(uid);
	if(list==null)
		return new ResponseEntity<String>("User Not found",HttpStatus.NOT_FOUND);
	return new ResponseEntity<List<DarshanBooking>>(list,HttpStatus.OK);
}
}
