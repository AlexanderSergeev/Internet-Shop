using Shop.DataAccess;
using Shop.Models;
using System.Collections.Generic;
using System.Web.Http;

namespace Shop.Controllers
{

  [RoutePrefix("api/cars")]
  public class CarController : ApiController
  {
    private readonly IShopDbRepository repository;
    public CarController(IShopDbRepository repoInstance)
    {
      repository = repoInstance;
    }

    [Route]
    public IEnumerable<Car> Get()
    {
      return repository.GetCars();
    }

    [Route]
    [HttpPost]
    public void Post([FromBody]Car model)
    {
      repository.AddCar(model);
    }
  }
}