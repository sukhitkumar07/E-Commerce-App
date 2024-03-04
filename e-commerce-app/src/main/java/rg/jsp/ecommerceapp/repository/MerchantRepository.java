package rg.jsp.ecommerceapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import rg.jsp.ecommerceapp.model.Merchant;

public interface MerchantRepository extends JpaRepository<Merchant, Integer>{

}
