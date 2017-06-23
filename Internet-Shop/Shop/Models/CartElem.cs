using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Shop.Models
{
    [Table("Cart")]
    public class CartElem
    {
        [Key]
        public int IdCartElem { get; set; }
        public int IdCar { get; set; }
    }
}