package com.my_project.pup_places.models;

import jakarta.persistence.*;

import java.util.Objects;

@Entity
public class Destination {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name="name")
    private String name;

    @Column(name="rating")
    private int rating;

    @Column(name="description")
    private String description;

    @Column(name="website")
    private String website;

    public Destination(String name, int rating, String description, String website) {
        this.name = name;
        this.rating = rating;
        this.description = description;
        this.website = website;
    }

    public Destination() {};

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getWebsite() {
        return website;
    }

    public void setWebsite(String website) {
        this.website = website;
    }

    @Override
    public String toString() {
        return "Name:" + name + "\n" +
                "Rating:" + rating + "\n" +
                "Description:" + description + "\n" +
                "Website:" + website;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Destination)) return false;
        Destination destination = (Destination) o;
        return id == destination.id;
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }
}
