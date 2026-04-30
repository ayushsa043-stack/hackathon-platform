package com.ayushs.hackathon_management.controller;

import com.ayushs.hackathon_management.model.User;
import com.ayushs.hackathon_management.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "*")
public class AuthController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public String register(@RequestBody User user) {
        return userService.register(user);
    }

    @PostMapping("/login")
    public Object login(@RequestBody User user) {
        try {
            return userService.login(user.getEmail(), user.getPassword());
        } catch (Exception e) {
            return "Invalid email or password";
        }
    }
}
