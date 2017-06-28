using System;
using Shop.DataAccess;
using Shop.Models;
using System.Collections.Generic;
using System.Web.Http;
using log4net;

namespace Shop.Controllers
{

    [RoutePrefix("api/cart")]
    public class CartController : ApiController
    {
        private IShopDbRepository repository;
        private ILog log = LogManager.GetLogger(typeof(CartController));

        public CartController(IShopDbRepository repoInstance)
        {
            if (repoInstance == null)
            {
                log.Error("Repository is null!");
                throw new Exception("Repository is null!");
            }
            repository = repoInstance;
        }

        [Route]
        public IEnumerable<Car> GetCart()
        {
            log.Info("Getting cart!");
            return repository.GetCart();
        }

        [Route]
        [HttpPost]
        public void AddToCart([FromBody]CartElement model)
        {
            log.Info("Adding to cart");
            repository.AddToCart(model);
        }

        [Route("purchase")]
        [HttpPost]
        public void AddToPurchase([FromBody]PurchaseElement model)
        {
            log.Info("Adding to purchase list");
            repository.AddToPurchase(model);
        }

        [Route("{carId}")]
        [HttpDelete]
        public void DeleteFromCart(int carId)
        {
            log.Info("Deleting grom cart");
            repository.DeleteFromCart(carId);
        }

        [Route]
        [HttpDelete]
        public void ClearCart()
        {
            log.Info("Clearing cart");
            repository.ClearCart();
        }
    }
}
