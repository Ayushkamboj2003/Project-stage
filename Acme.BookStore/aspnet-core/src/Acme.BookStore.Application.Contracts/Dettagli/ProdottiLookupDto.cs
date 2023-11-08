using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;

namespace Acme.BookStore.Dettagli;

    public class ProdottiLookupDto: EntityDto<Guid>

    {
         public string Name { get; set; }
          public float Price { get; set; }
    }
     