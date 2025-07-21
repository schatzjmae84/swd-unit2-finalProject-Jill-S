package com.my_project.pup_places.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Entity
public class Activity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name="activity_one")
    private String activityOne;

    @Column(name = "activity_two")
    private String activityTwo;

    @Column(name = "activity_three")
    private String activityThree;

    @OneToMany(mappedBy = "activity")  // Establishing a one-to-many relationship with Destination
    @JsonBackReference
    private final List<Destination> destinations = new ArrayList<>();  // List to hold destinations associated with this activity

    public Activity(String activityOne, String activityTwo, String activityThree) {
        this.activityOne = activityOne;
        this.activityTwo = activityTwo;
        this.activityThree = activityThree;
    }

    public Activity() {};

    public int getId() {
        return id;
    }

    public String getActivityOne() {
        return activityOne;
    }

    public void setActivityOne(String activityOne) {
        this.activityOne = activityOne;
    }

    public String getActivityTwo() {
        return activityTwo;
    }

    public void setActivityTwo(String activityTwo) {
        this.activityTwo = activityTwo;
    }

    public String getActivityThree() {
        return activityThree;
    }

    public void setActivityThree(String activityThree) {
        this.activityThree = activityThree;
    }

    public List<Destination> getDestinations() {
        return destinations;
    }

    @Override
    public String toString() {
        return activityOne + ", " + activityTwo + ", " + activityThree;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass())
            return false;
        Activity activity = (Activity) o;
        return id == activity.id;
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }
}
