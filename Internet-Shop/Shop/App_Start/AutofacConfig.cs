using System.Configuration;
using Autofac;
using Autofac.Integration.Mvc;
using Shop.DataAccess;

namespace Shop
{
  public class IocConfig
  {
    public static IContainer ConfigureContainer()
    {
      var builder = new ContainerBuilder();

      builder.RegisterControllers(typeof(Global).Assembly);

      builder.RegisterType<ShopDbRepository>().As<IShopDbRepository>();

      builder.RegisterType<ShopDbContext>().As<ShopDbContext>().WithParameter("connectionString", ConfigurationManager.ConnectionStrings["PrimaryConnectionString"].ConnectionString);

      return builder.Build();
    }
  }
}