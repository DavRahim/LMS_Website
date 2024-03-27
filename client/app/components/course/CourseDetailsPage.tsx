"use client"
import { useGetCoursesDetailsQuery } from "@/redux/features/courses/coursesApi";
import React, { useState } from "react";
import Loader from "../Loader"
import Heading from "@/app/utils/Heading";
import Header from "../Header";
import Footer from "../Footer";
import CourseDetails from "./CourseDetails";

type Props = {
    id:string
};

const CourseDetailsPage = ({id}: Props) => {

    const [route,setRoute] = useState("Login");
    const [open, setOpen] = useState(false)

    const {data, isLoading} = useGetCoursesDetailsQuery(id);


  return( 
  <>
  {
    isLoading ? (
        <Loader/>
    ) : (
        <div>
              <Heading title="E-Learning"
                description="E-Learning is platform for student to learn and get help form teachers" keywords="Programming,MERN, Redux" />
              <Header open={open} setOpen={setOpen} activeItem={1} setRoute={setRoute} route={route} />
              <CourseDetails data={data}/>

              <Footer/>
            
        </div>
    )
  }

  </>
  
  );
};

export default CourseDetailsPage;
