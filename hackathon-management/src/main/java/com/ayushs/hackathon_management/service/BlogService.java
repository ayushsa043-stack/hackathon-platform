package com.ayushs.hackathon_management.service;

import com.ayushs.hackathon_management.model.Blog;
import com.ayushs.hackathon_management.repository.BlogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BlogService {

    @Autowired
    private BlogRepository repo;

    public Blog create(Blog blog) {
        return repo.save(blog);
    }

    public List<Blog> getAll() {
        return repo.findAll();
    }

    public Blog update(Long id, Blog updated) {
        Blog blog = repo.findById(id).orElseThrow();

        blog.setTitle(updated.getTitle());
        blog.setContent(updated.getContent());

        return repo.save(blog);
    }
}