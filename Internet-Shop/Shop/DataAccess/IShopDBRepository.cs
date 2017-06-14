using Shop.Models;
using System.Data.Entity;

namespace Shop.DataAccess
{
    interface IShopDBRepository
    {
        DbSet<Car> GetCars();

        void AddCar(Car m);
    }
}
