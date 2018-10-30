using Microsoft.EntityFrameworkCore;
using aaAPI.api.Models;

namespace aaAPI.api.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }
        public DbSet<Car> Cars { get; set; }
    }
}