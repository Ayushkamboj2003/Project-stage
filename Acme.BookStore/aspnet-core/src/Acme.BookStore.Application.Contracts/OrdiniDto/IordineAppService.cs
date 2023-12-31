using System;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;

namespace Acme.BookStore.OrdiniDto
{
    public interface IordineAppService:
    ICrudAppService< //Defines CRUD methods
        ordineDto, //Used to show books
        Guid, //Primary key of the book entity
        PagedAndSortedResultRequestDto, //Used for paging/sorting
        CreateUpdateordineDto> //Used to create/update a book
{

}
}