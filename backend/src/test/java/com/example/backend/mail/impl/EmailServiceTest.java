package com.example.backend.mail.impl;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;

import com.example.backend.mail.Email;
import com.example.backend.mail.EmailService;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.ArgumentCaptor;
import org.mockito.Mockito;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringRunner;

@SpringBootTest
@ActiveProfiles("integrationtest")
@RunWith(SpringRunner.class)
public class EmailServiceTest {

    private static final String RECIPIENT = "test-recipient@test.com";
    private static final String SUBJECT = "test email subject";
    private static final String TEXT = "test email text";

    private JavaMailSender javaMailSender;
    private EmailService emailService;


    @Before
    public void setUpMocks()
    {
        javaMailSender = Mockito.mock(JavaMailSender.class);
        Mockito.doNothing().when(javaMailSender).send((SimpleMailMessage) any());
        emailService = Mockito.spy(new EmailServiceImpl(javaMailSender));
    }

    @Test
    public void sendEmail()
    {
        ArgumentCaptor<SimpleMailMessage> captor = ArgumentCaptor.forClass(SimpleMailMessage.class);
        emailService.sendMessage(createTestEmail());
        verify(javaMailSender, times(1)).send(captor.capture());
        checkEmailContent(captor.getValue());
    }

    @Test(expected = IllegalArgumentException.class)
    public void sendEmailNull()
    {
        emailService.sendMessage(null);
    }

    private void checkEmailContent(SimpleMailMessage email)
    {
        assertNotNull(email.getTo());
        assertEquals(RECIPIENT, email.getTo()[0]);
        assertEquals(SUBJECT, email.getSubject());
        assertEquals(TEXT, email.getText());
    }


    private Email createTestEmail()
    {
        return new Email(RECIPIENT, SUBJECT, TEXT);
    }
}
