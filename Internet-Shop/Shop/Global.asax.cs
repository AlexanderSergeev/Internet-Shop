using System;
using System.Web;
using System.Web.Routing;
using System.Web.Http;
using Chat;
using System.Web.Optimization;
using Autofac.Integration.WebApi;

namespace Shop
{
  public class Global : HttpApplication
  {
    void Application_Start(object sender, EventArgs e)
    {
      GlobalConfiguration.Configuration.DependencyResolver = new AutofacWebApiDependencyResolver(IocConfig.ConfigureContainer());
      GlobalConfiguration.Configure(WebApiConfig.Register);
      RouteConfig.RegisterRoutes(RouteTable.Routes);
      BundleConfig.RegisterBundles(BundleTable.Bundles);
    }
  }
}