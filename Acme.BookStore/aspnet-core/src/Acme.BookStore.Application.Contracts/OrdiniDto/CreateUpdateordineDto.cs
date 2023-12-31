using System;
using System.ComponentModel.DataAnnotations;

namespace Acme.BookStore.OrdiniDto
{
    public class CreateUpdateordineDto
    {
    [Required]
    [StringLength(128)]
    public string Name { get; set; }

    [Required]
    [DataType(DataType.Date)]
    public DateTime PublishDate { get; set; } = DateTime.Now;

     [Required]
    public float Price { get; set; }

     [Required]
    [DataType(DataType.Date)]
    public DateTime ShippingDate { get; set; } = DateTime.Now;

    }
}