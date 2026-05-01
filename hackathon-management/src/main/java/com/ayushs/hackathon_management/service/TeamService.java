package com.ayushs.hackathon_management.service;

import com.ayushs.hackathon_management.model.Hackathon;
import com.ayushs.hackathon_management.model.Team;
import com.ayushs.hackathon_management.repository.HackathonRepository;
import com.ayushs.hackathon_management.repository.TeamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TeamService {

    @Autowired
    private TeamRepository repository;

    @Autowired
    private HackathonRepository hackathonRepository;

    public Team saveTeam(Team team) {

        Long hackathonId = team.getHackathon().getId();

        Hackathon hackathon = hackathonRepository.findById(hackathonId)
                .orElseThrow(() -> new RuntimeException("Hackathon not found"));

        team.setHackathon(hackathon);

        if (!team.getMembers().contains(team.getLeader())) {
            team.getMembers().add(team.getLeader());
        }

        return repository.save(team);
    }

    public List<Team> getAllTeams() {
        return repository.findAll();
    }

    public List<Team> getTeamsByHackathon(Long hackathonId) {
        return repository.findByHackathonId(hackathonId);
    }

    public Team requestToJoin(Long teamId, String userName) {
        Team team = repository.findById(teamId).orElseThrow();

        if (team.getMembers().contains(userName)) {
            throw new RuntimeException("Already a member");
        }

        if (!team.getPendingRequests().contains(userName)) {
            team.getPendingRequests().add(userName);
        }

        return repository.save(team);
    }

    public Team acceptRequest(Long teamId, String userName) {
        Team team = repository.findById(teamId).orElseThrow();

        if (team.getMembers().size() >= 4) {
            throw new RuntimeException("Team is full");
        }

        team.getPendingRequests().remove(userName);

        if (!team.getMembers().contains(userName)) {
            team.getMembers().add(userName);
        }

        return repository.save(team);
    }

    public Team rejectRequest(Long teamId, String userName) {
        Team team = repository.findById(teamId).orElseThrow();

        team.getPendingRequests().remove(userName);

        return repository.save(team);
    }

    public void deleteTeam(Long id) {
        if (!repository.existsById(id)) {
            throw new RuntimeException("Team not found");
        }
        repository.deleteById(id);
    }
}
