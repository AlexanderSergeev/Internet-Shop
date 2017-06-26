using System.Collections.Generic;
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
            List<Car> res = new List<Car>();
            IList<CartElem> cart;
            IList<Car> cars;

            using (context)
            {

                cart = context.Cart.ToList();
                cars = context.Cars.ToList();
            }


            foreach (Car c in cars)
            {
                foreach (CartElem elem in cart)
                {
                    if (c.Id == elem.IdCar)
                    {
                        res.Add(c);
                        break;
                    }
                }
            }
            return res;
        }

        public IEnumerable<Car> GetWishList()
        {
            List<Car> res = new List<Car>();
            IList<WishListElem> wishList;
            IList<Car> cars;

            using (context)
            {

                wishList = context.WishList.ToList();
                cars = context.Cars.ToList();
            }


            foreach (Car c in cars)
            {
                foreach (WishListElem elem in wishList)
                {
                    if (c.Id == elem.IdCar)
                    {
                        res.Add(c);
                        break;
                    }
                }
            }
            return res;
        }

        public Car GetCar(string name)
        {
            string realName = name.Replace("{", "");
            realName = realName.Replace("}", "");

            foreach (Car c in context.Cars)
            {
                if (c.Name == realName)
                    return c;
            }
            return null;
        }

        public void AddToCart(CartElem model)
        {
            context.Cart.SqlQuery("select * from Cart where Cart.IdCartElem = " + model.IdCartElem)
                context.Cart.Add(model);
            context.SaveChanges();
        }

        public void AddToWishList(WishListElem model)
        {
            if (context.WishList.Find(model) == null)
                context.WishList.Add(model);
            context.SaveChanges();
        }

        public void DeleteFromCart(int index)
        {
            IList<CartElem> cart = context.Cart.ToList();
            CartElem elem = cart[index];
            context.Cart.Remove(elem);
            context.SaveChanges();
        }
    }
}