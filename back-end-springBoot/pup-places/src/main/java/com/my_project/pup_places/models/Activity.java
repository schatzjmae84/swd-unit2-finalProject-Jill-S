package com.my_project.pup_places.models;

import jakarta.persistence.*;

import java.util.Objects;

@Entity
public class Activity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name="outdoor")
    private String outdoor;

    @Column(name="social_setting")
    private String socialSetting;

    @Column(name="pup_event")
    private String pupEvent;

    public Activity(String outdoor, String socialSetting, String pupEvent) {
        this.outdoor = outdoor;
        this.socialSetting = socialSetting;
        this.pupEvent = pupEvent;
    }

    public Activity() {};

    public int getId() {
        return id;
    }

    public String getOutdoor() {
        return outdoor;
    }

    public void setOutdoor(String outdoor) {
        this.outdoor = outdoor;
    }

    public String getSocialSetting() {
        return socialSetting;
    }

    public void setSocialSetting(String socialSetting) {
        this.socialSetting = socialSetting;
    }

    public String getPupEvent() {
        return pupEvent;
    }

    public void setPupEvent(String pupEvent) {
        this.pupEvent = pupEvent;
    }

    @Override
    public String toString() {
        return outdoor + " " + socialSetting + " " + pupEvent;
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
