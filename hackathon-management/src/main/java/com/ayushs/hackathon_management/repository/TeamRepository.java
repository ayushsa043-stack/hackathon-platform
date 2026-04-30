package com.ayushs.hackathon_management.repository;

import com.ayushs.hackathon_management.model.Team;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TeamRepository extends JpaRepository<Team, Long> {

    List<Team> findByHackathonId(Long hackathonId);
}
