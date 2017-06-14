using Autofac;
using Autofac.Integration.Mvc;
using Shop;
using Shop.DataAccess;

public class AutofacConfig
{
    public static void ConfigureContainer()
    {
        // получаем экземпляр контейнера
        var builder = new ContainerBuilder();

        // регистрируем контроллер в текущей сборке
        builder.RegisterControllers(typeof(Global).Assembly);

        // регистрируем споставление типов
        builder.RegisterType<ShopDBRepository>().As<IShopDBRepository>();

        // создаем новый контейнер с теми зависимостями, которые определены выше
        var container = builder.Build();
    }
}