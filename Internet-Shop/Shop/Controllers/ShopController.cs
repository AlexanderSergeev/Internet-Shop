using Shop.DataAccess;
using Shop.Models;
using System.Collections.Generic;
using System.Web.Mvc;

namespace Shop.Controllers
{
    public class ShopController : Controller
    {
        IShopDbRepository repo;
        public ShopController(IShopDbRepository repo2)
        {
            repo = repo2;
        }
        public ActionResult Index()
        {
            IEnumerable<Car> cars = repo.GetCars();
            ViewBag.Cars = cars;

            return View();
        }
    }
}