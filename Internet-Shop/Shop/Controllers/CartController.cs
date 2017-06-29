using Shop.DataAccess;
using Shop.Models;
using System.Collections.Generic;
using System.Web.Http;

namespace Shop.Controllers
{

    [RoutePrefix("api/cart")]
    public class CartController : ApiController
    {
        private IShopDbRepository repository;

        public CartController(IShopDbRepository repoInstance)
        {
            repository = repoInstance;
        }

        [Route]
        public IEnumerable<Car> GetCart()
        {
            return repository.GetCart();
        }

        [Route]
        [HttpPost]
        public void AddToCart([FromBody]CartElement model)
        {
            repository.AddToCart(model);
        }

        [Route("purchase")]
        [HttpPost]
        public void AddToPurchase([FromBody]PurchaseElement model)
        {
            repository.AddToPurchase(model);
        }

        [Route("{carId}")]
        [HttpDelete]
        public void DeleteFromCart(int carId)
        {
            repository.DeleteFromCart(carId);
        }

        [Route]
        [HttpDelete]
        public void ClearCart()
        {
            repository.ClearCart();
        }
    }
}
