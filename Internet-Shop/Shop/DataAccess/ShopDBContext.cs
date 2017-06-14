using Shop.Models;
using System.Data.Entity;

namespace Shop.DataAccess
{
    public class ShopDBContext : DbContext
    {
        public ShopDBContext(string connectionString)
        {
            Database.Connection.ConnectionString = connectionString;
        }

        public DbSet<Car> Cars { get; set; }
    }
}