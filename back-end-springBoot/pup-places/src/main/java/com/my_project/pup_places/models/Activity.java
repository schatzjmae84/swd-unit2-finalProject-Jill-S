package com.my_project.pup_places.models;

import jakarta.persistence.*;

import java.util.Objects;

@Entity    //Represents lists of activities that a user can select for them and their pup to do together
public class Activity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "name")
    private String name;

    @Column(name="activity_one")
    private String activityOne;

    @Column(name = "activity_two")
    private String activityTwo;

    @Column(name = "activity_three")
    private String activityThree;

    public Activity(String name, String activityOne, String activityTwo, String activityThree) {
        this.name = name;
        this.activityOne = activityOne;
        this.activityTwo = activityTwo;
        this.activityThree = activityThree;
    }

    public Activity() {};

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
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

    @Override
    public String toString() {
        return name + ":" + activityOne + ", " + activityTwo + ", " + activityThree;
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
