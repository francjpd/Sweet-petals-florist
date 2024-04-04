import { useNavigate, useParams } from "react-router-dom"
import { useFetchProductByIdQuery } from "../Products/ProductsApiSlice"
import Button from "../../shared/Button/Button";
import { MouseEvent } from "react";
import { ProductDescriptionSkeleton, ProductImageSkeleton } from "./Skeleton";

export function ProductDetailsPage() {
    const { id } = useParams()
    const { data, isLoading } = useFetchProductByIdQuery(id as string);
    const navigate = useNavigate();

    const handleBack = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        navigate(-1);
    }


    return (<>
        <div className="grid grid-rows-1 grid-cols-2 gap-x-4 gap-y-4 sm:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 xl:gap-x-2">
            <div className="columns-1  w-full items-end text-right">
                <Button onClick={handleBack} >Back</Button>
            </div>

            <div className="columns-1 md:columns-2">
                <div className="bg-gray-200  dark:bg-gray-900 dark:border-gray-600 dark:text-white p-8 mt-0 rounded-sm  flex flex-col w-12/12  items-center">
                    {
                        isLoading ?
                            <ProductImageSkeleton /> :
                            <img src={data?.imgUrl} className="object-cover h-6/6 w-12/12"></img>
                    }
                </div>
                {
                    isLoading ?
                        <ProductDescriptionSkeleton /> :
                        <div className="h-5/5 dark:text-white">
                            <ol>
                                <li><span className="text-xs">Name: </span><span className="font-semibold">{data?.name}</span></li>
                                <li><span className="text-xs">Binomial name: </span><span className="font-semibold">{data?.binomialName}</span></li>
                                <li><span className="text-xs">Price: </span><span className="font-semibold">{data?.price}</span></li>
                                <li><span className="text-xs">Waterings per week: </span><span className="font-semibold">{data?.wateringsPerWeek}</span></li>
                                <li><span className="text-xs">Fertilizer type: </span><span className="font-semibold">{data?.fertilizerType}</span></li>

                            </ol>
                        </div>
                }
            </div>
        </div>
    </>)
}