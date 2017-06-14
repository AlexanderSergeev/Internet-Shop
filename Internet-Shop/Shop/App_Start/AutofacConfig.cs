using Autofac;
using Autofac.Integration.Mvc;
using Shop;
using Shop.DataAccess;

public class AutofacConfig
{
    public static void ConfigureContainer()
    {
        var builder = new ContainerBuilder();

        builder.RegisterControllers(typeof(Global).Assembly);

        builder.RegisterType<ShopDBRepository>().As<IShopDBRepository>();

        var container = builder.Build();
    }
}