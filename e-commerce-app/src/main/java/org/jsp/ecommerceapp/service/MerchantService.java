package org.jsp.ecommerceapp.service;

import java.util.Optional;

import org.jsp.ecommerceapp.dao.MerchantDao;
import org.jsp.ecommerceapp.dto.ResponseStructure;
import org.jsp.ecommerceapp.excepton.IdNotFoundException;
import org.jsp.ecommerceapp.excepton.MerchantNotFoundException;
import org.jsp.ecommerceapp.model.Merchant;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class MerchantService {
	@Autowired
	private MerchantDao merchantDao;

	public ResponseEntity<ResponseStructure<Merchant>> saveMerchant(Merchant merchant) {
		ResponseStructure<Merchant> structure = new ResponseStructure<>();
		structure.setMessage("Merchant saved");
		structure.setBody(merchantDao.saveMerchant(merchant));
		structure.setStatusCode(HttpStatus.CREATED.value());
		return new ResponseEntity<>(structure, HttpStatus.CREATED);
	}
	
	public ResponseEntity<ResponseStructure<Merchant>> updateMerchant(Merchant merchant) {
		ResponseStructure<Merchant> structure = new ResponseStructure<>();
		Optional<Merchant> recMerchant=merchantDao.findById(merchant.getId());
		if(recMerchant.isPresent()) {
		structure.setMessage("Merchant saved");
		structure.setBody(merchantDao.saveMerchant(merchant));
		structure.setStatusCode(HttpStatus.CREATED.value());
		return new ResponseEntity<>(structure, HttpStatus.CREATED);
		}
		throw new IdNotFoundException();
	}
	
	public ResponseEntity<ResponseStructure<Merchant>> verifyMerchant(String email,String password) {
		ResponseStructure<Merchant> structure=new ResponseStructure<>();
		Optional<Merchant> recMerchant=merchantDao.verifyMerchant(email, password);
		if(recMerchant.isPresent()) {
			structure.setMessage("Merchant Found");
			structure.setBody(recMerchant.get());
			structure.setStatusCode(HttpStatus.FOUND.value());
			return new ResponseEntity<ResponseStructure<Merchant>>(structure, HttpStatus.FOUND);
		}
		throw new MerchantNotFoundException("Either Email or Password is invalid");
	}
	
	public ResponseEntity<ResponseStructure<Merchant>> verifyMerchant(long phone,String password) {
		ResponseStructure<Merchant> structure=new ResponseStructure<>();
		Optional<Merchant> recMerchant=merchantDao.verifyMerchant(phone, password);
		if(recMerchant.isPresent()) {
			structure.setMessage("Merchant Found");
			structure.setBody(recMerchant.get());
			structure.setStatusCode(HttpStatus.FOUND.value());
			return new ResponseEntity<ResponseStructure<Merchant>>(structure, HttpStatus.FOUND);
		}
		throw new MerchantNotFoundException("Either Email or Password is invalid");
	}
	
	public ResponseEntity<ResponseStructure<Merchant>> verifyMerchant(int id,String password) {
		ResponseStructure<Merchant> structure=new ResponseStructure<>();
		Optional<Merchant> recMerchant=merchantDao.verifyMerchant(id, password);
		if(recMerchant.isPresent()) {
			structure.setMessage("Merchant Found");
			structure.setBody(recMerchant.get());
			structure.setStatusCode(HttpStatus.FOUND.value());
			return new ResponseEntity<ResponseStructure<Merchant>>(structure, HttpStatus.FOUND);
		}
		throw new MerchantNotFoundException("Either Email or Password is invalid");
	}
	
	
	
}
