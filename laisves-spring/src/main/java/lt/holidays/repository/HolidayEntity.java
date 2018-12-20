package lt.sventes.holidays.repository;

import lt.sventes.holidays.enums.HolidayTypeEnum;
import lombok.Data;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Data
@Entity
public class HolidayEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    @Column(nullable = false, unique = true)
    private String name;

    private String description;

    private String img;

    @Column(nullable = false)
    private HolidayTypeEnum type;

    @Column(nullable = false)
    private boolean raiseFlag;

    @ManyToMany(fetch = FetchType.LAZY,
            cascade = {
                    CascadeType.PERSIST,
                    CascadeType.MERGE
            })
    @JoinTable(name = "holiday_country",
            joinColumns = { @JoinColumn(name = "holiday_id") },
            inverseJoinColumns = { @JoinColumn(name = "country_id") })
    private Set<CountryEntity> countries = new HashSet<CountryEntity>();
}
