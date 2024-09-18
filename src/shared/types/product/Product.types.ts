
type ProductProperty = {
  title: string;
  value: string;
}

export type ProductPrice = {
  amount: number;
  currency: string;
}

export type Product = {
  id: number;
  title: string;
  description: string;
  price: ProductPrice;
  categoryId: number;
  availableCount: number;
  properties: ProductProperty[]
}
