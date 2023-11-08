using System;
using Volo.Abp.Domain.Entities.Auditing;
namespace Acme.BookStore.Ordini
{
    public class ordine: AuditedAggregateRoot<Guid>
    {
       public string Name { get; set; } 
       public DateTime PublishDate { get; set; }
       public float Price { get; set; }
       public DateTime  ShippingDate { get; set; }
       
    }
}