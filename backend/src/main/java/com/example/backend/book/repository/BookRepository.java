package com.example.backend.book.repository;

import com.example.backend.book.domain.Book;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepository extends JpaRepository<Book, Long> {

    List<Book> findAllByIdIn(List<Long> idList);
}
