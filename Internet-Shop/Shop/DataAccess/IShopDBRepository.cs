using Shop.Models;
using System.Data.Entity;

namespace Shop.DataAccess
{
    public interface IShopDbRepository
    {
        DbSet<Car> GetCars();

        void AddCar(Car m);
    }
}
