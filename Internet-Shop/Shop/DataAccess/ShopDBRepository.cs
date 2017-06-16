using System.Collections.Generic;
using Shop.Models;

namespace Shop.DataAccess
{
    public class ShopDbRepository : IShopDbRepository
    {
        private readonly ShopDbContext context;

        public ShopDbRepository(ShopDbContext contextInstance)
        {
            context = contextInstance;
        }

        public IEnumerable<Car> GetCars()
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