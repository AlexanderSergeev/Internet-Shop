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

        public Car GetCar(string name)
        {
            foreach (Car c in context.Cars)
            {
                if (c.Name == name)
                    return c;
            }
            return null;
        }
    }
}