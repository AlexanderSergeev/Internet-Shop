using System.Web.Mvc;

namespace Shop.Controllers
{
    public class ShopController : Controller
    {

        public ShopController()
        {
        }

        public ActionResult Index()
        {
            return View();
        }
    }
}