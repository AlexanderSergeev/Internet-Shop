using Shop.DataAccess;
using Shop.Models;
using System.Collections.Generic;
using System.Web.Mvc;

namespace Shop.Controllers
{
    public class ShopController : Controller
    {
        private IShopDbRepository repo;
        public ShopController(IShopDbRepository repoInstance)
        {
            repo = repoInstance;
        }
        public ActionResult Index()
        {
            IEnumerable<Car> cars = repo.GetCars();
            ViewBag.Cars = cars;

            return View();
        }
    }
}