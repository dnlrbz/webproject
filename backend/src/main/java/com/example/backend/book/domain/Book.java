package com.example.backend.book.domain;

import com.example.backend.base.domain.BaseEntity;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Lob;
import javax.persistence.Table;

@Entity
@Table(name = "book")
public class Book extends BaseEntity {

    @Column(length = 80)
    private String title;

    @Column(length = 40)
    private String author;

    @Column
    private String imageUrl;

    @Lob
    private String description;

    private int rating;
    private Double price;

    private Book()
    {
    }

    public Book(String title, String author, String imageUrl, String description, int rating,
        Double price)
    {
        this.title = title;
        this.author = author;
        this.imageUrl = imageUrl;
        this.description = description;
        this.rating = rating;
        this.price = price;
    }

    public String getTitle()
    {
        return title;
    }

    public String getAuthor()
    {
        return author;
    }

    public String getImageUrl()
    {
        return imageUrl;
    }

    public String getDescription()
    {
        return description;
    }

    public int getRating()
    {
        return rating;
    }

    public Double getPrice()
    {
        return price;
    }
}
