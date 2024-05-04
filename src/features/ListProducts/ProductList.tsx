import { Product } from '../Products/ProductsApiSlice'
import ProductCard from './ProductCard'

export default function ProductList ({
  elements,
  onProductSelect
}: {
  elements: Product[];
  onProductSelect: (product: Product) => void;
}) {
  const elementsContent = elements.map((product: Product) => (
    <div key={product.id} onClick={() => onProductSelect(product)}>
      <ProductCard product={product}></ProductCard>
    </div>
  ))

  return (
    <div className="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 xl:gap-x-4 ">
      {elementsContent}
    </div>
  )
}
