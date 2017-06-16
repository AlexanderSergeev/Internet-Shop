using System.Collections.Generic;
using Shop.Models;
using System.Data.Entity;

namespace Shop.DataAccess
{
    public interface IShopDbRepository
    {
        IEnumerable<Car> GetCars();

        void AddCar(Car m);
    }
}
