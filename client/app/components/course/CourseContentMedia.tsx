import React, { useState } from "react";
import CoursePlayer from "../Admin/course/CoursePlayer";
import { styles } from "@/app/styles/styles";
import { AiFillStar, AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineStar } from "react-icons/ai";
import Image from "next/image";
import { comment } from "postcss";

type Props = {
    data: any;
    activeVideo: number;
    setActiveVideo: (activeVideo: number) => void;
    user: any

};

const CourseContentMedia = ({ activeVideo, data, setActiveVideo, user }: Props) => {

    const [activeBar, setActiveBar] = useState(0)
    const [question, setQuestion] = useState("");
    const [review, setReview] = useState("")

    const isReviewExists = data?.reviews?.find((item: any) => item.user._id === user._id);
    const [rating, setRating] = useState(0)


    return (
        <div className="w-[95%] 800px:w-[86%] py-4 m-auto">
            <CoursePlayer
                title={data[activeVideo]?.title}
                videoUrl={data[activeVideo]?.videoUrl}
            />
            <div className="w-full flex items-center justify-between my-3">
                <div className={`${styles.button} !w-[unset] text-black dark:text-white !min-h-[40px] !py-[unset] ${activeVideo === 0 && "!cursor-no-drop opacity-[.8]"}`} onClick={() => setActiveVideo(activeVideo === 0 ? 0 : activeVideo - 1)}>
                    <AiOutlineArrowLeft className="mr-2" />
                    Prev Lesson
                </div>


                <div className={`${styles.button} !w-[unset] text-black dark:text-white !min-h-[40px] !py-[unset] ${data.length - 1 === activeVideo && "!cursor-no-drop opacity-[.8]"}`} onClick={() => setActiveVideo(data && data.length - 1 === activeVideo ? activeVideo : activeVideo + 1)}>
                    Next Lesson
                    <AiOutlineArrowRight className="mr-2" />
                </div>
            </div>
            <h1 className="pt-2 text-black dark:text-white text-[25px] font-[600]">{data[activeVideo].title}
            </h1>
            <br />
            <div className="w-full p-4 flex items-center justify-between bg-slate-500 bg-opacity-20 backdrop-blur shadow-[bg-slate-700] rounded shadow-inner">
                {["Overview", "Resource", "Q&A", "Review"].map((text, index) => (
                    <h5 key={index} className={`800px:text-[20px] cursor-pointer ${activeBar === index ? "text-red-500" : "text-black dark:text-white"}`} onClick={() => setActiveBar(index)}>
                        {text}
                    </h5>
                ))

                }

            </div>
            <br />
            {
                activeBar === 0 && (
                    <p className="text-[18px] whitespace-pre-line mb-3 text-black dark:text-white">
                        {data[activeVideo]?.description}

                    </p>
                )
            }
            {
                activeBar === 1 && (
                    <div>
                        {
                            data[activeVideo]?.links?.map((item: any, index: number) => (
                                <div key={index} className="mb-5">
                                    <h2 className="800px:text-[20px] 800px:inline-block text-black dark:text-white">
                                        {item?.title && item?.title + ":"}

                                    </h2>
                                    <a className="inline-block text-[#439c4] 800px:text-[20px] 800px:pl-2 text-black dark:text-white" href={item?.url}>{item?.url}</a>
                                </div>
                            ))
                        }

                    </div>
                )
            }
            {
                activeBar === 2 && (
                    <>
                        <div className="flex w-full">
                            <Image
                                src={user.avatar ? user.avatar.url : ""}
                                alt=""
                                width={50}
                                height={50}
                                className="w-[50px] h-[50px] rounded-full object-cover"
                            />
                            <textarea name="" value={question} onChange={(e) => setQuestion(e.target.value)} id="" cols={40} rows={5} placeholder="Write Your Question ..." className="outline-none bg-transparent ml-3 border border-[#ffffff57] 800px:w-full p-2 rounded w-[90%] 800px:text-[18px] font-Poppins"></textarea>
                        </div>

                        <div className="w-full flex justify-end">
                            <div className={`${styles.button} !w-[120px] !h-[40px] text-[18px] mt-5`}>
                                Submit
                            </div>
                            {/* <div className={`${styles.button} !w-[120px] !h-[40px] text-[18px] mt-5 ${isLoading && "cursor-no-drop"}`} onClick={isLoading ? null : handleCommentSubmit}>
                                Submit
                             
                        </div> */}

                        </div>
                        <br />
                        <br />
                        <div className="w-full h-[1px] bg-[#ffffff3b]">
                            {/* TODO:question replay component */}

                        </div>

                    </>
                )
            }
            {
                activeBar === 3 && (
                    <div className="w-full">
                        <>
                            {
                                !isReviewExists && (
                                    <>
                                        <div className="flex w-full">
                                            <Image
                                                src={user.avatar ? user.avatar.url : "https://imgs.search.brave.com/H-EWHnZrTM7Fp44-1C5jP5MFwCHtU_SEulqH5WtPHDE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA1LzQxLzQ4LzU1/LzM2MF9GXzU0MTQ4/NTUwMF9XNkdOZHdi/R1lsMGVnSndHS0gx/VlJPclFnbDBQR0M0/VS5qcGc"}
                                                alt=""
                                                width={50}
                                                height={50}
                                                className="w-[50px] h-[50px] rounded-full object-cover"
                                            />
                                            <div className="w-full ">
                                                <h5 className="pl-3 text-[20px] font-[500] dark:text-white text-black">Give a Rating <span className="text-red-500">*</span>

                                                </h5>
                                                <div className="flex w-full ml-2 pb-3">
                                                    {
                                                        [1, 2, 3, 4, 5].map((i) => rating >= i ? (
                                                            <AiFillStar key={i} className="mr-1 cursor-pointer" color="rgb(246,186,0)" size={25} onClick={() => setRating(1)} />
                                                        ) : (
                                                            <AiOutlineStar key={i} className="mr-1 cursor-pointer" color="rgb(246,186,0)" size={25} onClick={() => setRating(i)} />
                                                        ))
                                                    }

                                                </div>
                                                <textarea name="" value={review} onChange={(e) => setReview(e.target.value)} id="" cols={40} rows={5} placeholder="Write Your comment ..." className="outline-none bg-transparent 800px:ml-3 border border-[#ffffff57] 800px:w-full p-2 rounded w-[95%] text-[18px] font-Poppins text-black dark:text-white"></textarea>
                                            </div>

                                        </div>
                                        <div className="w-full flex justify-end">
                                            <div className={`${styles.button} !w-[120px] !h-[40px] text-[18px] mt-5 text-black dark:text-white`}>
                                                Submit
                                            </div>
                                            {/* <div className={`${styles.button} !w-[120px] !h-[40px] text-[18px] mt-5 ${isLoading && "cursor-no-drop"}`} onClick={isLoading ? null : handleCommentSubmit}>
                                Submit
                             
                        </div> */}

                                        </div>
                                    </>
                                )
                            }


                        </>

                    </div>
                )
            }
        </div>);
};

export default CourseContentMedia;
