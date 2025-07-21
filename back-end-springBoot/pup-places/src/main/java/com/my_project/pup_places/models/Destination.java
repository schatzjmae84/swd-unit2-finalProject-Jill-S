package com.my_project.pup_places.models;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import javafx.scene.text.Text;

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

    @Column(name = "activity")
    private String activity;

    @OneToOne(cascade = CascadeType.ALL) // Establishing a one-to-one relationship with Address
    @JoinColumn(name="address_id", referencedColumnName = "id") // Linking to Address table
    private Address address;  // Address associated with this destination

    @Column(name="description")
    private String description;

    @Column(name="website")
    private String website;

    @Lob
    @Column(name = "destination_review")
    private String destinationReview;

    public Destination(String name, int rating, String activity, Address address, String description, String website, String destinationReview) {
        this.name = name;
        this.rating = rating;
        this.activity = activity;
        this.address = address;
        this.description = description;
        this.website = website;
        this.destinationReview = destinationReview;
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

    public String getActivity() {
        return activity;
    }

    public void setActivity(String activity) {
        this.activity = activity;
    }

    public Address getAddress() {
        return address;
    }

    public void setAddress(Address address) {
        this.address = address;
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

    public String getDestinationReview() {
        return destinationReview;
    }

    public void setDestinationReview(String destinationReview) {
        this.destinationReview = destinationReview;
    }

    @Override
    public String toString() {
        return "Name:" + name + "\n" +
                "Rating:" + rating + "\n" +
                "Activity:" + activity + "\n" +
                "Address:" + address + "\n" +
                "Description:" + description + "\n" +
                "Website:" + website + "\n" +
                "Destination Review:" + destinationReview;
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
