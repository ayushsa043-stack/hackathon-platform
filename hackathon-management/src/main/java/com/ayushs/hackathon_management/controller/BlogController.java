package com.ayushs.hackathon_management.controller;

import com.ayushs.hackathon_management.model.Blog;
import com.ayushs.hackathon_management.service.BlogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/blog")
@CrossOrigin(origins = "*")
public class BlogController {

    @Autowired
    private BlogService service;

    // ADMIN
    @PostMapping("/create")
    public Blog create(@RequestBody Blog blog, @RequestParam String role) {
        if (!role.equals("ADMIN")) {
            throw new RuntimeException("Only ADMIN can create blog");
        }
        return service.create(blog);
    }

    @PutMapping("/update/{id}")
    public Blog update(@PathVariable Long id,
                       @RequestBody Blog blog,
                       @RequestParam String role) {

        if (!role.equals("ADMIN")) {
            throw new RuntimeException("Only ADMIN can update blog");
        }

        return service.update(id, blog);
    }

    // PUBLIC
    @GetMapping
    public List<Blog> getAll() {
        return service.getAll();
    }
}