
using System.Web.Mvc;

namespace Shop.Controllers
{
    public class ShopController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Cart()
        {
            return View("Cart");
        }

        public ActionResult WishList()
        {
            return View("WishList");
        }
    }
}