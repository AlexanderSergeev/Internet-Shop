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
        public IEnumerable<Car> Get()
        {
            log.Info("Getting cars!");
            if (repository == null)
            {
                log.Error("Repository is null!");
                return null;
            }
            return repository.GetCars();
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
    }
}