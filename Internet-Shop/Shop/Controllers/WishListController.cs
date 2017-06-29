using System;
using Shop.DataAccess;
using Shop.Models;
using System.Collections.Generic;
using System.Web.Http;

namespace Shop.Controllers
{

    [RoutePrefix("api/wishlist")]
    public class WishListController : ApiController
    {
        private IShopDbRepository repository;

        public WishListController(IShopDbRepository repoInstance)
        {
            if (repoInstance == null)
            {
                throw new Exception("Repository is null!");
            }
            repository = repoInstance;
        }

        [Route]
        public IEnumerable<Car> GetWishList()
        {
            return repository.GetWishList();
        }

        [Route]
        [HttpPost]
        public void AddToWishList([FromBody]WishListElement model)
        {
            repository.AddToWishList(model);
        }

        [Route("{carId}")]
        [HttpDelete]
        public void DeleteFromWishList(int carId)
        {
            repository.DeleteFromWishList(carId);
        }
    }
}
