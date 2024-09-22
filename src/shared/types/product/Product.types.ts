
type ProductProperty = {
  title: string;
  value: string;
}

// Вынести в общий тип так как может быть не только в продукте
export type ProductPrice = {
  amount: number;
  currency: string;
}

export type Product = {
  // Хорошая практика делать отделные типы для примитивов например
  // type ProductId = number;
  // id: ProductId;
  // Улучшает читаемость кода, мы знаем что за id. Легко делать рефакторинг, если тип id поменяется
  id: number;
  image: string;
  title: string;
  description: string;
  price: ProductPrice;
  categoryId: number;
  availableCount: number;
  isFavourite: boolean;
  properties: ProductProperty[]
}
