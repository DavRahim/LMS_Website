"use client"
import React, { FC, useState } from "react";
import SideBarProfile from "./SideBarProfile";
import { useLogOutQuery } from "@/redux/features/auth/authApi";
import { signOut } from "next-auth/react";
import { redirect } from "next/navigation";
import ProfileInfo from "./ProfileInfo";

type Props = {
    user: any
};

const Profile: FC<Props> = ({ user }) => {
    const [scroll, setScroll] = useState(false);
    const [avatar, setAvatar] = useState(null)
    const [logout, setLogout] = useState(false)
    const { } = useLogOutQuery(undefined, {
        skip: !logout ? true : false
    })

    const [active, setActive] = useState(1)

    const logoutHandler = async () => {
        setLogout(true);
        await signOut();
    }


    if (typeof window !== "undefined") {
        window.addEventListener("scroll", () => {
            if (window.screenY > 85) {
                setScroll(true)
            } else {
                setScroll(false)
            }
        })
    }

    return (
        <div className="w-[85%] flex mx-auto">
            <div className={`w-[60px] 800px:w-[310px] h-[450px] dark:bg-slate-900 bg-opacity-90 dark:border-[#ffffff1d] rounded-[5px] shadow-md dark:shadow-sm mt-[80px]  sticky ${scroll ? "top-[120px] " : "top-[30px]"} left-[30px] bg-white border-[#131111b4]`}>
                <SideBarProfile
                    user={user}
                    active={active}
                    avatar={avatar}
                    setActive={setActive}
                    logoutHandler={logoutHandler}
                />
            </div>
            {
                active === 1 && (
                    <div className="w-full h-full bg-transparent mt-[80px]">

                        <ProfileInfo avatar={avatar} user={user} />
                    </div>
                )
            }
        </div>
    );
};

export default Profile;
