import Ratings from "@/app/utils/Ratings";
import React, { useEffect, useState } from "react";
import { IoCheckmarkDoneOutline, IoCloseOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import CoursePlayer from "../Admin/course/CoursePlayer";
import Link from "next/link";
import { styles } from "@/app/styles/styles";
import CourseContentList from "./CourseContentList";
import { Elements } from "@stripe/react-stripe-js"
import CheckOutForm from "../payment/CheckOutForm";
import { useLoadUserQuery } from "@/redux/features/api/apiSlice";
import Image from "next/image";
import { format } from "timeago.js";
import { VscVerifiedFilled } from "react-icons/vsc";

type Props = {
    data: any;
    clientSecret: string;
    stripePromise: any;
    setRoute: any;
    setOpen: any;
};

const CourseDetails = ({ data, clientSecret, stripePromise, setOpen: openAuthModal, setRoute }: Props) => {

    const { data: userData } = useLoadUserQuery(undefined, {});
    const [user, setUser] =useState<any>()
    // const user = userData?.user
    const [open, setOpen] = useState(false)

    useEffect(()=>{
        setUser(userData?.user)
    }, [userData])
    const discountPercentage = ((data?.course?.estimatePrice - data?.course?.price) / data?.course?.estimatePrice) * 100;

    const discountPercentagePrice = discountPercentage.toFixed(0)

    const isPurchased = user && user?.courses?.find((item: any) => item?._id === data?.course?._id);

    const handleOrder = (e: any) => {
        if (user) {

            setOpen(true)
        } else {
            setRoute("Login");
            openAuthModal(true)
        }
    }

// console.log(data);


    return (
        <div>
            <div className="w-[90%] 800px:w-[90%] m-auto py-5">
                <div className="w-full flex flex-col-reverse 800px:flex-row">
                    <div className="w-full 800px:w-[65%] 800px:pr-5">
                        <h1 className="text-[25px] font-Poppins font-[500] text-black dark:text-white">
                            {data?.course?.name}

                        </h1>
                        <div className="flex items-center justify-between pt-3">
                            <div className="flex items-center">
                                <Ratings rating={data?.course?.rating} />
                                <h5 className="text-black dark:text-white"> {data?.course?.review?.length} Review

                                </h5>

                            </div>
                            <h5 className="text-black dark:text-white">
                                {data?.course?.purchared} Students

                            </h5>

                        </div>
                        <br />
                        <h1 className="text-[25px] font-Poppins font-[600] text-black dark:text-white">
                            What you will learn from this Course ?

                        </h1>
                        <div>
                            {
                                data?.course?.benefits?.map((item: any, index: number) => (
                                    <div className="w-full flex 800px:items-center py-2" key={index}>
                                        <div className="w-[15px] mr-1">
                                            <IoCheckmarkDoneOutline size={20} className="text-black dark:text-white" />

                                        </div>
                                        <p className="pl-2 text-black dark:text-white">{item.title}</p>

                                    </div>
                                ))
                            }
                            <br />
                            <br />
                        </div>
                        <h1 className="text-[25px] font-Poppins font-[600] text-black dark:text-white">
                            What are the prerequisites for starting this Course ?


                        </h1>
                        {
                            data?.course?.prerequisites?.map((item: any, index: number) => (
                                <div className="w-full flex 800px:items-center py-2" key={index}>
                                    <div className="w-[15px] mr-1">
                                        <IoCheckmarkDoneOutline size={20} className="text-black dark:text-white" />

                                    </div>
                                    <p className="pl-2 text-black dark:text-white">{item.title}</p>

                                </div>
                            ))
                        }
                        <br />
                        <br />
                        <div>
                            <h1 className="text-[25px] font-Poppins font-[600] text-black dark:text-white">
                                Course Overview


                            </h1>
                            <CourseContentList data={data?.course?.courseData} isDemo={true} />

                            {/* course content list */}
                        </div>
                        <br />
                        <br />
                        {/* course description */}
                        <div className="w-full">
                            <h1 className="text-[25px] font-Poppins font-[600] text-black dark:text-white">
                                Course Details

                            </h1>

                            <p className="text-[18px] mt-[20px] whitespace-pre-line w-full overflow-hidden text-black dark:text-white">{data?.course.description}</p>

                        </div>
                        <br />
                        <br />
                        <div className="w-full">
                            <div className="800px:flex items-center">
                                <Ratings rating={data?.course?.rating} />
                                <div className="mb-2 800px:mb-[unset]">
                                    <h5 className="text-[25px] font-Poppins text-black dark:text-white">
                                        {Number.isInteger(data?.course?.ratings) ? data?.course?.rating?.toFixed(1) : data?.course?.rating?.toFixed(2)} {' '} Course Rating {data?.course?.reviews?.length} Reviews  </h5>

                                </div>

                            </div>

                        </div>
                        <br />


                        {
                            (data?.course?.reviews && [...data?.course?.reviews].reverse())?.map((item: any, index: number) => (
                                <div className="w-full pb-4 dark:text-white" key={index}>
                                    <div className="w-full flex">
                                        <div className="w-[50px] h-[50px]">
                                            <Image
                                                src={item?.user.avatar ? item?.user?.avatar?.url : "https://imgs.search.brave.com/H-EWHnZrTM7Fp44-1C5jP5MFwCHtU_SEulqH5WtPHDE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA1LzQxLzQ4LzU1/LzM2MF9GXzU0MTQ4/NTUwMF9XNkdOZHdi/R1lsMGVnSndHS0gx/VlJPclFnbDBQR0M0/VS5qcGc"}
                                                alt=""
                                                width={50}
                                                height={50}
                                                className="w-[50px] h-[50px] rounded-full object-cover"
                                            />

                                        </div>
                                        <div className="mt-2 ml-3">
                                            <h1 className="text-[18px]">{item?.user?.name}</h1>
                                            <Ratings rating={item?.rating} />
                                            <p>
                                                {item.comment}
                                            </p>
                                            <small className="text-[#ffffff83]">

                                                {format(item.createdAt)} *

                                            </small>

                                        </div>

                                    </div>


                                    {
                                        item.commentReplies.map((i: any, index: number) => (
                                            <div key={index} className="w-full flex 800px:ml-16 my-5">
                                                <div className="w-[50px] h-[50px]">
                                                    <Image
                                                        src={i.user?.avatar ? i?.user?.avatar?.url : "https://imgs.search.brave.com/H-EWHnZrTM7Fp44-1C5jP5MFwCHtU_SEulqH5WtPHDE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA1LzQxLzQ4LzU1/LzM2MF9GXzU0MTQ4/NTUwMF9XNkdOZHdi/R1lsMGVnSndHS0gx/VlJPclFnbDBQR0M0/VS5qcGc"}
                                                        alt=""
                                                        width={50}
                                                        height={50}
                                                        className="w-[50px] h-[50px] rounded-full object-cover"
                                                    />

                                                </div>
                                                <div className="pl-2">
                                                    <h5 className="text-[20px]">
                                                        <div className="flex items-center">
                                                            {i?.user?.name} {i.user.role && <VscVerifiedFilled className="text-blue-700 ml-2" size={20} />}

                                                        </div>

                                                    </h5>
                                                    <p>{i.comment}</p>
                                                    <small className="text-[#ffffff83]">
                                                        {format(i.createdAt)}

                                                    </small>

                                                </div>

                                            </div>
                                        ))
                                    }

                                </div>
                            ))
                        }

                    </div>
                    <div className="w-full 800px:w-[35%] relative">
                        <div className="sticky top-[100px] left-0 z-50 w-full">
                            <CoursePlayer
                                title={data?.course?.title}
                                videoUrl={data?.course?.demoUrl}
                            />
                            <div className="flex items-center">
                                <h1 className="pt-5 text-[25px] text-black dark:text-white">
                                    {data?.course?.price === 0 ? "Free" : data?.course?.price + "$"}
                                </h1>
                                <h5 className="pl-3 text-[20px] mt-2 line-through opacity-80 text-black dark:text-white">
                                    {data?.course?.estimatePrice} $
                                </h5>
                                <h4 className="pl-5 pt-4 text-[22px] text-black dark:text-white">
                                    {discountPercentagePrice} % Off

                                </h4>
                            </div>
                            <div className="flex items-center">
                                {isPurchased ? (
                                    <Link className={`${styles.button} !w-[200px] my-3 dark:text-white font-Poppins cursor-pointer !bg-red-500`} href={`/course-access/${data?.course?._id}`}>
                                        Enter to course
                                    </Link>
                                ) : (
                                    <div className={`${styles.button} !w-[160px] dark:text-white my-3 font-Poppins cursor-pointer !bg-red-400`} onClick={handleOrder}>Buy Now {" "}${data?.course?.price}

                                    </div>
                                )}

                            </div>
                            <br />
                            <p className="pb-1 text-black dark:text-white">Source code included

                            </p>
                            <p className="pb-1 text-black dark:text-white">Full Lifetime access

                            </p>
                            <p className="pb-1 text-black dark:text-white">Certificate of Completion

                            </p>
                            <p className="pb-3 800px:pb-1 text-black dark:text-white">
                                Premium support

                            </p>

                        </div>

                    </div>


                </div>


            </div>

            <>

                {
                    open && (
                        <div className="w-full h-screen bg-[#00000036] fixed top-0 left-0 z-50 flex items-center justify-center">
                            <div className="w-[500px] min-h-[500px] bg-white rounded-xl shadow p-3">
                                <div className="w-full flex justify-end">


                                    <IoCloseOutline size={40} className="text-black cursor-pointer" onClick={() => setOpen(false)} />
                                </div>
                                <div className="w-full ">
                                    {
                                        stripePromise && clientSecret && (
                                            <Elements
                                                stripe={stripePromise}
                                                options={{ clientSecret }}
                                            >
                                                <CheckOutForm user={user} setOpen={setOpen} data={data} />
                                            </Elements>
                                        )
                                    }

                                </div>


                            </div>

                        </div>
                    )
                }
            </>


        </div>

    );
};

export default CourseDetails;
