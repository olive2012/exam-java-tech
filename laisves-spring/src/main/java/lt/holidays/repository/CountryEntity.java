package lt.sventes.holidays.repository;

import lombok.Data;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Data
@Entity
public class CountryEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    private String code; // ISO code : LT for Lithuania and so on

    @Column(nullable = false, unique = true)
    private String name;
    private String president;


    private String flagImg;

    @ManyToMany(fetch = FetchType.LAZY,
            cascade = {
                    CascadeType.PERSIST,
                    CascadeType.MERGE
            },
            mappedBy = "countries")
    private Set<HolidayEntity> holidays = new HashSet<HolidayEntity>();
}
