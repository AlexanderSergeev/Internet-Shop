using System.Collections;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
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

        public IEnumerable<Car> GetCart()
        {

            IEnumerable<Car> res = context.Database.SqlQuery<Car>("getCart");
            return res;
        }

        public IEnumerable<Car> GetWishList()
        {
            IEnumerable<Car> res = context.Database.SqlQuery<Car>("getWishList");
            return res;
        }

        public Car GetCar(int id)
        {
            foreach (Car c in context.Cars)
            {
                if (c.Id == id)
                    return c;
            }
            return null;
        }

        public void AddToCart(CartElement model)
        {
            context.Cart.Add(model);
            context.SaveChanges();
        }

        public void AddToWishList(WishListElement model)
        {
            context.WishList.Add(model);
            context.SaveChanges();
        }

        public void DeleteFromCart(int carId)
        {
            foreach (CartElement elem in context.Cart)
            {
                if (elem.CarId == carId)
                {
                    context.Cart.Remove(elem);
                    break;
                }
            }
            context.SaveChanges();
        }

        public void DeleteFromWishList(int carId)
        {
            foreach (WishListElement elem in context.WishList)
            {
                if (elem.CarId == carId)
                {
                    context.WishList.Remove(elem);
                    break;
                }
            }
            context.SaveChanges();
        }
    }
}