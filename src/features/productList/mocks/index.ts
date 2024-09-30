import { Product, ProductProperty } from '../../../shared/types/product/Product.types.ts'
import getRandomElement from '../../../shared/utils/getRandomElement.ts'
import getRandomNumber from '../../../shared/utils/getRandomNumber.ts'

const generateRandomProductProperties = (count: number): ProductProperty[] => {
  const titles = ['Color', 'Size', 'Material', 'Weight', 'Brand'];
  const values = ['Red', 'Blue', 'Green', 'Small', 'Medium', 'Large', 'Cotton', 'Plastic', 'Metal'];

  const properties: ProductProperty[] = [];

  for (let i = 0; i < count; i++) {
    properties.push({
      title: getRandomElement(titles),
      value: getRandomElement(values),
    });
  }

  return properties;
};

const generateProducts = (count: number): Product[] => {
  const products: Product[] = [];

  for (let i = 1; i <= count; i++) {
    products.push({
      id: i,
      image: 'https://fakeimg.pl/120x160/?text=Hello', // Генерация случайного изображения
      title: `Product ${i}`,
      description: `Description for product ${i}`,
      price: {
        amount: getRandomNumber(10, 1000),
        currency: '$',
      },
      categoryId: getRandomNumber(1, 10), // Случайный ID категории от 1 до 10
      availableCount: getRandomNumber(0, 100), // Случайное количество доступных товаров от 0 до 100
      isFavourite: Math.random() < 0.5, // Случайное значение для избранного
      properties: generateRandomProductProperties(getRandomNumber(1, 5)), // Случайное количество свойств от 1 до 5
    });
  }

  return products;
};

const MOCK_PRODUCTS_COUNT = 5000

// Генерируем моки для списка продуктов
export const MOCK_PRODUCTS = generateProducts(MOCK_PRODUCTS_COUNT)
