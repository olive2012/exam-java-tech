package lt.sventes.holidays.service;

import lombok.Data;
import org.hibernate.validator.constraints.Length;
import org.springframework.data.annotation.ReadOnlyProperty;

import javax.validation.constraints.NotNull;

@Data
public class CountryServiceObject {

    @NotNull
    @Length(min = 1, max = 200)
    private String name;

    @NotNull
    @Length(min = 1, max = 3)
    private String code;

    @NotNull
    @Length(min = 1, max = 200)
    private String president;

    @NotNull
    @Length(min = 1, max = 200)
    private String flagImg;

}
