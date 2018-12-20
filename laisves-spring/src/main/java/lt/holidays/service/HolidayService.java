package lt.sventes.holidays.service;

import lt.sventes.holidays.repository.HolidayEntity;
import lt.sventes.holidays.repository.HolidayRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class HolidayService {

//    private CountryRepository countryRepository;
//
//    @Autowired
//    public void setCountryRepository(CountryRepository countryRepository) {
//        this.countryRepository = countryRepository;
//    }

    private HolidayRepository repository;

    @Autowired
    public void setRepository(HolidayRepository repository) {
        this.repository = repository;
    }

    public List<HolidayServiceObject> getAll() {
        return repository
                .findAll()
                .stream()
                .map(bs -> EntityToSO((HolidayEntity) bs))
                .collect(Collectors.toList());
    }

    public void create(HolidayServiceObject so) {
        repository.save(EntityFromSO(so));
    }

    public void delete(String name) {
        HolidayEntity object = repository.findByName(name);
        if (object != null) {
            repository.delete(object);
        }
    }


    private static HolidayServiceObject EntityToSO(HolidayEntity from) {
        HolidayServiceObject to = new HolidayServiceObject();
        to.setName(from.getName());
        to.setDescription(from.getDescription());
        to.setImg(from.getImg());
        to.setType(from.getType());
        to.setRaiseFlag(from.isRaiseFlag());

        return to;
    }


    private static HolidayEntity EntityFromSO(HolidayServiceObject from) {
        HolidayEntity to = new HolidayEntity();
        to.setName(from.getName());
        to.setDescription(from.getDescription());
        to.setImg(from.getImg());
        to.setType(from.getType());
        to.setRaiseFlag(from.isRaiseFlag());
        return to;
    }

}
