package lt.sventes.holidays.rest;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import lt.sventes.holidays.service.HolidayService;
import lt.sventes.holidays.service.HolidayServiceObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@Api(value = "holiday")
@RequestMapping("/api/holiday")
public class HolidayController {
    private HolidayService service;

    @Autowired
    public void setService(HolidayService service) {
        this.service = service;
    }

    @RequestMapping(method = RequestMethod.GET)
    @ApiOperation(value = "List all holidays", notes = "")
    public List<HolidayServiceObject> getAll() {
        return service.getAll();
    }

    @RequestMapping(method = RequestMethod.POST)
    @ApiOperation(value = "Create a holiday", notes = "")
    @ResponseStatus(HttpStatus.CREATED)
    public void create(@ApiParam(value = "New holiday data", required = true)
                       @Valid
                       @RequestBody HolidayServiceObject data) {

        service.create(data);
    }

    @RequestMapping(path = "/{name}", method = RequestMethod.DELETE)
    @ApiOperation(value = "Delete holiday", notes = "")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable final String  name) {
        service.delete(name);
    }

}
