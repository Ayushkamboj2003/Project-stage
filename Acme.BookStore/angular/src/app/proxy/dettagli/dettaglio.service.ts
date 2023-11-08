import type { CreateUpdateDettaglioDto, DettaglioDto, IDettaglioAppService, ProdottiLookupDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import type { ListResultDto, PagedAndSortedResultRequestDto, PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DettaglioService {
  apiName = 'Default';
  

  create = (input: CreateUpdateDettaglioDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, DettaglioDto>({
      method: 'POST',
      url: '/api/app/dettaglio',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/dettaglio/${id}`,
    },
    { apiName: this.apiName,...config });
  

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, DettaglioDto>({
      method: 'GET',
      url: `/api/app/dettaglio/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getList = (input: PagedAndSortedResultRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<DettaglioDto>>({
      method: 'GET',
      url: '/api/app/dettaglio',
      params: { sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getListFiltered = (input: PagedAndSortedResultRequestDto, idOrdine: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<DettaglioDto>>({
      method: 'GET',
      url: '/api/app/dettaglio/filtered',
      params: { sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount, idOrdine },
    },
    { apiName: this.apiName,...config });
  

  getProdottiLookup = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, ListResultDto<ProdottiLookupDto>>({
      method: 'GET',
      url: '/api/app/dettaglio/prodotti-lookup',
    },
    { apiName: this.apiName,...config });
  

  update = (id: string, input: IDettaglioAppService, config?: Partial<Rest.Config>) =>
    this.restService.request<any, DettaglioDto>({
      method: 'PUT',
      url: `/api/app/dettaglio/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
