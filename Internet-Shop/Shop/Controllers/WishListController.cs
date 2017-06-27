using System;
using Shop.DataAccess;
using Shop.Models;
using System.Collections.Generic;
using System.Web.Http;
using log4net;

namespace Shop.Controllers
{

    [RoutePrefix("api/wishlist")]
    public class WishListController : ApiController
    {
        private IShopDbRepository repository;
        private ILog log = LogManager.GetLogger(typeof(WishListController));

        public WishListController(IShopDbRepository repoInstance)
        {
            if (repoInstance == null)
            {
                log.Error("Repository is null!");
                throw new Exception("Repository is null!");
            }
            repository = repoInstance;
        }

        [Route]
        public IEnumerable<Car> GetWishList()
        {
            log.Info("Getting wish list!");
            return repository.GetWishList();
        }

        [Route]
        [HttpPost]
        public void AddToWishList([FromBody]WishListElement model)
        {
            log.Info("Adding to wishlist");
            repository.AddToWishList(model);
        }

        [Route("{carId}")]
        [HttpDelete]
        public void DeleteFromWishList(int carId)
        {
            log.Info("Deleting grom wishlist");
            repository.DeleteFromWishList(carId);
        }
    }
}
