package TestBHDStar.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.util.List;
@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="account")
public class AccountEntity extends BaseEntity {
    @Column(name = "email",unique = true)
    private String email;
    @Column(name = "password")
    private String password;
    @ManyToMany(fetch = FetchType.EAGER,
            cascade = {
                    CascadeType.DETACH,
                    CascadeType.MERGE,
                    CascadeType.REFRESH,
                    CascadeType.PERSIST
            })
    @JoinTable(
            name = "account_role",
            joinColumns = @JoinColumn(name = "account_id"),
            inverseJoinColumns  = @JoinColumn(name="role_id")

    )
    private List<RoleEntity> roles;
    @OneToOne(cascade = CascadeType.ALL,mappedBy = "account",fetch = FetchType.LAZY)
    private UserEntity user;

    public AccountEntity(String email, String password) {
        this.email = email;
        this.password = password;
    }





}
