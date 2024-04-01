"use client"

import React, { FC, useState } from "react";
import Protected from "../hooks/useProtected";
import Heading from "../utils/Heading";
import Header from "../components/Header";
import Profile from "../components/profile/Profile";
import { useSelector } from "react-redux";
import Footer from "../components/Footer";

type Props = {};

const Profiles: FC<Props> = (props: Props) => {
    const [open, setOpen] = useState(false);
    const [activeItem, setActiveItem] = useState(5);
    const [route, setRoute] = useState("Login")
    const { user } = useSelector((state: any) => state.auth)
    return (
        <div className="min-h-screen">
            <Protected>
                <Heading title={`${user?.name} profile`}
                    description="E-Learning is platform for student to learn and get help form teachers" keywords="Programming,MERN, Redux" />
                <Header open={open} setOpen={setOpen} activeItem={activeItem} setRoute={setRoute} route={route} />
                <Profile user={user} />
                <Footer />
            </Protected>
        </div>
    );
};

export default Profiles;
