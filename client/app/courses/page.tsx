"use client"

import { useGetUsersAllCoursesQuery } from "@/redux/features/courses/coursesApi";
import { useGetHeroDataQuery } from "@/redux/features/layout/layoutApi";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState, Suspense } from "react";
import Loader from "../components/Loader";
import Header from "../components/Header";
import Heading from "../utils/Heading";
import { styles } from "../styles/styles";
import CourseCard from "../components/course/CourseCard";
import Footer from "../components/Footer";

type Props = {};

const Page = (props: Props) => {
    const searchParams = useSearchParams();

    const search = searchParams?.get("title")

    const { data, isLoading } = useGetUsersAllCoursesQuery(undefined, {})

    const { data: categoriesData } = useGetHeroDataQuery("categories", {});
    const [route, setRoute] = useState("Login");
    const [open, setOpen] = useState(false);
    const [courses, setCourses] = useState([]);
    const [category, setCategory] = useState("All");

    useEffect(() => {
        if (category === "All") {
            setCourses(data?.courses)

        }


        if (category !== "All") {
            setCourses(
                data?.courses.filter((item: any) => item?.categories === category)
            )

        }
        if (search) {
            setCourses(
                data?.courses.filter((item: any) => item.name.toLowerCase().includes(search.toLocaleLowerCase()))
            )
        }

    }, [data, category, search])

    const categories = categoriesData?.layout.categories;



    return (
        <Suspense>
            {
                isLoading ? (<Loader />) : (
                    <>
                        <Header route={route} setRoute={setRoute} open={open} setOpen={setOpen} activeItem={1} />
                        <div className="w-[95%] 800px:w-[85%] m-auto min-h-[70vh]">
                            <Heading title="E-Learning"
                                description="E-Learning is platform for student to learn and get help form teachers" keywords="Programming, Redux" />
                            <br />
                            <div className="w-full flex items-center flex-wrap">
                                <div className={`h-[35px] ${category === "All" ? "bg-[crimson]" : "bg-[#5858cb]"} m-3 px-3 rounded-[30px] flex items-center font-Poppins cursor-pointer`} onClick={() => setCategory("All")}>
                                    All

                                </div>
                                {
                                    categories && categories.map((item: any, index: number) => (
                                        <div key={index}>
                                            <div className={`h-[35px] ${category === item.title ? "bg-[crimson]" : "bg-[#5858cb]"} m-3 px-3 rounded-[30px] flex item-center justify-center font-Poppins cursor-pointer`} onClick={() => setCategory(item.title)}>
                                                {item.title}
                                            </div>

                                        </div>
                                    ))
                                }

                            </div>

                            {
                                courses && courses.length === 0 && (
                                    <p className={`${styles.label} justify-center min-h-[50vh] flex items-center`}>
                                        {search ? "No course Found | " : "Np courses found in this category. Please try another One | "}

                                    </p>
                                )
                            }

                            <br />
                            <br />
                            <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:gap-[25px] 1500px:grid-cols-4 1500px:gap-[35px] mb-12 border-0">
                                {
                                    courses && courses.map((item: any, index: number) => (
                                        <CourseCard item={item} key={index} />
                                    ))
                                }
                            </div>

                        </div>
                        <Footer />


                    </>

                )


            }



        </Suspense>);
};

export default Page;
