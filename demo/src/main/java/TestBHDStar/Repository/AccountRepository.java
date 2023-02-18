package TestBHDStar.Repository;

import TestBHDStar.entity.AccountEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AccountRepository extends JpaRepository<AccountEntity,Integer> {
    AccountEntity findByEmailAndPassword(String email,String password);
    AccountEntity findByEmail(String email);
}
