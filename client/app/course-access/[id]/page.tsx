"use client"

import Loader from "@/app/components/Loader";
import CourseContent from "@/app/components/course/CourseContent";
import { useLoadUserQuery } from "@/redux/features/api/apiSlice";
import { redirect } from "next/navigation";
import React, { useEffect } from "react";

type Props = {
  params: any
};

const Page = ({ params }: Props) => {
  const id = params.id;

  const { data, isLoading, error } = useLoadUserQuery(undefined, {});

  useEffect(() => {
    if (data) {

      const isPurchased = data.user.courses.find((item: any) => item._id === id)
      if (!isPurchased) {
        redirect("/")
      }
      if (error) {
        redirect("/")
      }
    }



  }, [data, error, id])


  return (
    <>
      {
        isLoading ? (
          <Loader />
        ) : (
          <div className="">
            <CourseContent id={id} user={data?.user} />
          </div>)
      }

    </>


  );
};

export default Page;
