using System.Collections.Generic;
using Shop.Models;

namespace Shop.DataAccess
{
    public interface IShopDbRepository
    {
        IEnumerable<Car> GetCars();

        IEnumerable<Car> GetCart();

        IEnumerable<Car> GetWishList();

        Car GetCar(int id);

        void AddToCart(CartElement model);

        void AddToWishList(WishListElement model);

        void DeleteFromCart(int carId);

        void DeleteFromWishList(int carId);
    }
}
