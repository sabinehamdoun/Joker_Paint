import React from "react";
import HomeIntro from "../../Components/HomeBanner/index";
import Boxes from "../../Components/Boxes/index";
// import { Outlet } from "react-router-dom"; 
import AboutUsHome from "../../Components/AboutUsHome/index";
import ColorTools from "../../Components/ColorTools";
import OurProductsHome from "../../Components/OurProductsHome";

export default function HomePage() {
    return (
        <>
        <HomeIntro />
        <Boxes />
        <AboutUsHome /> 
        <ColorTools /> 
        <OurProductsHome />
        </>
    )
}