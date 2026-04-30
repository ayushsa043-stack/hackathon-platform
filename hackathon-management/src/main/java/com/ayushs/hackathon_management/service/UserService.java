package com.ayushs.hackathon_management.service;

import com.ayushs.hackathon_management.model.User;
import com.ayushs.hackathon_management.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public String register(User user) {

        //check if mail already exists
        if (userRepository.findByEmail(user.getEmail()).isPresent()) {
            return "Email already exists!";
        }

        userRepository.save(user);
        return "User registered successfully!";
    }


    public User login(String email, String password) {
        User user = userRepository.findByEmail(email).orElseThrow(() -> new RuntimeException("User not found"));;

        if (!user.getPassword().equals(password)) {
            throw new RuntimeException("Invalid password");
        }

        return user;
    }
}
