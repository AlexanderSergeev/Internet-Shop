namespace Shop.Models
{
    public class Car
    {
        public int Id { get; set; }
        public string Picture { get; set; }
        public string Name { get; set; }
        public decimal Price { get; set; }
        public int VehiclePower { get; set; }
        public int MaximumSpeed { get; set; }
    }
}