using System.Collections.Generic;
using Shop.Models;

namespace Shop.DataAccess
{
    public interface IShopDbRepository
    {
        IEnumerable<Car> GetCars();

        IEnumerable<Car> GetCart();

        IEnumerable<Car> GetWishList();

        Car GetCar(string name);

        void AddToCart(CartElem model);

        void AddToWishList(WishListElem model);

        void DeleteFromCart(int index);
    }
}
