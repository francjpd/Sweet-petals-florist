import { Product } from "../Products/ProductsApiSlice";

export default function ProductList({ elements, onProductSelect }: { elements: Product[], onProductSelect: (product: Product) => void }) {

    const elementsContent = elements.map(
        (product) => (

            <div key={product.id} onClick={() => onProductSelect(product)}>
                <div className=" cursor-pointer  hover:scale-110
            hover:z-10 transform-gpu transition ease-in-out shadow-sm hover:shadow-md">
                    <div className="bg-casper-50 dark:bg-charlestonGreen-700 text-casper-950   dark:border-gray-600 dark:text-white p-2 pt-4 mt-0 rounded-sm  flex flex-col sm:w-9/12 md:w-full h-56 items-center" >
                        <img src={product.imgUrl} className="object-cover h-4/6 w-6/12 md:w-10/12 rounded-md" />
                        <div className="text-center"><span className="text-md" >{product.name} </span> <span className="text-floralWhite-700"><hr className="border-floralWhite-300" /></span> <span className="text-xs"> {product.binomialName}</span></div>
                        <div><span>{product.price}</span> <span className="text-xs text-floralWhite-700">eur</span></div>
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