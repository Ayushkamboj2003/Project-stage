using System;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;

namespace Acme.BookStore.Dettagli;

    public interface IDettaglioAppService:
    ICrudAppService<
    DettaglioDto,
    Guid, //Primary key of the book entity
    PagedAndSortedResultRequestDto,
    CreateUpdateDettaglioDto>
    {
       Task<ListResultDto<ProdottiLookupDto>> GetAuthorLookupAsync();

       Task<PagedResultDto<DettaglioDto>> GetListFilteredAsync(PagedAndSortedResultRequestDto input, string idOrdine);
}
    
