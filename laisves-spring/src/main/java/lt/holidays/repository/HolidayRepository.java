package lt.sventes.holidays.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HolidayRepository extends JpaRepository<HolidayEntity,Long> {
    public HolidayEntity findByName(String name);
}
