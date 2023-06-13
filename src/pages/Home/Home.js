import React from "react";
import Banner from "../../components/Banner/Banner";
import Section from "../../components/Sections/Section";
import Services from "../../components/Services/Services";
import Testimonial from "../../components/Testimonial/Testimonial";
import Title from "../../components/Title/Title";
import RoundButton from '../../components/RoundButton/RoundButton';
import Card from '../../components/Card/Card';

import { Link } from "react-router-dom";

import Img1 from "../../Images/reza-delkhosh-iRAOJYtPHZE-unsplash.jpg"
import Img2 from "../../Images/judeus-samson-0UECcInuCR4-unsplash.jpg";
import Img3 from "../../Images/juri-gianfrancesco-UCEtRnp8qR0-unsplash.jpg";
import Img4 from "../../Images/laura-chouette-zU8hYK_yWLI-unsplash.jpg";
import Img5 from "../../Images/sincerely-media-9ShY-Tq70Mc-unsplash.jpg";
import Img6 from "../../Images/matas-katinas-7ITfJfAxxY4-unsplash.jpg";
import Img7 from "../../Images/ilya-mondryk-gR9Iyu7eYUI-unsplash.jpg";
import Img8 from "../../Images/the-ian-ZCoqcrWp9GY-unsplash.jpg";


import "../Home/Home.css";

function Home() {
    return (
        <>
            <Banner/>
            <div className="home_page">
                {/* Media Section */}
                <Title title="media" />
                <Section/>

                {/* Sevice Section */}
                <Title title="services" />
                <Services/>

                {/* Products Section */}
                <Title title="products" />
                <div className="section_flex">
                    <RoundButton title='all categories' active={true}/>
                    <RoundButton title='men categories' active={false}/>
                    <RoundButton title='women categories' active={false}/>
                </div>
                <div className="section_flex category_flex">
                    <Card title='title' image={Img1} rating={3} />
                    <Card title='title' image={Img2} rating={2} />
                    <Card title='title' image={Img3} rating={5} />
                    <Card title='title' image={Img4} rating={4} />
                    <Card title='title' image={Img5} rating={3} />
                    <Card title='title' image={Img6} rating={3} />
                    <Card title='title' image={Img7} rating={4} />
                    <Card title='title' image={Img8} rating={5} />
                    <Card title='title' image={Img1} rating={3} />
                    <Card title='title' image={Img2} rating={4} />
                    <Card title='title' image={Img3} rating={4} />
                </div>
                <div className="section_flex">
                    <Link to='/product' ><RoundButton title='load more' active={false}/></Link>
                </div>
                <Title title="testimonials" />
                <Testimonial/>
            </div>
        </>
    )
}

export default Home;