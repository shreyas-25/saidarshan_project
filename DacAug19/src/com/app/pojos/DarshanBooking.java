package com.app.pojos;

import java.util.Date;

import javax.annotation.Generated;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.Max;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonBackReference;


@Entity
@Table(name = "booking1")
public class DarshanBooking {

	private Integer darshanId;

	private Integer noOfPeople;
	
	private Integer availableBooking=50;
	
	@DateTimeFormat(pattern="yyyy-MM-dd")
	private Date date;
	private DarshanSlot slot;

	@JsonBackReference
	private User user;


	

	public DarshanBooking() {
		System.out.println("in darshan booking pojo");
	}


	

	public DarshanBooking(Integer darshanId, Integer noOfPeople, Integer availableBooking, Date date,
			DarshanSlot slot) {
		super();
		this.darshanId = darshanId;
		this.noOfPeople = noOfPeople;
		this.availableBooking = availableBooking;
		this.date = date;
		this.slot = slot;
	}




	@Id	
	@GeneratedValue(strategy = GenerationType.IDENTITY)	
	public Integer getDarshanId() {
		return darshanId;
	}


	public void setDarshanId(Integer darshanId) {
		this.darshanId = darshanId;
	}






	public Integer getNoOfPeople() {
		return noOfPeople;
	}



	public void setNoOfPeople(Integer noOfPeople) {
		this.noOfPeople = noOfPeople;
	}


	@Temporal(TemporalType.DATE)
	public Date getDate() {
		return date;
	}


	public void setDate(Date date) {
		this.date = date;
	}

	@Enumerated(EnumType.STRING)
	public DarshanSlot getSlot() {
		return slot;
	}


	public void setSlot(DarshanSlot slot) {
		this.slot = slot;
	}

	



	public Integer getAvailableBooking() {
		return availableBooking;
	}




	public void setAvailableBooking(Integer availableBooking) {
		this.availableBooking = availableBooking;
	}




	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "userId")
	public User getUser() {
		return user;
	}


	public void setUser(User user) {
		this.user = user;
	}


	@Override
	public String toString() {
		return "DarshanBooking [darshanId=" + darshanId + ", user=" + user + ", noOfPeople=" + noOfPeople + ", date=" + date
				+ ", slot=" + slot + "]";
	}


}


