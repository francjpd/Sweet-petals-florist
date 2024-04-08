import { useNavigate, useParams } from "react-router-dom";
import { useFetchProductByIdQuery } from "../Products/ProductsApiSlice";
import Button from "../../shared/Button/Button";
import { MouseEvent } from "react";
import { ProductDescriptionSkeleton, ProductImageSkeleton } from "./Skeleton";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { createPortal } from "react-dom";
import { useCurrentPath } from "../../shared/Header/Breadcrumbs/useCurrentPath";

export function ProductDetailsPage() {
  const { id } = useParams();
  const context = useCurrentPath();
  const { data, isLoading } = useFetchProductByIdQuery(id as string);
  const navigate = useNavigate();

  if (data) context.setPath(data.name);

  const handleBack = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate(-1);
  };

  const element = document.getElementById("header-portal-slot");

  return (
    <>
      <div className="grid grid-rows-1 grid-cols-1 gap-x-4 gap-y-4 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-1 xl:gap-x-2">
        <>
          {element &&
            createPortal(
              <Button
                className="text-floralWhite-500 bg-casper-200 hover:bg-casper-300"
                prependIcon={<ArrowBackIosIcon />}
                onClick={handleBack}
                variant="secondary"
              >
                Back
              </Button>,
              element
            )}
        </>
        <div className="columns-1 md:columns-2">
          <div className="bg-floralWhite-100 dark:bg-charlestonGreen-500 dark:border-gray-600 dark:text-white p-8 mt-0 rounded-sm  flex flex-col w-12/12  items-center rounded-b-md">
            {isLoading ? (
              <ProductImageSkeleton />
            ) : (
              <img
                src={data?.imgUrl}
                className="object-cover h-6/6 w-12/12"
              ></img>
            )}
          </div>
          {isLoading ? (
            <ProductDescriptionSkeleton />
          ) : (
            <div className="h-5/5 text-casper-950 dark:text-white dark:bg-charlestonGreen-800 bg-casper-100 p-4 rounded-b-md">
              <ol>
                <li>
                  <span className="text-xs">Name: </span>
                  <span className="font-semibold text-floralWhite-600">
                    {data?.name}
                  </span>
                </li>
                <li>
                  <span className="text-xs">Binomial name: </span>
                  <span className="font-semibold text-floralWhite-600">
                    {data?.binomialName}
                  </span>
                </li>
                <li>
                  <span className="text-xs">Price: </span>
                  <span className="font-semibold text-floralWhite-600">
                    {data?.price}
                  </span>
                </li>
                <li>
                  <span className="text-xs">Waterings per week: </span>
                  <span className="font-semibold text-floralWhite-600">
                    {data?.wateringsPerWeek}
                  </span>
                </li>
                <li>
                  <span className="text-xs">Fertilizer type: </span>
                  <span className="font-semibold text-floralWhite-600">
                    {data?.fertilizerType}
                  </span>
                </li>
              </ol>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
