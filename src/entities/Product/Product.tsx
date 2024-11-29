import { Price } from '../../shared/types/commonTypes.ts'
import { ProductId, IProductProperty } from '../../shared/types/product/productTypes.ts'

export class Product {
  id: ProductId;
  image: string;
  title: string;
  description: string;
  price: Price;
  categoryId: number;
  availableCount: number;
  isFavourite: boolean;
  properties: IProductProperty[];

  constructor(
    id: ProductId,
    image: string,
    title: string,
    description: string,
    price: Price,
    categoryId: number,
    availableCount: number,
    isFavourite: boolean,
    properties: IProductProperty[]
  ) {
    this.id = id;
    this.image = image;
    this.title = title;
    this.description = description;
    this.price = price;
    this.categoryId = categoryId;
    this.availableCount = availableCount;
    this.isFavourite = isFavourite;
    this.properties = properties;
  }

  getProduct() {
    return { ...this }
  }
}
