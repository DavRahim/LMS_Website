"use client"

import DashboardHero from "@/app/components/Admin/DashboardHero";
import CreateCourse from "@/app/components/Admin/course/CreateCourse";
import EditFaq from "@/app/components/Admin/customization/EditFaq";
import AdminSidebar from "@/app/components/Admin/sidebar/AdminSidebar";
import AdminProtected from "@/app/hooks/adminProtected";
import Heading from "@/app/utils/Heading";
import React from "react";

type Props = {};

const page = (props: Props) => {
    return (
        <div>
            <AdminProtected>
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
                    <DashboardHero />
                    <EditFaq />
                </div>
            </div>
            </AdminProtected>
        </div>
    );
};

export default page;
