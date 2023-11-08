using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Acme.BookStore.Authors;
using System.Linq;
using System.Linq.Dynamic.Core;
using Acme.BookStore.Prodotti;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;
using System.Data.Common;

namespace Acme.BookStore.Dettagli;
public class DettaglioAppService :

  CrudAppService<
        Dettaglio, //The Book entity
        DettaglioDto, //Used to show books
        Guid, //Primary key of the book entity
        PagedAndSortedResultRequestDto, //Used for paging/sorting
        CreateUpdateDettaglioDto, //Used to create/update a book
    IDettaglioAppService>//implement the IBookAppService
{
    private readonly IRepository <Prodotto, Guid>_ProdottiRepository;
    public DettaglioAppService(IRepository<Dettaglio, Guid> repository,
IRepository<Prodotto, Guid> ProdottiRepository)
        : base(repository)
    {
    _ProdottiRepository=ProdottiRepository;
    }
     public async Task<ListResultDto<ProdottiLookupDto>> GetProdottiLookupAsync()
    {
        var Prodotti = await  _ProdottiRepository.GetListAsync();

        return new ListResultDto<ProdottiLookupDto>(
            ObjectMapper.Map<List<Prodotto>, List<ProdottiLookupDto>>(Prodotti)
        );
    }
     public override async Task<PagedResultDto<DettaglioDto>> GetListAsync(PagedAndSortedResultRequestDto input)
    {
        //Get the IQueryable<Book> from the repository
      var queryable = await Repository.GetQueryableAsync();

        //Prepare a query to join books and authors
        var query = from dettaglio in queryable
            join prodotto in await _ProdottiRepository.GetQueryableAsync() on dettaglio.ProdottiId equals prodotto.Id
            select new {dettaglio, prodotto};


        //Paging
        query = query
            .OrderBy(NormalizeSorting(input.Sorting))
            .Skip(input.SkipCount)
            .Take(input.MaxResultCount);

        //Execute the query and get a list
        var queryResult = await AsyncExecuter.ToListAsync(query);

        //Convert the query result to a list of BookDto objects
        var DettaglioDtos = queryResult.Select(x =>
        {
            var DettagliDto = ObjectMapper.Map<Dettaglio, DettaglioDto>(x.dettaglio);
            DettagliDto.Prodotto = x.prodotto.Name;
            return DettagliDto;
        }).ToList();

        //Get the total count with another query
        var totalCount = await Repository.GetCountAsync();

        return new PagedResultDto<DettaglioDto>(
            totalCount,
            DettaglioDtos
        );
    }
        private static string NormalizeSorting(string sorting)
    {
        if (sorting.IsNullOrEmpty())
        {
            return $"dettaglio.{nameof(Dettaglio.ProdottiId)}";
        }

        if (sorting.Contains("Prodotto", StringComparison.OrdinalIgnoreCase))
        {
            return sorting.Replace(
                "Prodotto",
                "prodotto.Name",
                StringComparison.OrdinalIgnoreCase
            );
        }

        return $"Dettaglio.{sorting}";
    }

    public async Task<PagedResultDto<DettaglioDto>> GetListFilteredAsync(PagedAndSortedResultRequestDto input, string idOrdine)
    {
        //Get the IQueryable<Book> from the repository
      var queryable = await Repository.GetQueryableAsync();

        //Prepare a query to join books and authors
        var query = from dettaglio in queryable
            join prodotto in await _ProdottiRepository.GetQueryableAsync() on dettaglio.ProdottiId equals prodotto.Id
            where dettaglio.OrdiniId.ToString() == idOrdine
            select new {dettaglio, prodotto};


        //Paging
        query = query
            .OrderBy(NormalizeSorting(input.Sorting))
            .Skip(input.SkipCount)
            .Take(input.MaxResultCount);

        //Execute the query and get a list
        var queryResult = await AsyncExecuter.ToListAsync(query);

        //Convert the query result to a list of BookDto objects
        var DettaglioDtos = queryResult.Select(x =>
        {
            var DettagliDto = ObjectMapper.Map<Dettaglio, DettaglioDto>(x.dettaglio);
            DettagliDto.Prodotto = x.prodotto.Name;
            DettagliDto.Price = x.prodotto.Price* DettagliDto.Quantità;
            return DettagliDto;
        }).ToList();

        //Get the total count with another query
        var totalCount = await Repository.GetCountAsync();

        return new PagedResultDto<DettaglioDto>(
            totalCount,
            DettaglioDtos
        );
    }
}
