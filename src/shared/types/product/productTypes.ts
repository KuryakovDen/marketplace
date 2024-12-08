import { Price } from '../commonTypes.ts'

export interface IProductProperty {
  title: string;
  value: string;
}

export type ProductId = number

export interface IProduct {
  id: ProductId;
  image: string;
  title: string;
  description: string;
  price: Price;
  categoryId: number;
  availableCount: number;
  isFavourite: boolean;
  properties: IProductProperty[]
}
