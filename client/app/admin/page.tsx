import React from "react";
import Heading from "../utils/Heading";
import AdminSidebar from "../components/Admin/sidebar/AdminSidebar";

type Props = {};

const page = (props: Props) => {
  return (
  <div>
    <Heading
    title="ELeaning - Admin"
    description="ELearning is a Platfrom for student"
    keywords="programming,stack"
    />
    <div className="flex h-[200vh]">
        <div className="1500px:w-[16%] w-1/2">
           <AdminSidebar/>
        </div>
        <div className="w-[85%]">

        </div>

    </div>
  </div>
  );
};

export default page;
