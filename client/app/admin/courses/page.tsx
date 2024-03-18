"use client"
import React from "react";
import AdminProtected from "../../hooks/adminProtected";
import Heading from "../../utils/Heading";
import AdminSidebar from "../../components/Admin/sidebar/AdminSidebar";
import DashboardHero from "../../components/Admin/DashboardHero";
import AllCourses from "@/app/components/Admin/course/AllCourses";

type Props = {};

const page = (props: Props) => {
    return (
        <div>
            <AdminProtected>
                <Heading
                    title="ELeaning - Admin"
                    description="ELearning is a Platform for student"
                    keywords="programming,stack"
                />
                <div className="flex h-screen">
                    <div className="1500px:w-[16%] w-1/5">
                        <AdminSidebar />
                    </div>
                    <div className="w-[85%]">
                        <DashboardHero />
                        <AllCourses />
                    </div>
                </div>
            </AdminProtected>
        </div>
    );;
};

export default page;
