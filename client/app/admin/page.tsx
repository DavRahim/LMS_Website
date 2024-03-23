"use client"

import React from "react";
import Heading from "../utils/Heading";
import AdminSidebar from "../components/Admin/sidebar/AdminSidebar";
import AdminProtected from "../hooks/adminProtected";
import DashboardHero from "../components/Admin/DashboardHero";


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
        <div className="flex h-[300vh]">
          <div className="1500px:w-[16%] w-1/5">
           <AdminSidebar/>
        </div>
        <div className="w-[85%]">
             <DashboardHero isDashboard={true}/>
          </div>
    </div>
      </AdminProtected>
  </div>
  );
};

export default page;
