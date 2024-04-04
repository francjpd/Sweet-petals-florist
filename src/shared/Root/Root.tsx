import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Breadcrumb from "../Header/Breadcrumbs";

export default function Root() {
    return (
        <div className="container w-full mx-auto flex flex-col">
            <section className="mb-8">
                <Header>
                    <Breadcrumb />
                </Header>
            </section>
            <Outlet></Outlet >
        </div>
    )
}
