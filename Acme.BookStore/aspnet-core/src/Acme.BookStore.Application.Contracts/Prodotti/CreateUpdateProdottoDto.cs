using System;
using System.ComponentModel.DataAnnotations;

namespace Acme.BookStore.Prodotti
{
    public class CreateUpdateProdottoDto
    {
    [Required]
    [StringLength(128)]
    public string Name { get; set; }
    
    [Required]
    public float Price { get; set; }
        
    }
}