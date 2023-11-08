using System;
using Volo.Abp.Application.Dtos;

namespace Acme.BookStore.OrdiniDto
{
    public class ordineDto: AuditedEntityDto<Guid>
    {
     public string Name { get; set; } 
       public DateTime PublishDate { get; set; }
       public float Price { get; set; }
       public DateTime  ShippingDate { get; set; }
    }
}