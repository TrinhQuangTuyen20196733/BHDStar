package TestBHDStar.entity;

import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name="user")
public class UserEntity extends BaseEntity{

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

   public UserEntity() {
   }

   public UserEntity( AccountEntity account, String lastName, String firstName, String phoneNumber, String address, Date birthDay) {

      this.account = account;
      this.lastName = lastName;
      this.firstName = firstName;
      this.phoneNumber = phoneNumber;
      this.address = address;
      this.birthDay = birthDay;
   }

   public AccountEntity getAccount() {
      return account;
   }

   public void setAccount(AccountEntity account) {
      this.account = account;
   }

   public String getLastName() {
      return lastName;
   }

   public void setLastName(String lastName) {
      this.lastName = lastName;
   }

   public String getFirstName() {
      return firstName;
   }

   public void setFirstName(String firstName) {
      this.firstName = firstName;
   }

   public String getPhoneNumber() {
      return phoneNumber;
   }

   public void setPhoneNumber(String phoneNumber) {
      this.phoneNumber = phoneNumber;
   }


   public String getAddress() {
      return address;
   }

   public void setAddress(String address) {
      this.address = address;
   }

   public Date getBirthDay() {
      return birthDay;
   }

   public void setBirthDay(Date birthDay) {
      this.birthDay = birthDay;
   }

   @Override
   public String toString() {
      return "UserEntity{" +
              ", account=" + account +
              ", lastName='" + lastName + '\'' +
              ", firstName='" + firstName + '\'' +
              ", phoneNumber='" + phoneNumber + '\'' +
              ", address='" + address + '\'' +
              ", birthDay=" + birthDay +
              '}';
   }
}
