import type { AuditedEntityDto, EntityDto } from '@abp/ng.core';

export interface CreateUpdateDettaglioDto {
  quantità: number;
  price: number;
  prodottiId?: string;
  ordiniId?: string;
}

export interface DettaglioDto extends AuditedEntityDto<string> {
  prodotto?: string;
  quantità: number;
  price: number;
  ordiniId?: string;
  prodottiId?: string;
}

export interface IDettaglioAppService {
}

export interface ProdottiLookupDto extends EntityDto<string> {
  name?: string;
  price: number;
}
