package com.ayushs.hackathon_management.controller;

import com.ayushs.hackathon_management.model.Team;
import com.ayushs.hackathon_management.service.TeamService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/team")
public class TeamController {

    @Autowired
    private TeamService service;

    @PostMapping("/create")
    public Team createTeam(@RequestBody Team team) {
        return service.saveTeam(team);
    }

    @GetMapping
    public List<Team> getAllTeams() {
        return service.getAllTeams();
    }

    @GetMapping("/hackathon/{id}")
    public List<Team> getTeams(@PathVariable Long id) {
        return service.getTeamsByHackathon(id);
    }

    @PutMapping("/request/{teamId}")
    public Team requestToJoin(@PathVariable Long teamId, @RequestParam String userName) {
        return service.requestToJoin(teamId, userName);
    }

    @PutMapping("/accept/{teamId}")
    public Team acceptRequest(@PathVariable Long teamId, @RequestParam String userName) {
        return service.acceptRequest(teamId, userName);
    }

    @PutMapping("/reject/{teamId}")
    public Team rejectRequest(@PathVariable Long teamId, @RequestParam String userName) {
        return service.rejectRequest(teamId, userName);
    }

    // ADMIN - Delete Team
    @DeleteMapping("/delete/{id}")
    public void deleteTeam(@PathVariable Long id) {
        service.deleteTeam(id);
    }
}