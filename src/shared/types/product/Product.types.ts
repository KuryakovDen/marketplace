
type ProductProperty = {
  title: string;
  value: string;
}

export type Product = {
  id: number;
  title: string;
  description: string;
  price: {
    amount: number;
    currency: string;
  };
  categoryId: number;
  availableCount: number;
  properties: ProductProperty[]
}
