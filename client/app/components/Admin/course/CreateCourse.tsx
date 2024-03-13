"use client"

import React, { useState } from "react";
import CourseInformation from "./CourseInformation";
import CourseOptions from "./CourseOptions";
import CourseData from "./CourseData";

type Props = {};

const CreateCourse = (props: Props) => {
    const [active, setActive] = useState(0);
    const [courseInfo, setCourseInfo] = useState({
        name: "",
        description: "",
        price: "",
        estimatedPrice: "",
        tags: "",
        level: "",
        demoUrl: "",
        thumbnail: ''
    })

    const [Benefits, setBenefits] = useState([{ title: "" }])
    const [prerequisites, setPrerequisites] = useState([{ title: "" }])

    const [courseContentData, setCourseContentData] = useState([
        {
            videoUrl: "",

            title: "",
            description: "",
            videoSection: "Untitled Section",
            links: [
                {
                    title: "",
                    url: ""
                }
            ],
            suggestion: ""
        }
    ])
 
    const [courseData, setCourseData] = useState({})


    return (
        <div className="w-full min-h-screen">
            <div className="w-[80%]">
                {
                    active === 0 && (
                        <CourseInformation
                            courseInfo={courseInfo}
                            setCourseInfo={setCourseInfo}
                            active={active}
                            setActive ={setActive}
                        />
                    )
                }
                {
                    active === 1 && (
                        <CourseData
                            benefits={Benefits} prerequisites={prerequisites} setBenefits={setBenefits} setPrerequisites={setPrerequisites}
                            active={active}
                            setActive ={setActive}
                        />
                    )
                }
            </div>
           <div className="w-[20%] mt-[200px] h-screen fixed z-[-1] top-[-90px] right-0">
               <CourseOptions active={active} setActive={setActive}/>
           </div>
        </div>
    );
};

export default CreateCourse;
