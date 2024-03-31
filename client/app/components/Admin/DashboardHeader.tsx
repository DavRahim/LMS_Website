"use client"
import { ThemeSwitcher } from "@/app/utils/ThemeSwitcher"
import { useGetAllNotificationsQuery, useUpdateNotificationStatusMutation } from "@/redux/features/notifications/notificationsApi";
import React, { FC, useEffect, useState } from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoThermometer } from "react-icons/io5";
import socketID from "socket.io-client";
import { format } from "timeago.js";
const ENDPOINT = process.env.NEXT_PUBLIC_SOCKET_SERVER_URI || "";
const socketId = socketID(ENDPOINT, { transports: ["websocket"] });

type Props = {
    open?: boolean;
    setOpen?: any
};

const DashboardHeader: FC<Props> = ({open, setOpen}) => {

    const {data, refetch}= useGetAllNotificationsQuery(undefined, {
        refetchOnMountOrArgChange:true,
    });
    const [updateNotificationStatus, {isSuccess}] = useUpdateNotificationStatusMutation();
    const [notifications, setNotifications] = useState<any>([]);
    const [audio] =useState(
        new Audio("https://res.cloudinary.com/ds4wulbab/video/upload/v1711911227/hit6_fiznu2.ogg")
    );

    const playerNotificationSound = () => {
        audio.play()
    };
    useEffect(()=>{
            if(data){
                setNotifications(
                    data.notifications.filter((item:any)=> item.status === "unread")
                )
            }
            if(isSuccess){
                refetch();
            }
            audio.load()

    }, [data, isSuccess, audio, refetch])

    useEffect(()=>{
        socketId.on("newNotification", (data)=>{
            refetch();
            playerNotificationSound()
        })
    }, [playerNotificationSound, refetch])

    const handleNotificationStatusChange = async(id:string) => {
        await updateNotificationStatus(id)
    }

    return (
        <div className="w-full flex items-center justify-end p-6 fixed top-3 right-0">
            <ThemeSwitcher />
            <div className="relative cursor-pointer m-2" onClick={() => setOpen(!open)}>
                <IoMdNotificationsOutline className="text-2xl cursor-pointer dark:text-white text-black" />
                <span className="absolute -top-2 -right-2 bg-[#3ccba0] rounded-full w-[20px] h-[20px] text-[12px] flex items-center justify-center text-white">
                   {notifications && notifications?.length}
                </span>
            </div>
            {open && (
                <div className="w-[350px] h-[50vh] dark:bg-[#111C43] bg-white shadow-xl absolute top-[64px] z-10 rounded">
                    <h5 className="text-center text-[20px] font-Poppins text-black dark:text-white p-3">
                        Notification
                    </h5>
                    {
                        notifications && notifications?.map((item:any, index:number) => (
                            <div key={index} className="dark:bg-[#2d3a4ea1]
                bg-[#000013] font-Poppins border-b dark:border-b-[#ffffff47] border-b-[#0000000f]">
                                <div className="w-full flex items-center justify-between p-2">


                                    <p className="text-black dark:text-white">
                                       {item.title}
                                    </p>
                                    <p onClick={()=>handleNotificationStatusChange
                                    (item._id)} className="text-black dark:text-white cursor-pointer">
                                        Mark as read
                                    </p>
                                </div>
                                <p className="px-2 text-black dark:text-white">
                                   {item.message} 
                                </p>
                                <p className="p-2 text-black dark:text-white text-[14px]">{format(item.createdAt)} </p>
                            </div>

                        ))
                    }
                   
                    <div className="dark:bg-[#2d3a4ea1]
                bg-[#000013] font-Poppins border-b dark:border-b-[#ffffff47] border-b-[#0000000f]">
                        <div className="w-full flex items-center justify-between p-2">


                            <p className="text-black dark:text-white">
                                New Question Received
                            </p>
                            <p className="text-black dark:text-white cursor-pointer">
                                Mark as read
                            </p>
                        </div>
                        <p className="px-2 text-black dark:text-white">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa aspernatur saepe, asperiores consequatur voluptatibus commodi perspiciatis facere numquam inventore id obcaecati, doloremque impedit reiciendis illo sed, architecto atque nesciunt odit.
                        </p>
                        <p className="p-2 text-black dark:text-white text-[14px]">5 day ago </p>
                    </div>

                </div>
            )}

        </div>
    );
};

export default DashboardHeader;
