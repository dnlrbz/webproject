package com.example.backend.order.domain;

import java.util.Collections;
import java.util.List;

public class Order {

    private List<Long> itemIds;
    private String email;
    private Double totalPrice;

    public Order(List<Long> itemIds, String email, Double totalPrice)
    {
        this.itemIds = itemIds == null ? Collections.emptyList() : itemIds;
        this.email = email;
        this.totalPrice = totalPrice;
    }

    public List<Long> getItemIds()
    {
        return itemIds;
    }

    public String getEmail()
    {
        return email;
    }

    public Double getTotalPrice()
    {
        return totalPrice;
    }

    @Override
    public String toString()
    {
        return "Order{" +
            "itemIds=" + itemIds +
            ", email='" + email + '\'' +
            ", totalPrice=" + totalPrice +
            '}';
    }
}
