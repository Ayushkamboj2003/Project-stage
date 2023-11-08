using Acme.BookStore.Authors;
using Acme.BookStore.Books;
using Acme.BookStore.Dettagli;
using Acme.BookStore.Ordini;
using Acme.BookStore.OrdiniDto;
using Acme.BookStore.Prodotti;
using Acme.BookStore.Dettagli;
using AutoMapper;


namespace Acme.BookStore;

public class BookStoreApplicationAutoMapperProfile : Profile
{
    public BookStoreApplicationAutoMapperProfile()
    {
        CreateMap<Book, BookDto>();
        CreateMap<CreateUpdateBookDto, Book>();
        CreateMap<Author, AuthorDto>();
        CreateMap<Author, AuthorLookupDto>();
        CreateMap<Prodotto, ProdottoDto>();
        CreateMap<CreateUpdateProdottoDto, Prodotto>();
         CreateMap<ordine, ordineDto>();
        CreateMap<CreateUpdateordineDto, ordine>();
        CreateMap<CreateUpdateDettaglioDto, Dettaglio>();
        CreateMap<Dettaglio, DettaglioDto>();
        CreateMap<Prodotto, ProdottiLookupDto>();
       
        
    }
}
