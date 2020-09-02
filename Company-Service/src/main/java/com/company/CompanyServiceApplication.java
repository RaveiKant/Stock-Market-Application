package com.company;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.context.annotation.Bean;

import com.company.dto.CompanyCodeDTO;
import com.company.dto.NewCompanyRequest;
import com.company.service.CompanyService;

import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@SpringBootApplication
@EnableDiscoveryClient
@EnableSwagger2
public class CompanyServiceApplication implements CommandLineRunner{
	
	@Autowired
	CompanyService cS;
	

	public static void main(String[] args) {
		SpringApplication.run(CompanyServiceApplication.class, args);
	}
	 @Bean
	 public Docket docket() { 
	        return new Docket(DocumentationType.SWAGGER_2)  
	          .select()                                  
	          .apis(RequestHandlerSelectors.any())              
	          .paths(PathSelectors.any())                          
	          .build();                                           
	    }
	@Override
	public void run(String... args) throws Exception{
//		CompanyCodeDTO code = new CompanyCodeDTO("500112","BSE");
//		List<CompanyCodeDTO> codeList = new ArrayList<CompanyCodeDTO>();
//		codeList.add(code);
//		NewCompanyRequest newC = 
//				new NewCompanyRequest("SBI",(float)32323.2,"SBI CEO","SBI Directors","SBI brief",
//				codeList,"Finance");
//		cS.addNewCompany(newC);
		
			
	}
}
