package com.example.springmongo.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Document(collection="bookstore")
public class Bookstore {
	
	
	@Id
private long id;
private String bookName;
private String authorName;


public long getId() {
	return id;
}

public void setId(long id) {
	this.id = id;
}
public String getBookName() {
	return bookName;
}
public void setBookName(String bookName) {
	this.bookName = bookName;
}
public String getAuthorName() {
	return authorName;
}
public void setAuthorName(String authorName) {
	this.authorName = authorName;
}
@Override
public String toString() {
	return "Book [id=" + id + ", bookName=" + bookName + ", authorName=" + authorName + "]";
}
public Bookstore(long id, String bookName, String authorName) {
	super();
	this.id = id;
	this.bookName = bookName;
	this.authorName = authorName;
}
public Bookstore() {
	super();
}

}