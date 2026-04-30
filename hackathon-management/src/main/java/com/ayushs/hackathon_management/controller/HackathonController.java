package com.ayushs.hackathon_management.controller;

import com.ayushs.hackathon_management.model.Hackathon;
import com.ayushs.hackathon_management.service.HackathonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/hackathon")
@CrossOrigin(origins = "*")
public class HackathonController {

    @Autowired
    private HackathonService service;

    @PostMapping("/create")
    public Hackathon create(@RequestBody Hackathon hackathon) {
        return service.create(hackathon);
    }

    @PutMapping("/update/{id}")
    public Hackathon update(@PathVariable Long id, @RequestBody Hackathon hackathon) {
        return service.update(id, hackathon);
    }

    // ✅ FIXED DELETE
    @DeleteMapping("/delete/{id}")
    public void delete(@PathVariable Long id) {
        service.delete(id);
    }

    @GetMapping("/all")
    public List<Hackathon> getAllHackathons() {
        return service.getAllHackathons();
    }

    @GetMapping("/{id}")
    public Hackathon getHackathonById(@PathVariable Long id) {
        return service.getHackathonById(id);
    }
}