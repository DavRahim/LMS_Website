"use client"

import React, { FC, useState } from "react";
import Protected from "../hooks/useProtected";
import Heading from "../utils/Heading";
import Header from "../components/Header";
import Profile from "../components/profile/Profile";
import { useSelector } from "react-redux";

type Props = {};

const Profiles: FC<Props> = (props: Props) => {
    const [open, setOpen] = useState(false);
    const [activeItem, setActiveItem] = useState(0);
    const [route, setRoute] = useState("Login")
    const { user } = useSelector((state: any) => state.auth)
    return (
        <div>
            <Protected>
                <Heading title={`${user?.name} profile`}
                description="E-Learning is platform for student to learn and get help form teachers" keywords="Programming,MERN, Redux" />
                <Header open={open} setOpen={setOpen} activeItem={activeItem} setRoute={setRoute} route={route} />
                <Profile user={user} />
            </Protected>
        </div>
    );
};

export default Profiles;
