package TestBHDStar.entity;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name="role")
public class RoleEntity extends  BaseEntity {
    @Column(name = "name")
    private String name;
    @Column(name = "code")
    private String code;

    @ManyToMany(mappedBy = "roles",
            fetch = FetchType.LAZY,
            cascade = {
                    CascadeType.DETACH,
                    CascadeType.MERGE,
                    CascadeType.REFRESH,
                    CascadeType.PERSIST
            })
    private List<AccountEntity> accounts;
    public RoleEntity(String name, String code) {
        this.name = name;
        this.code = code;
    }

    public RoleEntity() {
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    @Override
    public String toString() {
        return "RoleEntity{" +
                "name='" + name + '\'' +
                ", code='" + code + '\'' +
                '}';
    }
}
