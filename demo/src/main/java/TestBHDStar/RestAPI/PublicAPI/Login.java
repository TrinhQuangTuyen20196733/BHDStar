package TestBHDStar.RestAPI.PublicAPI;

import TestBHDStar.DTO.AccountDetails;
import TestBHDStar.JWTPayload.LoginRequest;
import TestBHDStar.JWTPayload.LoginResponse;
import TestBHDStar.JWTPayload.RandomStuff;
import TestBHDStar.security.JWTService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
public class Login {
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private JWTService jwtService;
    @PostMapping("/login")
    public LoginResponse authenticateAccount(@Valid @RequestBody LoginRequest loginRequest) {

        // Xác thực từ username và password.
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        loginRequest.getEmail(),
                        loginRequest.getPassword()
                )
        );

        // Nếu không xảy ra exception tức là thông tin hợp lệ
        // Set thông tin authentication vào Security Context
        SecurityContextHolder.getContext().setAuthentication(authentication);

        // Trả về jwt cho người dùng.
        String jwt = jwtService.generateToken((AccountDetails) authentication.getPrincipal());
        return new LoginResponse(jwt);
    }
    // Api /api/random yêu cầu phải xác thực mới có thể request
    @GetMapping("/random")
    public RandomStuff randomStuff(){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        return new RandomStuff("JWT Hợp lệ mới có thể thấy được message này");
    }
}
