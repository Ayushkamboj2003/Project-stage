using System;
using Volo.Abp.Domain.Entities.Auditing;
namespace Acme.BookStore.Dettagli
{
    public class Dettaglio: FullAuditedAggregateRoot<Guid>
    {
          public int Quantità { get; set; }
          public float Price { get; set; }
          public Guid ProdottiId { get; set; }
          public Guid OrdiniId { get; set; }
    }
}