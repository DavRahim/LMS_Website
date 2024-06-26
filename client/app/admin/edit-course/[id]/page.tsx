"use client"

import DashboardHeader from "@/app/components/Admin/DashboardHeader";
import CreateCourse from "@/app/components/Admin/course/CreateCourse";
import EditCourse from "@/app/components/Admin/course/EditCourse";
import AdminSidebar from "@/app/components/Admin/sidebar/AdminSidebar";
import Heading from "@/app/utils/Heading";
import React from "react";

type Props = {};

const page = ({params}:any) => {
    const id = params.id
    // console.log(id);
    return (
        <div>
            <Heading
                title="ELeaning - Admin"
                description="ELearning is a Platfrom for student"
                keywords="programming,stack"
            />
            <div className="w-full flex h-[200vh]">
                <div className="1500px:w-[16%] w-1/5">
                    <AdminSidebar />
                </div>
                <div className="w-[85%]">
                    <DashboardHeader />
                    {/* <CreateCourse /> */}
                    <EditCourse id={id}/>
                </div>
            </div>
        </div>
    );
};

export default page;
