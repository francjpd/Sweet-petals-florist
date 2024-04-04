import { useParams } from "react-router-dom"
import { useFetchProductByIdQuery } from "../Products/ProductsApiSlice"

export function ProductDetailsPage() {
    const { id } = useParams()
    const { data } = useFetchProductByIdQuery(id as string);

    return (<>
        <h2>Product details page</h2>

        {data?.name}
    </>)
}