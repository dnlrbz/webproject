package com.example.backend.order.web;

import com.example.backend.mail.Email;
import com.example.backend.mail.EmailService;
import com.example.backend.mail.impl.EmailMapper;
import com.example.backend.order.domain.Order;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.Assert;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/web/order")
@CrossOrigin("*")
public class OrderWebController {

    @Autowired
    private EmailService emailService;
    @Autowired
    private EmailMapper emailMapper;

    @PostMapping("/send")
    public void sendOrder(@RequestBody Order order)
    {
        Assert.notNull(order, "order must not be null when sending an email");
        Assert.notNull(order.getEmail(), "recipients email must not be null when sending an email");
        Email orderConfirmation = emailMapper.mapOrderConfirmationEmail(order);
        emailService.sendMessage(orderConfirmation);
    }
}
