using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using aaAPI.api.Data;
using aaAPI.api.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace aaAPI.api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CarsController : ControllerBase
    {
        private readonly DataContext _dbContext;
        public CarsController(DataContext dbContext)
        {
            _dbContext = dbContext;
        }
        // GET api/values
        [HttpGet]
        public async Task<IActionResult> GetCars()
        {
            var result = await _dbContext.Cars.ToListAsync();
            if (result == null)
            {
                return BadRequest();
            }
            else
            {
                return Ok(result);
            }
        }

        // GET api/Cars/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetCar(int id)
        {
            if (id < 1) { return BadRequest(); }
            Car result = await _dbContext.Cars.FirstOrDefaultAsync(c => c.CarID == id);
            if (result == null || result.CarID != id )  { return BadRequest(); }
            return Ok(result);
        }

        // POST api/cars
        [HttpPost]
        public async Task<IActionResult> CreateNewCar([FromBody] Car car)
        {
            Car result = new Car();
            if (car.CarID > 0) { return BadRequest(new Car()); }
            //Check for duplicates
            result = await _dbContext.Cars.Where(p => p.Manufacturer == car.Manufacturer && p.Make == car.Make && p.Model == car.Model && p.Year == car.Year).FirstOrDefaultAsync();
            if (result != null && result.CarID > 0) { return BadRequest(car); }
            // Create a new rocord
            try
            {
                result = new Car();
                result.Manufacturer = car.Manufacturer;
                result.Make = car.Make;
                result.Model = car.Model;
                result.Year = car.Year;
                _dbContext.Cars.Add(result);
                int dbSucess = await _dbContext.SaveChangesAsync();
                return Ok(result);
            }
            catch (System.Exception)
            {
                return BadRequest();
            }

        }

        // PUT api/cars/5
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateCar(int id, [FromBody] Car car)
        {
            Car result = new Car();
            if (id < 1 || id != car.CarID) { return BadRequest(); }

            result = await _dbContext.Cars.FindAsync(id);
            if (result == null || result.CarID == 0) { return BadRequest(); }
            try
            {
                result.Manufacturer = car.Manufacturer;
                result.Make = car.Make;
                result.Model = car.Model;
                result.Year = car.Year;
                int saveResult = await _dbContext.SaveChangesAsync();
                return Ok(result);
            }
            catch (System.Exception)
            {

                return BadRequest();
            }

        }

        // DELETE api/cars/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCar(int id)
        {
            if (id < 1)
            {
                return BadRequest("Invalid ID");
            }
            else
            {
                Car result = await _dbContext.Cars.FindAsync(id);
                if (result == null)
                {
                    return BadRequest("Invalid ID.");
                }
                else
                {
                    _dbContext.Cars.Remove(result);
                    int saveResult = await _dbContext.SaveChangesAsync();
                    return Ok(result);
                }
            }
        }
    }
}