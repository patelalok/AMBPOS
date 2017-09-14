package com.abm.pos.ABMPos.manager;

import com.abm.pos.ABMPos.dao.CustomerDao;
import com.abm.pos.ABMPos.dao.EmployeeDao;
import com.abm.pos.ABMPos.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

/**
 * Created by apatel2 on 5/17/17.
 */

@Component
public class CustomerManager {

    @Autowired
    private
    CustomerRepository customerRepository;


    public void addCustomer(CustomerDao customerDao) {

        customerRepository.save(customerDao);
    }

    public List<CustomerDao> getCustomer() {

        return customerRepository.findAll();
    }

    public void deleteCustomer(Long phonoNo) {
        customerRepository.delete(phonoNo);
    }


}
