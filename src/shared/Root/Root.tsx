import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Breadcrumb from "../Header/Breadcrumbs";

export default function Root() {
    return (
        <>
            <Header><Breadcrumb/></Header>
            <Outlet></Outlet >
        </>
    )
}
