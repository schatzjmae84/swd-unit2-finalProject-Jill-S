package com.my_project.pup_places.models;

import jakarta.persistence.*;

import java.util.Objects;

@Entity
public class Form {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name="pup_name")
    private String pupName;

    @Column(name="username")
    private String username;

    @Column(name="dog_breed")
    private String dogBreed;

    @Column(name="activity")
    private String activity;

    @Column(name="zip_code")
    private String zipCode;

    public Form(String pupName, String username, String dogBreed, String activity, String zipCode) {
        this.pupName = pupName;
        this.username = username;
        this.dogBreed = dogBreed;
        this.activity = activity;
        this.zipCode = zipCode;
    }

    public Form() {};

    public int getId() {
        return id;
    }

    public String getPupName() {
        return pupName;
    }

    public void setPupName(String pupName) {
        this.pupName = pupName;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getDogBreed() {
        return dogBreed;
    }

    public void setDogBreed(String dogBreed) {
        this.dogBreed = dogBreed;
    }

    public String getActivity() {
        return activity;
    }

    public void setActivity(String activity) {
        this.activity = activity;
    }

    public String getZipCode() {
        return zipCode;
    }

    public void setZipCode(String zipCode) {
        this.zipCode = zipCode;
    }

    @Override
    public String toString() {
        return pupName + " " + username + " " + dogBreed + " " + activity + " " + zipCode;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass())
            return false;
        Form form = (Form) o;
        return id == form.id;
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }
}
