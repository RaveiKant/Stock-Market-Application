package com.company.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.company.entity.IPO;

@Repository
public interface IPODAO extends JpaRepository<IPO,Integer>{


}
