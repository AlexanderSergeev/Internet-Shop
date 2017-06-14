using Shop.Models;
using System.Configuration;
using System.Data.Entity;

namespace Shop.DataAccess
{
    public class ShopDBRepository : IShopDBRepository
    {
        private ShopDBContext context;

        public ShopDBRepository()
        {
            context = new ShopDBContext(ConfigurationManager.ConnectionStrings["PrimaryConnectionString"].ConnectionString);
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