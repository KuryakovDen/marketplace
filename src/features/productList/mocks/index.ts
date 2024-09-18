import { Product } from '../../../shared/types/product/Product.types.ts'

export const MOCK_PRODUCTS: Product[] = [
  {
    'id': 1,
    'title': 'Product One',
    'description': 'Description for product one.',
    'price': {
      'amount': 10,
      'currency': '$'
    },
    'categoryId': 1,
    'availableCount': 5,
    'properties': [{'title': 'Цвет', 'value': 'Черный'}]
  },
  {
    'id': 2,
    'title': 'Product Two',
    'description': 'Description for product two.',
    'price': {
      'amount': 15,
      'currency': '$'
    },
    'categoryId': 2,
    'availableCount': 3,
    'properties': [{'title': 'Цвет', 'value': 'Белый'}]
  },
  {
    'id': 3,
    'title': 'Product Three',
    'description': 'Description for product three.',
    'price': {
      'amount': 20,
      'currency': '$'
    },
    'categoryId': 1,
    'availableCount': 10,
    'properties': [{'title': 'Цвет', 'value': 'Синий'}]
  },
  {
    'id': 4,
    'title': 'Product Four',
    'description': 'Description for product four.',
    'price': {
      'amount': 25,
      'currency': '$'
    },
    'categoryId': 3,
    'availableCount': 2,
    'properties': [{'title': 'Цвет', 'value': 'Красный'}]
  },
  {
    'id': 5,
    'title': 'Product Five',
    'description': 'Description for product five.',
    'price': {
      'amount': 30,
      'currency': '$'
    },
    'categoryId': 2,
    'availableCount': 8,
    'properties': [{'title': 'Цвет', 'value': 'Зеленый'}]
  }
]
