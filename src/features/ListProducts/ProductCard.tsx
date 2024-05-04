import type { Product } from '../Products/ProductsApiSlice'

export default function ProductCard ({ product }: { product: Product }) {
  return <div
        className="cursor-pointer  hover:scale-110
            hover:z-10 transform-gpu transition ease-in-out shadow-sm hover:shadow-md"
    >
        <div className="bg-casper-50 dark:bg-gray-700 text-casper-950   dark:border-gray-600 dark:text-white p-2 pt-4 mt-0 rounded-sm  flex flex-col sm:w-9/12 md:w-full h-56 items-center">
            <img
                src={product.imgUrl}
                className="object-cover h-4/6 w-6/12 md:w-10/12 rounded-md"
            />
            <div className="text-center">
                <span className="text-md">{product.name} </span>{' '}
                <span className="text-floralWhite-700">
                    <hr className="border-floralWhite-300" />
                </span>{' '}
                <span className="text-xs"> {product.binomialName}</span>
            </div>
            <div>
                <span>{product.price}</span>{' '}
                <span className="text-xs text-floralWhite-700">eur</span>
            </div>
        </div>
    </div>
}
