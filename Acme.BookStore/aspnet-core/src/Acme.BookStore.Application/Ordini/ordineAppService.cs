using System;
using Acme.BookStore.Ordini;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;


namespace Acme.BookStore.OrdiniDto;
    public class ordineAppService :
    CrudAppService<
        ordine,
        ordineDto,
        Guid, 
        PagedAndSortedResultRequestDto,
        CreateUpdateordineDto>,
        IordineAppService 
{
    public ordineAppService(IRepository<ordine,Guid> repository)
        : base(repository)
    {

    }
}