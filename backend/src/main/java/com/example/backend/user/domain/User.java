package com.example.backend.user.domain;

import com.example.backend.base.domain.BaseEntity;
import javax.persistence.Column;
import javax.persistence.Entity;

@Entity
public class User extends BaseEntity {

    @Column(name = "email")
    private String email;

    @Column(name = "password")
    private String password;

    @Column(name = "name")
    private String name;

    private User()
    {
    }

    public User(String email, String password, String name)
    {
        this.email = email;
        this.password = password;
        this.name = name;
    }

    public String getEmail()
    {
        return email;
    }

    public String getPassword()
    {
        return password;
    }

    public String getName()
    {
        return name;
    }
}
