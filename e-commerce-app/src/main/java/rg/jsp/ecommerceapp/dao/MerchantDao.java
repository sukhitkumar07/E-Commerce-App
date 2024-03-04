package rg.jsp.ecommerceapp.dao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import rg.jsp.ecommerceapp.model.Merchant;
import rg.jsp.ecommerceapp.repository.MerchantRepository;

@Repository
public class MerchantDao {
	@Autowired
	private MerchantRepository merchantRepository;

	public Merchant saveMerchant(Merchant merchant) {
		return merchantRepository.save(merchant);
	}

}
