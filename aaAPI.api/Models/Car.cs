using System.ComponentModel.DataAnnotations;
namespace aaAPI.api.Models
{
    public class Car
    {
        public int CarID { get; set; }
        public string Manufacturer { get; set; }
        public string Make { get; set; }
        public string Model { get; set; }
        public int Year { get; set; }
    }
}