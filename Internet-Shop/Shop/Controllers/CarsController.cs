using System;
using Shop.DataAccess;
using Shop.Models;
using System.Collections.Generic;
using System.Web.Http;

namespace Shop.Controllers
{

    [RoutePrefix("api/cars")]
    public class CarsController : ApiController
    {
        private IShopDbRepository repository;

        public CarsController(IShopDbRepository repoInstance)
        {
            if (repoInstance == null)
            {
                throw new Exception("Repository is null!");
            }
            repository = repoInstance;
        }

        [Route]
        public IEnumerable<Car> GetCars()
        {
            return repository.GetCars();
        }

        [Route("{id}")]
        public Car GetCar(int id)
        {
            return repository.GetCar(id);
        }
    }
}