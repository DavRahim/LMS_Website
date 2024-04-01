"use client"
import React, { useState } from "react";
import Heading from "../utils/Heading";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FAQ from "../components/FAQ/FAQ";

type Props = {};

const Page = (props: Props) => {
    const [open, setOpen] = useState(false);
    const [activeItem, setActiveItem] = useState(4);
    const [route, setRoute] = useState("Login");
    return (
        <div className="min-h-screen">
            <Heading
                title="FAQ us - Lms"
                description="E-Learning is platform for student to learn and get help form teachers"
                keywords="Programming,MERN, Redux"
            />
            <Header
                open={open}
                activeItem={activeItem}
                route={route}
                setOpen={setOpen}
                setRoute={setRoute}
            />
            <FAQ />
            <br />
            <br />
            <Footer />
        </div>
    );
};

export default Page;
