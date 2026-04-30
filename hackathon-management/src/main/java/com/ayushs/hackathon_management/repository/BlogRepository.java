package com.ayushs.hackathon_management.repository;

import com.ayushs.hackathon_management.model.Blog;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BlogRepository extends JpaRepository<Blog, Long> {
}
