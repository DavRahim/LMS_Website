
import CourseDetailsPage from "@/app/components/course/CourseDetailsPage";
import React from "react";

type Props = {};

const Page = ({params}:any) => {
  return (
    <div>
          <CourseDetailsPage id={params.id}/>
    </div>

  );
};

export default Page;
