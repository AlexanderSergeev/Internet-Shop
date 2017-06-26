using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Shop.Models
{
    [Table("WishList")]
    public class WishListElem
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public int IdWishListElem { get; set; }
        [Required]
        public int IdCar { get; set; }
    }
}