import type { AuditedEntityDto } from '@abp/ng.core';

export interface CreateUpdateordineDto {
  name: string;
  publishDate: string;
  price: number;
  shippingDate: string;
}

export interface ordineDto extends AuditedEntityDto<string> {
  name?: string;
  publishDate?: string;
  price: number;
  shippingDate?: string;
}
