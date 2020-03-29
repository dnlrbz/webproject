package com.example.backend.order.web;

import com.example.backend.order.domain.Order;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/web/order")
public class OrderWebController {

    @PostMapping("/send")
    public void sendRequest(@RequestBody Order order)
    {
        System.out.println(order);
    }
}
