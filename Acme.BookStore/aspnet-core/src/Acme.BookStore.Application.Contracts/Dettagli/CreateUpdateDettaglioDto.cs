using System;
using System.ComponentModel.DataAnnotations;

namespace Acme.BookStore.Dettagli;

    public class CreateUpdateDettaglioDto
    {
    [Required]
    public int Quantità { get; set; }
    [Required]
    public float Price { get; set; }
    public Guid ProdottiId { get; set; }
    public Guid OrdiniId { get; set; }
        
    }
