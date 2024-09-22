import { ProductPrice } from '../../../shared/types/product/Product.types.ts'

// Можно вынести в shared утилиту
// Сделать компонент shared/Money.tsx
function getProductPrice({ currency, amount }: ProductPrice) {
  return `${currency}${amount}`
}

export default getProductPrice
