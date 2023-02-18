package TestBHDStar.RestAPI.UserAPI;

import TestBHDStar.Service.UserService;
import TestBHDStar.entity.UserEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/admin")
public class UserController {
    @Autowired
    private UserService userService;
    @PostMapping("/users")
    public UserEntity createUser(@RequestBody UserEntity user){

         return  userService.save(user);
    }
}
