package lt.sventes.holidays.service;

import lt.sventes.holidays.repository.CountryEntity;
import lt.sventes.holidays.repository.CountryRepository;
import lt.sventes.holidays.repository.HolidayEntity;
import lt.sventes.holidays.repository.HolidayRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class CountryService {
    private HolidayRepository holidayRepository;

    @Autowired
    public void setHolidayRepository(HolidayRepository holidayRepository) {
        this.holidayRepository = holidayRepository;
    }

    private CountryRepository repository;

    @Autowired
    public void setRepository(CountryRepository repository) {
        this.repository = repository;
    }

    public List<CountryServiceObject> getAll() {
        return repository
                .findAll()
                .stream()
                .map(bs -> EntityToSO((CountryEntity) bs))
                .collect(Collectors.toList());
    }

    public void create(CountryServiceObject so) {
        if (!repository.existsByCode(so.getCode())) {
            repository.save(EntityFromSO(so));
        }
    }

    public void delete(String code) {
        CountryEntity object = repository.findByCode(code);
        if (object != null) {
            repository.delete(object);
        }
    }

    public void addHoliday(String code, String holidayName){
        HolidayEntity holiday = holidayRepository.findByName(holidayName);

        CountryEntity country = repository.findByCode(code);

        if (country != null && holiday != null) {
            System.out.println("Adding holiday " + holiday.getName() + " to " + country.getName());
            country.getHolidays().add(holiday);
            repository.save(country);
        }
    }

    public Set<HolidayServiceObject> listHolidays(String code) {
        CountryEntity country = repository.findByCode(code);

        if (country == null) {
            return null;
        }

        return country.getHolidays()
                .stream()
                .map(b -> new HolidayServiceObject(b.getName(),
                                b.getDescription(),
                                b.getImg(),
                                b.getType(),
                                b.isRaiseFlag()
                        )
                )
                .collect(Collectors.toSet());

    }


    private static CountryServiceObject EntityToSO(CountryEntity from) {
        CountryServiceObject to = new CountryServiceObject();
        to.setName(from.getName());
        to.setCode(from.getCode());
        to.setPresident(from.getPresident());
        to.setFlagImg(from.getFlagImg());
        return to;
    }


    private static CountryEntity EntityFromSO(CountryServiceObject from) {
        CountryEntity to = new CountryEntity();
        to.setName(from.getName());
        to.setCode(from.getCode());
        to.setPresident(from.getPresident());
        to.setFlagImg(from.getFlagImg());
        return to;
    }

}
