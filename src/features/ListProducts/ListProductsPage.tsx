import { useNavigate } from "react-router-dom";
import { Product, useFetchProductsQuery } from "../Products/ProductsApiSlice";
import Search from "./Search";
import { useState } from "react";
import ProductList from "./ProductList";
import debounce from "debounce";
import { createPortal } from "react-dom";
import Loading from "../../shared/Loader/Loader";

export function ListProductsPage() {
  const { data, isLoading } = useFetchProductsQuery();
  const navigate = useNavigate();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const onProductSelect = async ({ id }: Product) => {
    navigate(`/${id}`);
  };

  // I would normally use a  debounce function to handle real time filtering.
  const handleSearch = debounce((value: string) => {
    if (value.length <= 1) {
      setFilteredProducts([]);
      return;
    }
    if (data) {
      setFilteredProducts(
        data.filter((product) => {
          const productName = product.name.toLowerCase();
          const binomialName = product.binomialName.toLowerCase();
          const valueToCompare = value.toLowerCase();
          return (
            productName.includes(valueToCompare) ||
            binomialName.includes(valueToCompare)
          );
        })
      );
    }
  }, 100);

  const element = document.getElementById("header-portal-slot");

  return (
    <>
      <>
        {element &&
          createPortal(
            <Search placeholder="Search" handleSearch={handleSearch}></Search>,
            element
          )}
      </>
      <div className="flex flex-col">
        {isLoading ? (
          <Loading />
        ) : (
          data && (
            <ProductList
              elements={filteredProducts.length ? filteredProducts : data}
              onProductSelect={onProductSelect}
            ></ProductList>
          )
        )}
      </div>
    </>
  );
}
