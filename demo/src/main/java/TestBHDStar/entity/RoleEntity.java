package TestBHDStar.entity;

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

}
