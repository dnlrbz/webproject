package com.example.backend.user.domain;

import com.example.backend.base.domain.BaseEntity;
import javax.persistence.Entity;

@Entity
public class User extends BaseEntity {

    private String email;
    private String password;
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
