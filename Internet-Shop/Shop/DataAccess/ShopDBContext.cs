using Shop.Models;
using System.Data.Entity;

namespace Shop.DataAccess
{
    public class ShopDbContext : DbContext
    {
        public ShopDbContext(string connectionString)
            : base(connectionString)
        {
        }

        public DbSet<Car> Cars { get; set; }
    }
}