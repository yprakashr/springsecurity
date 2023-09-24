package com.example.springmongo.controller;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.springmongo.model.Bookstore;
import com.example.springmongo.service.BookService;



@RestController
@RequestMapping("/books")
public class BookController {
	
	
	
    Map<String, Object> map = new LinkedHashMap<String, Object>();

    List<Bookstore> books;
    Optional<Bookstore> book;
    
    
    
    @Autowired
    private BookService bookService;

    @GetMapping
    public ResponseEntity<?> getAllBooks() {
    	
    	try {
    		books=   bookService.getAllBooks(); 
            map.clear();
            map.put("status", 200);
            map.put("data", books);
            map.put("message", "Data found Successfully");
            return new ResponseEntity<>(map,HttpStatus.OK);
    	}catch(Exception e) {
    		 map.clear();
             map.put("status", 200);
             map.put("message", "Internal Server Error");
             return new ResponseEntity<>(map,HttpStatus.INTERNAL_SERVER_ERROR);}
    }
    

    @GetMapping("/{id}")
    public ResponseEntity<?> getBookById(@PathVariable long id) {
       book=  bookService.getBookById(id);
       if(!book.isEmpty()) {
    	   map.clear();
           map.put("status", 200);
           map.put("message", "Data found successfully");
           map.put("data", book);
           return new ResponseEntity<>(map,HttpStatus.OK);
       }else {
    	   map.clear();
           map.put("status", 404);
           map.put("message", "Data not found");
           return new ResponseEntity<>(map,HttpStatus.NOT_FOUND);
       }
       
    }

    @PostMapping
    public ResponseEntity<?> addBook(@RequestBody Bookstore book) {
    	
    	
    	
    	try {
    	bookService.addBook(book);
    	 map.clear();
         map.put("status", 200);
         map.put("message", "data saved successfully");
         return new  ResponseEntity<>(map,HttpStatus.OK);
    	}catch(Exception e) {
       	 map.clear();
         map.put("status", 500);
         map.put("message", "Internal Server Error");
         return new  ResponseEntity<>(map,HttpStatus.INTERNAL_SERVER_ERROR);
    	}
        
     
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateBook(@PathVariable long id, @RequestBody Bookstore book) {
    	 try {
    		 bookService.updateBook(id, book);
    	       map.clear();
    	         map.put("status", 200);
    	         map.put("message", "Data updated successfully");
    	         return new  ResponseEntity<>(map,HttpStatus.OK);   
    	 }catch(Exception e){
    		 map.clear();
	         map.put("status", 500);
	         map.put("message", "Internal server error");
	         
	    return new  ResponseEntity<>(map,HttpStatus.INTERNAL_SERVER_ERROR);    
    	 }
    	
       
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteBook(@PathVariable long id) {
    	 book=  bookService.getBookById(id);
    	 if(!book.isEmpty()) {
    	      
    	   	 try {
    	   		bookService.deleteBook(id);
    		       map.clear();
    		         map.put("status", 200);
    		         map.put("message", "Data deleted successfully");
    		         return new  ResponseEntity<>(map,HttpStatus.OK);   
    		 }catch(Exception e){
    			 map.clear();
    	         map.put("status", 500);
    	         map.put("message", "Internal server error");
    	         
    	    return new  ResponseEntity<>(map,HttpStatus.INTERNAL_SERVER_ERROR);    
    		 }
    	 }else {
			 map.clear();
	         map.put("status", 404);
	         map.put("message", "Data not found"); 
	         return new  ResponseEntity<>(map,HttpStatus.NOT_FOUND);    
		 }
  
	

    }
}

