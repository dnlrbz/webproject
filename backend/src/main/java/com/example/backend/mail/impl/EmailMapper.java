package com.example.backend.mail.impl;

import com.example.backend.book.domain.Book;
import com.example.backend.book.repository.BookRepository;
import com.example.backend.mail.Email;
import com.example.backend.order.domain.Order;
import java.util.List;
import org.springframework.stereotype.Service;
import org.springframework.util.Assert;

@Service
public class EmailMapper {

    private final BookRepository bookRepository;

    public EmailMapper(BookRepository bookRepository)
    {
        this.bookRepository = bookRepository;
    }

    public Email mapOrderConfirmationEmail(Order order)
    {
        String subject = "Book store order confirmation";
        String text = mapOrderConfirmationText(order);
        return new Email(order.getEmail(), subject, text);
    }

    private String mapOrderConfirmationText(Order order)
    {
        List<Book> orderedBooks = bookRepository.findAllByIdIn(order.getItemIds());
        Assert.notEmpty(orderedBooks, "list of books must not be empty when sending an order");

        StringBuilder result = new StringBuilder("Thank you for the order, here is a summary:\n")
            .append("Total: ")
            .append(String.format("%.2f", order.getTotalPrice()))
            .append("€\n");
        orderedBooks.forEach(book -> result.append(book.getTitle()).append("\n"));

        return result.toString();
    }
}
