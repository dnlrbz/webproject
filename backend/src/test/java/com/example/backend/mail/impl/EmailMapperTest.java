package com.example.backend.mail.impl;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.ArgumentMatchers.anyList;

import com.example.backend.book.domain.Book;
import com.example.backend.book.repository.BookRepository;
import com.example.backend.mail.Email;
import com.example.backend.order.domain.Order;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
public class EmailMapperTest {

    private static final int RATING = 4;
    private static final Double PRICE = 55.99;
    private static final String EMAIL = "test email";
    private static final String TITLE = "book title";
    private static final String AUTHOR = "book author";
    private static final String IMAGE_URL = "book image url";
    private static final String DESCRIPTION = "book description";

    private EmailMapper emailMapper;

    @Mock
    private BookRepository bookRepository;

    @Before
    public void setUp()
    {
        Mockito.when(bookRepository.findAllByIdIn(anyList())).thenReturn(createOrderedBookList());
        emailMapper = new EmailMapper(bookRepository);
    }

    @Test
    public void mapOrderConfirmationEmail()
    {
        Order order = new Order(Collections.emptyList(), EMAIL, PRICE);
        Email email = emailMapper.mapOrderConfirmationEmail(order);
        checkEmail(email);
    }

    private void checkEmail(Email email)
    {
        assertThat(email.getSubject()).isEqualTo("Book store order confirmation");
        assertThat(email.getRecipient()).isEqualTo(EMAIL);
        assertThat(email.getText()).isEqualTo("Thank you for the order, here is a summary:\nTotal: "
            + String.format("%.2f", PRICE) + "€\n" + TITLE + "\n");
    }

    private List<Book> createOrderedBookList()
    {
        List<Book> bookList = new ArrayList<>();
        bookList.add(new Book(TITLE, AUTHOR, IMAGE_URL, DESCRIPTION, RATING, PRICE));
        return bookList;
    }
}
