using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Shop.Models
{
    [Table("WishList")]
    public class WishListElem
    {
        [Key]
        public int IdWishListElem { get; set; }
        public int IdCar { get; set; }
    }
}