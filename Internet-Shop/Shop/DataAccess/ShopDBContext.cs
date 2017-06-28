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

        public DbSet<CartElement> Cart { get; set; }

        public DbSet<WishListElement> WishList { get; set; }

        public DbSet<PurchaseElement> Purchases { get; set; }
    }
}