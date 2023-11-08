using System;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
namespace Acme.BookStore.Prodotti;

public interface IProdottoAppService :
    ICrudAppService< //Defines CRUD methods
        ProdottoDto, //Used to show books
        Guid, //Primary key of the book entity
        PagedAndSortedResultRequestDto, //Used for paging/sorting
        CreateUpdateProdottoDto> //Used to create/update a book
{
    

}
