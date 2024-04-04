import { Product } from "../Products/ProductsApiSlice";

export default function ProductList({ elements, onProductSelect }: { elements: Product[], onProductSelect: (product: Product) => void }) {

    const elementsContent = elements.map(
        (product) => (

            <div key={product.id} onClick={() => onProductSelect(product)}>
                <div className=" cursor-pointer  hover:scale-110
            hover:z-10 transform-gpu transition ease-in-out">
                    <div className=" bg-gray-200  dark:bg-gray-900 dark:border-gray-600 dark:text-white p-2 mt-0 rounded-sm  flex flex-col w-full h-44 items-center" >
                        <img src={product.imgUrl} className="object-cover h-5/6 w-11/12" />
                        <p className="text-center">{product.name} - {product.price}</p>
                    </div>
                </div>
            </div>

        ));

    return (
        <div className="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 xl:gap-x-4 ">
            {elementsContent}
        </div>
    )
}