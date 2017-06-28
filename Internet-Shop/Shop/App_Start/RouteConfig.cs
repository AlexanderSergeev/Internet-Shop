using System.Web.Mvc;
using System.Web.Routing;

namespace Shop
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
                        name: "Default",
                        url: "{name}/{id}",
                        defaults: new { controller = "Shop", action = "Index", id = UrlParameter.Optional, name = UrlParameter.Optional }
                    );
        }
    }
}
