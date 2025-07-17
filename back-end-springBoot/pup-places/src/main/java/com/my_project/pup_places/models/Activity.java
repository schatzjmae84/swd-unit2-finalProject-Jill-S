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

    @Column(name="activity_title")
    private String activityTitle;

    @OneToMany(mappedBy = "activity")  // Establishing a one-to-many relationship with Destination
    @JsonBackReference
    private final List<Destination> destinations = new ArrayList<>();  // List to hold destinations associated with this activity

    public Activity(String activityTitle) {
        this.activityTitle = activityTitle;
    }

    public Activity() {};

    public int getId() {
        return id;
    }

    public String getActivityTitle() {
        return activityTitle;
    }

    public void setActivityTitle(String activityTitle) {
        this.activityTitle = activityTitle;
    }

    public List<Destination> getDestinations() {
        return destinations;
    }

    @Override
    public String toString() {
        return activityTitle;
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
