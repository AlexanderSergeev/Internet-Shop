using System.Configuration;
using System.Reflection;
using System.Web.Http;
using Autofac;
using Autofac.Integration.Mvc;
using Autofac.Integration.WebApi;
using Shop.DataAccess;

namespace Shop
{
  public class IocConfig
  {
    public static void ConfigureContainer()
    {
      var builder = new ContainerBuilder();

      // Get your HttpConfiguration.
      var config = GlobalConfiguration.Configuration;
      
      // Register your Web API controllers.
      builder.RegisterApiControllers(typeof(Global).Assembly);

      // OPTIONAL: Register the Autofac filter provider.
      builder.RegisterWebApiFilterProvider(config);

      builder.RegisterControllers(typeof(Global).Assembly);

      builder.RegisterType<ShopDbRepository>().As<IShopDbRepository>();

      builder.RegisterType<ShopDbContext>().As<ShopDbContext>().WithParameter("connectionString", ConfigurationManager.ConnectionStrings["PrimaryConnectionString"].ConnectionString);

      // Set the dependency resolver to be Autofac.
      var container = builder.Build();

      config.DependencyResolver = new AutofacWebApiDependencyResolver(container);

      //return builder.Build();
    }
  }
}