package com.ayushs.hackathon_management.service;

import com.ayushs.hackathon_management.model.Hackathon;
import com.ayushs.hackathon_management.repository.HackathonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HackathonService {

    @Autowired
    private HackathonRepository repository;

    public Hackathon create(Hackathon hackathon) {
        return repository.save(hackathon);
    }

    public List<Hackathon> getAll() {
        return repository.findAll();
    }

    public Hackathon update(Long id, Hackathon newHackathon) {
        Hackathon h = repository.findById(id).orElse(null);

        if (h != null) {
            h.setTitle(newHackathon.getTitle());
            h.setTheme(newHackathon.getTheme());
            h.setDescription(newHackathon.getDescription());
            h.setDate(newHackathon.getDate());
            h.setDeadline(newHackathon.getDeadline());
            return repository.save(h);
        }

        return null;
    }

    // ✅ FIXED DELETE
    public void delete(Long id) {
        if (!repository.existsById(id)) {
            throw new RuntimeException("Hackathon not found");
        }
        repository.deleteById(id);
    }

    public List<Hackathon> getAllHackathons() {
        return repository.findAll();
    }

    public Hackathon getHackathonById(Long id) {
        return repository.findById(id).orElse(null);
    }
}