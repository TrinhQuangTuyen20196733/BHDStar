package TestBHDStar.DTO;

import TestBHDStar.entity.AccountEntity;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class LoginResponse {
    private AccountEntity account;
    private String accessToken;


    public LoginResponse(String accessToken) {
        this.accessToken = accessToken;
    }
}
