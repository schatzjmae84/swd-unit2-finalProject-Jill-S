package com.my_project.pup_places.models;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;

import java.math.BigDecimal;
import java.text.DecimalFormat;
import java.util.Objects;

@Entity
public class DestinationReview {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "name")
    private String name;

    @Column(name = "rating")
    private BigDecimal rating;

    @Column(name = "review", columnDefinition = "TEXT")
    @Lob
    private String review;

    @ManyToOne
    @JsonManagedReference
    private Destination destination;

    public DestinationReview(String name, BigDecimal rating, String review, Destination destination) {
        this.name = name;
        this.rating = rating;
        this.review = review;
        this.destination = destination;
    }

    public DestinationReview() {};

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public BigDecimal getRating() {
        return rating;
    }

    public void setRating(BigDecimal rating) {
        this.rating = rating;
    }

    public String getReview() {
        return review;
    }

    public void setReview(String review) {
        this.review = review;
    }

    public Destination getDestination() {
        return destination;
    }

    public void setDestination(Destination destination) {
        this.destination = destination;
    }

    @Override
    public String toString() {
        return "Name: " + name + "\n" +
               "Rating: " + rating + "\n" +
               "Review: " + review;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass())
            return false;
        DestinationReview destinationReview = (DestinationReview) o;
        return id == destinationReview.id;
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }
}
