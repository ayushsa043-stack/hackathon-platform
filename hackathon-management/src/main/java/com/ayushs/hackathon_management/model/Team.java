package com.ayushs.hackathon_management.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
//@Table(name = "team")
public class Team {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String leader;

    @ElementCollection
    @CollectionTable(name = "team_members", joinColumns = @JoinColumn(name = "team_id"))
    @Column(name = "member_name")
    private List<String> members = new ArrayList<>();


    @ElementCollection
    @CollectionTable(name = "team_requests", joinColumns = @JoinColumn(name = "team_id"))
    @Column(name = "request_name")
    private List<String> pendingRequests = new ArrayList<>();



    // many team can belong to one hackathon
    @JsonBackReference
    @ManyToOne
    @JoinColumn(name = "hackathon_id") //foreign key
    private Hackathon hackathon;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLeader() {
        return leader;
    }

    public void setLeader(String leader) {
        this.leader = leader;
    }

    public Hackathon getHackathon() {
        return hackathon;
    }

    public void setHackathon(Hackathon hackathon) {
        this.hackathon = hackathon;
    }

    public List<String> getMembers() {
        return members;
    }

    public void setMembers(List<String> members) {
        this.members = members;
    }

    public List<String> getPendingRequests() {
        return pendingRequests;
    }

    public void setPendingRequests(List<String> pendingRequests) {
        this.pendingRequests = pendingRequests;
    }
}
