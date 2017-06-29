using System;
using System.Collections.Generic;
using System.Linq;
using Shop.Models;
using log4net;

namespace Shop.DataAccess
{
    public class ShopDbRepository : IShopDbRepository
    {
        private readonly ShopDbContext context;
        private ILog log = LogManager.GetLogger(typeof(ShopDbRepository));

        public ShopDbRepository(ShopDbContext contextInstance)
        {
            if (contextInstance == null)
            {
                log.Error("Repository is null!");
                throw new Exception("Context is null!");
            }
            context = contextInstance;
        }

        public IEnumerable<Car> GetCars()
        {
            log.Info("Getting cars!");
            return context.Cars;
        }

        public IEnumerable<Car> GetCart()
        {
            log.Info("Getting cart!");
            IEnumerable<Car> res = context.Database.SqlQuery<Car>("getCart");
            return res;
        }

        public IEnumerable<Car> GetWishList()
        {
            log.Info("Getting wish list!");
            IEnumerable<Car> res = context.Database.SqlQuery<Car>("getWishList");
            return res;
        }

        public Car GetCar(int id)
        {
            log.Info("Getting car by id " + id);
            foreach (Car c in context.Cars)
            {
                if (c.Id == id)
                    return c;
            }
            return null;
        }

        public void AddToCart(CartElement model)
        {
            log.Info("Adding to cart model with CarId " + model.CarId);
            context.Cart.Add(model);
            context.SaveChanges();
        }

        public void AddToPurchase(PurchaseElement model)
        {
            log.Info("Adding to purchases models with Name " + model.Name);
            IList<CartElement> cart = context.Cart.ToList();
            foreach (CartElement elem in cart)
            {
                PurchaseElement addModel = model;
                addModel.CarId = elem.CarId;
                context.Purchases.Add(addModel);
                context.SaveChanges();
            }
        }

        public void AddToWishList(WishListElement model)
        {
            log.Info("Adding to wish list model with CarId " + model.CarId);
            context.WishList.Add(model);
            context.SaveChanges();
        }

        public void DeleteFromCart(int carId)
        {
            log.Info("Deleting from cart by CarId " + carId);
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

        public void ClearCart()
        {
            log.Info("Clearing cart");
            context.Cart.RemoveRange(context.Cart);
            context.SaveChanges();
        }

        public void DeleteFromWishList(int carId)
        {
            log.Info("Deleting from wish list by CarId " + carId);
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