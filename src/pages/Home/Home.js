import React from "react";
import Banner from "../../components/Banner/Banner";
import Section from "../../components/Sections/Section";
import Services from "../../components/Services/Services";
import Category from "../../components/Category/Category"

import "../Home/Home.css";

function Home() {
    return (
        <>
            <Banner/>
            <div className="home_page">
                <Section/>
                <Services/>
                <Category/>
            </div>
        </>
    )
}

export default Home;