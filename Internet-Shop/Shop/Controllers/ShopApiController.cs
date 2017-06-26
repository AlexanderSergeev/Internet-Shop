using Shop.DataAccess;
using Shop.Models;
using System.Collections.Generic;
using System.Web.Http;
using log4net;

namespace Shop.Controllers
{

    [RoutePrefix("api/cars")]
    public class ShopApiController : ApiController
    {
        private IShopDbRepository repository;
        private ILog log = LogManager.GetLogger(typeof(ShopApiController));

        public ShopApiController(IShopDbRepository repoInstance)
        {
            repository = repoInstance;
        }

        [Route]
        public IEnumerable<Car> GetCars()
        {
            log.Info("Getting cars!");
            if (repository == null)
            {
                log.Error("Repository is null!");
                return null;
            }
            return repository.GetCars();
        }

        [Route("cart")]
        public IEnumerable<Car> GetCart()
        {
            log.Info("Getting cart!");
            if (repository == null)
            {
                log.Error("Repository is null!");
                return null;
            }
            return repository.GetCart();
        }

        [Route("wishlist")]
        public IEnumerable<Car> GetWishList()
        {
            log.Info("Getting wish list!");
            if (repository == null)
            {
                log.Error("Repository is null!");
                return null;
            }
            return repository.GetWishList();
        }

        [Route("{name}")]
        public Car GetCar(string name)
        {
            log.Info("Getting car by name");
            if (repository == null)
            {
                log.Error("Repository is null!");
                return null;
            }
            return repository.GetCar(name);
        }

        [Route("cart")]
        [HttpPost]
        public void AddToCart([FromBody]CartElem model)
        {
            repository.AddToCart(model);
        }

        [Route("wishlist")]
        [HttpPost]
        public void AddToWishList([FromBody]WishListElem model)
        {
            repository.AddToWishList(model);
        }

        [Route("cart/{index}")]
        [HttpGet]
        [HttpDelete]
        public void DeleteFromCart(int index)
        {
            repository.DeleteFromCart(index);
        }
    }
}