package lt.sventes.holidays.rest;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import lt.sventes.holidays.service.CountryService;
import lt.sventes.holidays.service.CountryServiceObject;
import lt.sventes.holidays.service.HolidayServiceObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Set;

@RestController
@Api(value = "country")
@RequestMapping("/api/country")
public class CountryController {
    private CountryService service;

    @Autowired
    public void setService(CountryService service) {
        this.service = service;
    }

    @RequestMapping(method = RequestMethod.GET)
    @ApiOperation(value = "List all coutnries", notes = "")
    public List<CountryServiceObject> getAll() {
        return service.getAll();
    }

    @RequestMapping(method = RequestMethod.POST)
    @ApiOperation(value = "Create a country", notes = "Creates a library")
    @ResponseStatus(HttpStatus.CREATED)
    public void create(@ApiParam(value = "New country data", required = true)
                       @Valid
                       @RequestBody CountryServiceObject data) {

        service.create(data);
    }

    @RequestMapping(path = "/{code}", method = RequestMethod.DELETE)
    @ApiOperation(value = "Delete country", notes = "")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable final String code) {
        service.delete(code);
    }


    @RequestMapping(path = "/{code}/holidays/{holidayName}", method = RequestMethod.POST)
    @ApiOperation(value = "Add holiday to country", notes = "")
    @ResponseStatus(HttpStatus.CREATED)
    public void addHoliday(@ApiParam(value = "Country code", required = true)
                        @PathVariable final String code,
                        @ApiParam(value = "Holiday name", required = true)
                        @PathVariable final String holidayName) throws  Exception{

          service.addHoliday(code, holidayName);

    }

    @RequestMapping(path = "/{code}/holidays",method = RequestMethod.GET)
    @ApiOperation(value = "Get list of all holidays in a country", notes = "")
    public Set<HolidayServiceObject> getHolidays(
            @ApiParam(value = "Coutnry code", required = true)
            @PathVariable final String code){
        return service.listHolidays(code);
    }
}