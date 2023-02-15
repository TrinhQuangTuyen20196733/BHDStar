package TestBHDStar.Service.Impl;

import TestBHDStar.Repository.UserRepository;
import TestBHDStar.Service.UserService;
import TestBHDStar.entity.UserEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepository;
    @Override
    public UserEntity save(UserEntity userEntity) {
        return  userRepository.save(userEntity);
    }
}
