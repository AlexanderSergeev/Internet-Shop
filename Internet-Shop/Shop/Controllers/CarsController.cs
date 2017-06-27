using System;
using Shop.DataAccess;
using Shop.Models;
using System.Collections.Generic;
using System.Web.Http;
using log4net;

namespace Shop.Controllers
{

    [RoutePrefix("api/cars")]
    public class CarsController : ApiController
    {
        private IShopDbRepository repository;
        private ILog log = LogManager.GetLogger(typeof(CarsController));

        public CarsController(IShopDbRepository repoInstance)
        {
            if (repoInstance == null)
            {
                log.Error("Repository is null!");
                throw new Exception("Repository is null!");
            }
            repository = repoInstance;
        }

        [Route]
        public IEnumerable<Car> GetCars()
        {
            log.Info("Getting cars!");
            return repository.GetCars();
        }

        [Route("{id}")]
        public Car GetCar(int id)
        {
            log.Info("Getting car by name");
            return repository.GetCar(id);
        }
    }
}