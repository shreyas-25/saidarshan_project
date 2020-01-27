package com.app.pojos;


import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.Transient;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity 
@Table (name="user1")
public class User {

	
	private Integer userId;

	@Transient
	private Integer otp;

	private String firstName,middleName,lastName,email,password;
	private String mobileNo;
	private String state;
	
	@DateTimeFormat(pattern="yyyy-MM-dd")
	private Date dob;
	private UserRole role;
	private Gender gender;
	
	private boolean status;
	
//	@JsonBackReference
	//private DarshanBooking booking;
	private List<DarshanBooking> darshanBooking = new ArrayList<>();

	public User() {
		System.out.println("IN USER POJO Ctor");

	}



	public User(Integer userId, String firstName, String middleName, String lastName, String email, String password,
			String mobileNo, String state, Date dob, UserRole role, Gender gender, boolean status) {
		super();
		this.userId = userId;
		this.firstName = firstName;
		this.middleName = middleName;
		this.lastName = lastName;
		this.email = email;
		this.password = password;
		this.mobileNo = mobileNo;
		this.state = state;
		this.dob = dob;
		this.role = role;
		this.gender = gender;
		this.status = status;
		
	}



	public User(Integer otp, String password) {
		super();
		this.otp = otp;
		this.password = password;
	}
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public Integer getUserId() {
		return userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}

	public Integer getOtp() {
		return otp;
	}

	public void setOtp(Integer otp) {
		this.otp = otp;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getMiddleName() {
		return middleName;
	}

	public void setMiddleName(String middleName) {
		this.middleName = middleName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getMobileNo() {
		return mobileNo;
	}

	public void setMobileNo(String mobileNo) {
		this.mobileNo = mobileNo;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	@Temporal(TemporalType.DATE)
	public Date getDob() {
		return dob;
	}

	public void setDob(Date dob) {
		this.dob = dob;
	}

	@Enumerated(EnumType.STRING)
	public UserRole getRole() {
		return role;
	}

	public void setRole(UserRole role) {
		this.role = role;
	}

	@Enumerated(EnumType.STRING)
	public Gender getGender() {
		return gender;
	}

	public void setGender(Gender gender) {
		this.gender = gender;
	}

	
	
	
	
	
	@OneToMany(mappedBy = "user",fetch = FetchType.EAGER,cascade = CascadeType.ALL,orphanRemoval = true)
	public List<DarshanBooking> getDarshanBooking() {
		return darshanBooking;
	}



	public void setDarshanBooking(List<DarshanBooking> darshanBooking) {
		this.darshanBooking = darshanBooking;
	}



	//	@Transient
//	@JsonBackReference
//	@OneToOne(mappedBy = "user",fetch = FetchType.EAGER,cascade = CascadeType.ALL,orphanRemoval = true)
//	public DarshanBooking getBooking() {
//		return booking;
//	}
//
//	public void setBooking(DarshanBooking booking) {
//		this.booking = booking;
//	}

	
	

	public boolean isStatus() {
		return status;
	}

	public void setStatus(boolean status) {
		this.status = status;
	}

	
	/*
	 * public void addDarshan(DarshanBooking b) { add(b); }
	 */
	
	
	@Override
	public String toString() {
		return "User [userId=" + userId + ", otp=" + otp + ", firstName=" + firstName + ", middleName=" + middleName
				+ ", lastName=" + lastName + ", email=" + email + ", mobileNo=" + mobileNo + ", state=" + state + ", dob="
				+ dob + ", role=" + role + ", gender=" + gender + "]";
	}


}
