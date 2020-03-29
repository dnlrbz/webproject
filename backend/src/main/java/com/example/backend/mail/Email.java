package com.example.backend.mail;

public class Email {

    private String recipient;
    private String subject;
    private String text;

    public Email(String recipient, String subject, String text)
    {
        this.recipient = recipient;
        this.subject = subject;
        this.text = text;
    }

    public String getRecipient()
    {
        return recipient;
    }

    public String getSubject()
    {
        return subject;
    }

    public String getText()
    {
        return text;
    }
}
