package org.jsp.ecommerceapp.service;

import java.util.Optional;

import org.jsp.ecommerceapp.dao.AddressDao;
import org.jsp.ecommerceapp.dto.ResponseStructure;
import org.jsp.ecommerceapp.excepton.AddressNotFoundException;
import org.jsp.ecommerceapp.model.Address;
import org.jsp.ecommerceapp.model.Merchant;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;


@Service
public class AddressService {
	@Autowired
	private AddressDao addressDao;

	public ResponseEntity<ResponseStructure<Address>> saveAddress(Address address) {
		ResponseStructure<Address> structure = new ResponseStructure<>();
		structure.setMessage("Address Saved SuccessFully");
		structure.setBody(addressDao.saveAddress(address));
		structure.setStatusCode(HttpStatus.CREATED.value());
		return new ResponseEntity<ResponseStructure<Address>>(structure, HttpStatus.CREATED);
	}

	public ResponseEntity<ResponseStructure<Address>> updateAddress(Address address) {
		ResponseStructure<Address> structure = new ResponseStructure<>();
		Optional<Address> resAddress = addressDao.findById(address.getId());
		if(resAddress.isPresent()) {
			Address daoAddress=resAddress.get();
			daoAddress.setId(address.getId());
			daoAddress.setLandmark(address.getLandmark());
			daoAddress.setBuildingName(address.getBuildingName());
			daoAddress.setHouseNumber(address.getHouseNumber());
			daoAddress.setCity(address.getCity());
			daoAddress.setState(address.getState());
			daoAddress.setCountry(address.getCountry());
			daoAddress.setPincode(address.getPincode());
			structure.setMessage("Address Saved SuccessFully");
			structure.setBody(addressDao.saveAddress(daoAddress));
			structure.setStatusCode(HttpStatus.ACCEPTED.value());
			return new ResponseEntity<ResponseStructure<Address>>(structure, HttpStatus.ACCEPTED);

		}
		throw new AddressNotFoundException("Invalid Id");

	}
}
