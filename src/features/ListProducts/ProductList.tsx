import { Product } from "../Products/ProductsApiSlice";

export default function ProductList({ elements, onProductSelect }: { elements: Product[], onProductSelect: (product: Product) => void }) {

    const elementsContent = elements.map(
        (product) => (

            <div key={product.id} onClick={() => onProductSelect(product)}>
                <div className=" cursor-pointer  hover:scale-110
            hover:z-10 transform-gpu transition ease-in-out">
                    <div className=" bg-gray-200  dark:bg-gray-900 dark:border-gray-600 dark:text-white p-2 pt-4 mt-0 rounded-sm  flex flex-col w-full h-48 items-center" >
                        <img src={product.imgUrl} className="object-cover h-4/6 w-11/12" />
                        <div className="text-center"><span className="text-sm" >{product.name} </span> / <span className="text-xs"> {product.binomialName}</span></div>
                        <div><span>{product.price}</span> <span className="text-xs">eur</span></div>
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