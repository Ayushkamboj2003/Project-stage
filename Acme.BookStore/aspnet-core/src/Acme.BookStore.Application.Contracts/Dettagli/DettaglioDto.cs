using System;
using Volo.Abp.Application.Dtos;

namespace Acme.BookStore.Dettagli;

    public class DettaglioDto: AuditedEntityDto<Guid>
    {
         public string Prodotto { get; set; }
          public int Quantità { get; set; }
          public float Price { get; set; }
          public Guid OrdiniId { get; set; }
          public Guid ProdottiId { get; set; }
    }   
    
