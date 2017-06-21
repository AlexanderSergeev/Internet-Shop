
using System.Web.Mvc;

namespace Shop.Controllers
{
    public class ShopController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult GetCar(string name)
        {
            ViewBag.Name = name;
            return View("Car");
        }
    }
}