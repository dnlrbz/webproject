package com.example.backend.mail.impl;

import com.example.backend.mail.Email;
import com.example.backend.mail.EmailService;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Component;
import org.springframework.util.Assert;

@Component
public class EmailServiceImpl implements EmailService {

    private final JavaMailSender emailSender;

    public EmailServiceImpl(JavaMailSender emailSender)
    {
        this.emailSender = emailSender;
    }

    @Override
    public void sendMessage(Email email)
    {
        Assert.notNull(email, "email object must not be null when sending it");

        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(email.getRecipient());
        message.setSubject(email.getSubject());
        message.setText(email.getText());
        emailSender.send(message);
    }
}
