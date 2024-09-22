import { Price } from '../commonTypes.ts'

type ProductProperty = {
  title: string;
  value: string;
}

type ProductId = number

export type Product = {
  id: ProductId;
  image: string;
  title: string;
  description: string;
  price: Price;
  categoryId: number;
  availableCount: number;
  isFavourite: boolean;
  properties: ProductProperty[]
}
