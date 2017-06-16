using System;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;
using System.Web.Http;
using Chat;
using System.Web.Optimization;
using Autofac.Integration.Mvc;

namespace Shop
{
    public class Global : HttpApplication
    {
        void Application_Start(object sender, EventArgs e)
        {
            DependencyResolver.SetResolver(new AutofacDependencyResolver(IocConfig.ConfigureContainer())); 
            GlobalConfiguration.Configure(WebApiConfig.Register);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);
        }
    }
}