package org.social.testspring;

import org.social.testspring.entities.User;
import org.social.testspring.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class TestSpringApplication implements CommandLineRunner {

    public static void main(String[] args) {
        SpringApplication.run(TestSpringApplication.class, args);
    }

    @Autowired
    private UserRepository userRepository;
//
    @Override
    public void run(String... args) throws Exception {
//        User user = new User();
//        user.setName("Fuad");
//        user.setSurname("Valiyev");
//        user.setEmail("fuadvaliyev@gmail.com");
//        userRepository.save(user);
//
//        User user1 = new User();
//        user.setName("Firuz");
//        user.setSurname("Mehralizade");
//        user.setEmail("firuzmehralizade@gmail.com");
//        userRepository.save(user1);
    }
}
