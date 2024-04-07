import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Product, useFetchProductsQuery } from "../Products/ProductsApiSlice";
import { ListProductsPage } from "./ListProductsPage";
import Header from "../../shared/Header/Header";
import { Mock } from "vitest";

vi.mock("../Products/ProductsApiSlice", () => ({
  useFetchProductsQuery: vi.fn(),
}));

vi.mock("react-router-dom", async () => {
  const mod = await vi.importActual<typeof import("react-router-dom")>(
    "react-router-dom"
  );
  return {
    ...mod,
    useNavigate: () => vi.fn(),
  };
});

const mockProducts: Product[] = [
  {
    id: "ND1elEt4nqZrCeFflDUZ2",
    name: "Rosa de damasco",
    binomialName: "Rosa damascena",
    price: 10.5,
    imgUrl: "http://localhost:3000/images/rosaDamascena.jpeg",
    wateringsPerWeek: 3,
    fertilizerType: "nitrogen",
    heightInCm: 180,
  },
  {
    id: "pMZMhe_ZaAPZoaCCtlDrg",
    name: "Rosa china",
    binomialName: "Rosa chinensis",
    price: 11.45,
    imgUrl: "http://localhost:3000/images/rosaChinensis.jpeg",
    wateringsPerWeek: 3,
    fertilizerType: "nitrogen",
    heightInCm: 195,
  },
];

describe("ListProductsPage", () => {
  beforeEach(() => {
    (useFetchProductsQuery as Mock).mockReturnValue({ data: mockProducts });
  });

  it("renders the product list", () => {
    render(<ListProductsPage />);
    expect(screen.getByText("Rosa de damasco")).toBeInTheDocument();
    expect(screen.getByText("Rosa china")).toBeInTheDocument();
  });

  it("filters products based on search input", async () => {
    render(
      <>
        <Header></Header>
      </>
    );
    render(<ListProductsPage />);
    const searchInput = screen.getByPlaceholderText("Search");
    await userEvent.type(searchInput, "chinensis");
    expect(screen.getByText("Rosa china")).toBeInTheDocument();
  });
});
