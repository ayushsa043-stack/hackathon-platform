package com.ayushs.hackathon_management.repository;

import com.ayushs.hackathon_management.model.Hackathon;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HackathonRepository extends JpaRepository<Hackathon, Long> {
}
