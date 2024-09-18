import { ProductPrice } from '../types/product/Product.types.ts'

function getProductPrice({ currency, amount }: ProductPrice) {
  return `${currency}${amount}`
}

export default getProductPrice
