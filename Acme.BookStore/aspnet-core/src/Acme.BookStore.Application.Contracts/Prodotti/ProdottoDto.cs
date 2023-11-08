using System;
using Volo.Abp.Application.Dtos;

namespace Acme.BookStore.Prodotti;

public class ProdottoDto : AuditedEntityDto<Guid>
{
    public string Name { get; set; }
    public float Price { get; set; }
}