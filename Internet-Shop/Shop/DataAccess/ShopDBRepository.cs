using Shop.Models;
using System.Configuration;
using System.Data.Entity;

namespace Shop.DataAccess
{
    public class ShopDbRepository : IShopDbRepository
    {
        private readonly ShopDbContext context;

        public ShopDbRepository()
        {
            context = new ShopDbContext(ConfigurationManager.ConnectionStrings["PrimaryConnectionString"].ConnectionString);
        }

        public DbSet<Car> GetCars()
        {
            return context.Cars;
        }

        public void AddCar(Car m)
        {
            context.Cars.Add(m);
            context.SaveChanges();
        }
    }
}