using Shop.DataAccess;
using Shop.Models;
using System.Collections.Generic;
using System.Web.Http;

namespace Shop.Controllers
{

  [RoutePrefix("api/cars")]
  public class CarController : ApiController
  {
    private IShopDbRepository repository;

    public CarController(IShopDbRepository repoInstance)
    {
      repository = repoInstance;
    }

    [Route]
    public IEnumerable<Car> Get()
    {
      Logger.InitLogger();
      Logger.Log.Info("Hello info!");
      Logger.Log.Error("Hello error!");
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