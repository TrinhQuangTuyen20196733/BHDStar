package TestBHDStar.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="user")
public class UserEntity extends BaseEntity  {

   @OneToOne(cascade = CascadeType.ALL)
   @JoinColumn(name="account_id")
   private AccountEntity account;
   @Column(name="last_name")
   private String lastName;
   @Column(name="first_name")
   private String firstName;
   @Column(name="phoneNumber")
   private String phoneNumber;
   @Column(name="address")
   private String address;
   @Column(name="birthday")
   private Date birthDay;


}
