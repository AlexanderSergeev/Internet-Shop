using System.Collections.Generic;
using Shop.Models;

namespace Shop.DataAccess
{
    public interface IShopDbRepository
    {
        IEnumerable<Car> GetCars();

        void AddCar(Car m);
    }
}
