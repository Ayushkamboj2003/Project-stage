import type { CreateUpdateordineDto, ordineDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedAndSortedResultRequestDto, PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ordineService {
  apiName = 'Default';
  

  create = (input: CreateUpdateordineDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ordineDto>({
      method: 'POST',
      url: '/api/app/ordine',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/ordine/${id}`,
    },
    { apiName: this.apiName,...config });
  

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ordineDto>({
      method: 'GET',
      url: `/api/app/ordine/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getList = (input: PagedAndSortedResultRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<ordineDto>>({
      method: 'GET',
      url: '/api/app/ordine',
      params: { sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  update = (id: string, input: CreateUpdateordineDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ordineDto>({
      method: 'PUT',
      url: `/api/app/ordine/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
