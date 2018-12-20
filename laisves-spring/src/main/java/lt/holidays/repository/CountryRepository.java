package lt.sventes.holidays.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CountryRepository extends JpaRepository<CountryEntity,Long> {
    public CountryEntity findByCode(String code);
    public boolean existsByCode(String code);
}
