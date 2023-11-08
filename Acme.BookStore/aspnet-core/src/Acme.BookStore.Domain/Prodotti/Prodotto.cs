using System;
using Volo.Abp.Domain.Entities.Auditing;

namespace Acme.BookStore.Prodotti
{
    public class Prodotto: AuditedAggregateRoot<Guid>
    {
         public string Name { get; set; } 
         public float Price { get; set; }
        //public Guid OrdiniId { get; set; }
    }
}