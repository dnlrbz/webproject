package com.example.backend.order.web;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import com.example.backend.order.domain.Order;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.util.Collections;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

@RunWith(MockitoJUnitRunner.class)
public class OrderWebControllerTest {

    private static final String EMAIL = "test email";
    private static final Double PRICE = 65.99;

    private MockMvc mockMvc;

    @Before
    public void setUpMocks()
    {
        final OrderWebController orderWebController = new OrderWebController();
        mockMvc = MockMvcBuilders.standaloneSetup(orderWebController).build();
    }

    @Test
    public void sendOrderOk() throws Exception
    {
        String requestBody = createOrderJsonString(EMAIL);
        mockMvc.perform(post("/api/web/order/send")
            .contentType(MediaType.APPLICATION_JSON)
            .content(requestBody))
            .andExpect(status().isOk());
    }

    @Test(expected = IllegalArgumentException.class)
    public void sendOrderWithNullEmailThrows() throws Exception
    {
        String requestBody = createOrderJsonString(null);
        mockMvc.perform(post("/api/web/order/send")
            .contentType(MediaType.APPLICATION_JSON)
            .content(requestBody))
            .andExpect(status().is4xxClientError());
    }


    private String createOrderJsonString(String email) throws JsonProcessingException
    {
        Order order = new Order(Collections.emptyList(), email, PRICE);
        final ObjectMapper mapper = new ObjectMapper();
        return mapper.writeValueAsString(order);
    }
}
