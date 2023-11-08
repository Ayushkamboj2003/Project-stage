using System;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;

namespace Acme.BookStore.Prodotti ;
public class ProdottoAppService :
        CrudAppService<
        Prodotto, //The Book entity
        ProdottoDto, //Used to show books
        Guid, //Primary key of the book entity
        PagedAndSortedResultRequestDto, //Used for paging/sorting
        CreateUpdateProdottoDto>, //Used to create/update a book
        IProdottoAppService //implement the IBookAppService
{
     public ProdottoAppService(IRepository<Prodotto, Guid> repository)
     : base(repository)

    {

    }


}
