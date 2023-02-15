package TestBHDStar.entity;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name="account")
public class AccountEntity extends BaseEntity {
    @Column(name = "email")
    private String email;
    @Column(name = "password")
    private String password;
    @ManyToMany(fetch = FetchType.LAZY,
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
    @OneToOne(cascade = CascadeType.ALL,mappedBy = "account")
    private UserEntity user;

    public AccountEntity(String email, String password) {
        this.email = email;
        this.password = password;
    }

    public AccountEntity() {
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public List<RoleEntity> getRoles() {
        return roles;
    }

    public void setRoles(List<RoleEntity> roles) {
        this.roles = roles;
    }

    @Override
    public String toString() {
        return "AccountEntity{" +
                "email='" + email + '\'' +
                ", password='" + password + '\'' +
                ", roles=" + roles +
                ", user=" + user +
                '}';
    }
}
