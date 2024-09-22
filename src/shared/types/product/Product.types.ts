
type ProductProperty = {
  title: string;
  value: string;
}

export type Price = {
  amount: number;
  currency: string;
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
