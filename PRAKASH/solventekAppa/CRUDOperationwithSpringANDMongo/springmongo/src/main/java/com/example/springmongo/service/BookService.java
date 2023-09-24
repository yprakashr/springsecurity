package com.example.springmongo.service;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.springmongo.model.Bookstore;
import com.example.springmongo.repo.BookRepository;
import com.example.springmongo.service.BookService;

@Service
public class BookService {
    @Autowired
    private BookRepository bookRepository;

    public List<Bookstore> getAllBooks() {
        return bookRepository.findAll();
    }

    public Optional<Bookstore> getBookById(long id) {
        return bookRepository.findById(id);
    }

    public void addBook(Bookstore book) {
        bookRepository.save(book);
    }

    public void updateBook(long id, Bookstore book) {
        book.setId(id);
        bookRepository.save(book);
    }

    public void deleteBook(long id) {
        bookRepository.deleteById(id);
    }
}
