using Autofac;
using Autofac.Integration.Mvc;
using Shop;
using Shop.DataAccess;
using System.Web.Mvc;

public class AutofacConfig
{
    public static void ConfigureContainer()
    {
        var builder = new ContainerBuilder();

        builder.RegisterControllers(typeof(Global).Assembly);

        builder.RegisterType<ShopDbRepository>().As<IShopDbRepository>();

        var container = builder.Build();

        DependencyResolver.SetResolver(new AutofacDependencyResolver(container));
    }
}