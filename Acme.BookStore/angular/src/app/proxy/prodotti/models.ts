import type { AuditedEntityDto } from '@abp/ng.core';

export interface CreateUpdateProdottoDto {
  name: string;
  price: number;
}

export interface ProdottoDto extends AuditedEntityDto<string> {
  name?: string;
  price: number;
}
