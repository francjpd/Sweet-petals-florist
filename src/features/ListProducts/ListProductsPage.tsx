import { useFetchProductsQuery } from "../Products/ProductsApiSlice"

export function ListProductsPage() {
    const { data } = useFetchProductsQuery()
    return (<>
        List
        <ul>
            {data && data.map(product => (
                <li key={product.id}>{product.id}</li>
            ))}
        </ul>
    </>)
}