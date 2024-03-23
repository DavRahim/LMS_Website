"use client"

import DashboardHeader from "@/app/components/Admin/DashboardHeader";
import AllInvoices from "@/app/components/Admin/order/AllInvoices";
import AdminSidebar from "@/app/components/Admin/sidebar/AdminSidebar";
import Heading from "@/app/utils/Heading";
import React from "react";

type Props = {};

const page = (props: Props) => {
    return (
        <div>
            <Heading
                title="ELeaning - Admin"
                description="ELearning is a Platform for student"
                keywords="programming,stack"
            />
            <div className="w-full flex h-[200vh]">
                <div className="1500px:w-[16%] w-1/5 ">
                    <AdminSidebar />
                </div>
                <div className="w-[85%]">
                    <DashboardHeader />
                    <AllInvoices />
                </div>
            </div>
        </div>
    );
};

export default page;
