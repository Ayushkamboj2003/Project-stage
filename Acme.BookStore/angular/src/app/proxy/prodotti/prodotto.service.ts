import type { CreateUpdateProdottoDto, ProdottoDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedAndSortedResultRequestDto, PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProdottoService {
  apiName = 'Default';
  

  create = (input: CreateUpdateProdottoDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ProdottoDto>({
      method: 'POST',
      url: '/api/app/prodotto',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/prodotto/${id}`,
    },
    { apiName: this.apiName,...config });
  

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ProdottoDto>({
      method: 'GET',
      url: `/api/app/prodotto/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getList = (input: PagedAndSortedResultRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<ProdottoDto>>({
      method: 'GET',
      url: '/api/app/prodotto',
      params: { sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  update = (id: string, input: CreateUpdateProdottoDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ProdottoDto>({
      method: 'PUT',
      url: `/api/app/prodotto/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
