import React, { FC } from "react";
import CoursePlayer from "./CoursePlayer";
import { styles } from "@/app/styles/styles";
import Ratings from "@/app/utils/Ratings";
import { IoCheckmarkDoneOutline } from "react-icons/io5";

type Props = {
  active: number;
  setActive: (active: number) => void;
  courseData: any;
  handleCourseCreate: any
};

const CoursePreview: FC<Props> = ({ active, courseData, handleCourseCreate, setActive }) => {

  const discountPercentage = ((courseData?.estimatedPrice - courseData?.price) / courseData?.estimatedPrice) * 100;


  const discountPercentagePrice = discountPercentage.toFixed(0)
  const prevButton = () => {
    setActive(active - 1)
  }
  const createCourse = () => {
    handleCourseCreate()

  }




  return (
    <div className="w-[90%] m-auto py-5 mb-5 dark:text-white">
      <div className="w-full relative">
        <div className="w-full mt-10">
          <CoursePlayer
            videoUrl={courseData?.demoUrl}
            title={courseData?.title}
          />

        </div>
        <div className="flex items-center">

          <h1 className="pt-5 text-[25px]">
            {courseData?.price === 0 ? "free" : courseData?.price + "$"}

          </h1>
          <h5 className="pl-3 text-[20px] mt-3 line-through opacity-85">
            {courseData?.estimatedPrice}

          </h5>
          <h4 className="pl-5 pt-4 text-[22px]">
            {discountPercentagePrice}% Off
          </h4>
        </div>
        <div className="flex items-center">
          <div className={`${styles.button} !w-[140px] my-3 font-Poppins !bg-[crimson] cursor-not-allowed dark:text-white`}>
            Buy Now {courseData?.price}

          </div>

        </div>
        <div className="flex items-center">

          <input type="text" name="" id="" placeholder="Discount code ...." className={`${styles.input} 1100px:!w-[50%] 1500px:!w-[50%] ml-3 !mt-8`} />

          <div className={`${styles.button} !w-[120px] ml-3 font-Poppins cursor-pointer`}>
            Apply
          </div>

        </div>
        <br />
        <div>
          <p className="pb-1">Source Code included

          </p>
          <p className="pb-1">Source Code included

          </p>
          <p className="pb-1">Source Code included

          </p>
          <p className="pb-1">Source Code included

          </p>

        </div>
        <br />
      </div>
      <div className="w-full">
        <div className="w-full 800px:pr-5">

          <h1 className="text-[25px] font-Poppins font-[600]">
            {courseData?.name}
          </h1>

          <div className="flex items-center justify-between pt-3">
            <div className="flex items-center">
              <Ratings rating={0} />
              <h5>0 Review</h5>

            </div>
            <h5> 0 Students</h5>

          </div>
          <br />
          <h1 className="text-[25px] font-Poppins font-[600]">
            What you will learn from this course ?

          </h1>
        </div>
        {
          courseData?.benefits?.map((item: any, index: number) => (
            <div className="w-full flex 800px:items-center py-2" key={index}>
              <div className="w-[15px] mr-1">
                <IoCheckmarkDoneOutline size={20} />

              </div>
              <p className="pl-2">{item?.title}</p>

            </div>
          ))
        }
        <br />
        <br />
        <h1 className="text-[25px] font-Poppins font-[600]">
          What are the prerequisite for stating this course?
          {
            courseData?.prerequisites.map((item: any, index: number) => (
              <div className="w-full flex800px:items-center py-2" key={index}>
                <div className="w-[15px] mr-1">
                  <IoCheckmarkDoneOutline size={20} />

                </div>
                <p className="pl-2">{item?.title}</p>

              </div>
            ))
          }
        </h1>
        <br />
        <br />
        {/* course description */}
        <div className="w-full">
          <h1 className="text-[25px] font-Poppins font-[600]"> Course Details</h1>
          <p className="text-[18px] mt-[20px] whitespace-pre-line w-full overflow-hidden">
            {courseData?.description}
          </p>


        </div>
        <br />
        <br />


      </div>
      <div className="w-full flex items-center justify-between">
        <div className="w-full 800px:w-[100px] flex justify-center items-center h-[40px] bg-[#37a39a] text-center text-[#fff] rounded cursor-pointer" onClick={() => prevButton()}>
          prev

        </div>
        <div className="w-full 800px:w-[100px] flex justify-center items-center h-[40px] bg-[#37a39a] text-center text-[#fff] rounded cursor-pointer" onClick={() => createCourse()}>
          Next

        </div>

      </div>

    </div>);
};

export default CoursePreview;
