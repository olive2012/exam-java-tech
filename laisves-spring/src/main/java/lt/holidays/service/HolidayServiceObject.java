package lt.sventes.holidays.service;

import lt.sventes.holidays.enums.HolidayTypeEnum;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.validator.constraints.Length;

import javax.validation.constraints.NotNull;


public class HolidayServiceObject {
    public HolidayServiceObject()
    {

    }

    public HolidayServiceObject(String name, String description, String img, HolidayTypeEnum type, boolean raiseFlag){
        this.name = name;
        this.description = description;
        this.img = img;
        this.type = type;
        this.raiseFlag = raiseFlag;
    }
    @NotNull
    @Length(min = 1, max = 200)
    @Getter @Setter
    private String name;

    @NotNull
    @Length(min = 1, max = 200)
    @Getter @Setter
    private String description;

    @NotNull
    @Length(min = 1, max = 200)
    @Getter @Setter
    private String img;

    @NotNull
    @Getter @Setter
    private HolidayTypeEnum type;

    @NotNull
    @Getter @Setter
    private boolean raiseFlag;
}
