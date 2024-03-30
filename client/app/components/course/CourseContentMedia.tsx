import React, { useEffect, useState } from "react";
import CoursePlayer from "../Admin/course/CoursePlayer";
import { styles } from "@/app/styles/styles";
import { AiFillStar, AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineStar } from "react-icons/ai";
import Image from "next/image";
import toast from "react-hot-toast";
import { useAddAnswerInQuestionMutation, useAddNewQuestionMutation, useAddReplyInReviewMutation, useAddReviewInCourseMutation, useGetCoursesDetailsQuery } from "@/redux/features/courses/coursesApi";
import { format } from "timeago.js";
import { BiMessage } from "react-icons/bi";
import { VscVerifiedFilled } from "react-icons/vsc";
import Ratings from "@/app/utils/Ratings";

type Props = {
    data: any;
    activeVideo: number;
    setActiveVideo: (activeVideo: number) => void;
    user: any
    id: String
    refetch: any
};

const CourseContentMedia = ({ activeVideo, data, setActiveVideo, user, id, refetch }: Props) => {

    const [activeBar, setActiveBar] = useState(0)
    const [question, setQuestion] = useState("");
    const [review, setReview] = useState("");
    const [rating, setRating] = useState(0)
    const [answer, setAnswer] = useState("");
    const [questionId, setQuestionId] = useState("");
    const [isReviewReply, setIsReviewReply] = useState(false);
    const [reply, setReply] = useState("");
const [reviewId, setReviewId] =useState("")



    const {data:courseData, refetch:courseRefetch} = useGetCoursesDetailsQuery(id, {refetchOnMountOrArgChange: true})

    const course = courseData?.course;


    const [addNewQuestion, { isSuccess, error, isLoading: questionCreationLoading }] = useAddNewQuestionMutation();
    const [addAnswerInQuestion, { isSuccess: answerSuccess, error: answerError, isLoading: answerCreationLoading }] = useAddAnswerInQuestionMutation();

    const [addReviewInCourse, { isSuccess: reviewSuccess, error: reviewError, isLoading: reviewCreationLoading }] = useAddReviewInCourseMutation();

    const [addReplyInReview, {isSuccess:replySuccess, error: replyError, isLoading:replyCreationLoading }] = useAddReplyInReviewMutation()

    const isReviewExists = course?.reviews?.find((item: any) => item.user._id === user._id);

    const handleQuestion = () => {
        if (question.length === 0) {
            toast.error("Question can't be empty")
        } else {
            console.log({ question, courseId: id, contentId: data[activeVideo]._id });
            addNewQuestion({ question, courseId: id, contentId: data[activeVideo]._id })
        }
    }


    useEffect(() => {
        if (isSuccess) {
            setQuestion("");
            refetch()
            toast.success("Question added successfully")
        }
        if (answerSuccess) {
            setAnswer("");
            refetch()
            toast.success("Question added successfully")
        }
        if (error) {
            if ("data" in error) {
                const errorMessage = error as any;
                toast.error(errorMessage.data.message);
            }
        }
        if (answerError) {
            if ("data" in answerError) {
                const errorMessage = answerError as any;
                toast.error(errorMessage.data.message);
            }
        }
        if (reviewSuccess) {
            setReview("")
            setRating(1);
            courseRefetch()
            toast.success("Review added success")
        }
        if (reviewError) {
            if ("data" in reviewError) {
                const errorMessage = reviewError as any;
                toast.error(errorMessage.data.message);
            }
        }
        if(replySuccess){
            setReply("")
            courseRefetch();
            toast.success("Reply added successfully")
        }
  if (replyError) {
      if ("data" in replyError) {
          const errorMessage = replyError as any;
        toast.error(errorMessage.data.message);
    }
}


    }, [isSuccess, error, refetch, answerError, answerSuccess, reviewError, reviewSuccess, courseRefetch, replyError, replySuccess]);

    const handleAnswerSubmit = () => {
        addAnswerInQuestion({ answer, courseId: id, contentId: data[activeVideo]._id, questionId })
        console.log({ answer, courseId: id, contentId: data[activeVideo]._id, questionId });
    }

    const handleReviewSubmit = async () => {
        if (review.length === 0) {
            toast.error("Review can't be empty")
        } else {
            addReviewInCourse({ review, rating, courseId: id })
        }
    }


    const handleReviewReplySubmit =() => {
        if(!replyCreationLoading){
            if (reply === "") {
                toast.error("Reply can't be empty")
            } else {
                addReplyInReview({ comment: reply, courseId: id, reviewId })
            }

        }
   
        
      
    }

    return (
        <div className="w-[95%] 800px:w-[86%] py-4 m-auto h-[300vh]">
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
                            <div className={`${styles.button} !w-[120px] !h-[40px] text-[18px] mt-5 ${questionCreationLoading && "cursor-no-drop"}`} onClick={questionCreationLoading ? () => { } : handleQuestion}>
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
                            <CommentReply
                                data={data}
                                activeVideo={activeVideo}
                                answer={answer}
                                setAnswer={setAnswer}
                                handleAnswerSubmit={handleAnswerSubmit}
                                user={user}
                                setQuestionId={setQuestionId}
                                answerCreationLoading={answerCreationLoading}

                            />

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
                                            <div className={`${styles.button} !w-[120px] !h-[40px] text-[18px] mt-5 text-black dark:text-white ${reviewCreationLoading && "cursor-not-allowed"}`} onClick={reviewCreationLoading ? () => { } : handleReviewSubmit}>
                                                Submit
                                            </div>
                                            {/* <div className={`${styles.button} !w-[120px] !h-[40px] text-[18px] mt-5 ${isLoading && "cursor-no-drop"}`} onClick={isLoading ? null : handleCommentSubmit}>
                                Submit
                             
                        </div> */}

                                        </div>
                                    </>
                                )
                            }

                            <br />
    <div className="w-full h-[1px] bg-[#ffffff3b] text-black dark:text-white">
    <div className="w-full">
        {
            course?.reviews && [...course?.reviews].reverse().map((item:any, index:number) => (
                <div className="w-full my-5" key={index}>
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
                            <Ratings rating={item?.rating}/>
                            <p>
                                {item.comment}
                            </p>
                            <small className="text-[#ffffff83]">

                                {format(item.createdAt)} *

                            </small>

                        </div>
                            
                    </div>
               {
                user.role === "admin" && (
                    <span className={`${styles.label} !ml-10 cursor-pointer`}
                    onClick={() =>{ 
                        setReviewId(item._id),
                        setIsReviewReply(true)}}>
                        Add Reply
                    </span>
                )
               }  
                    {
                        isReviewReply && (
                            <div className="w-full flex relative">
                                <input
                                    placeholder="Enter your reply ... "
                                    value={reply}
                                    onChange={(e)=>setReply(e.target.value)}
                                    type="text" className={`block 800px:mt-2 outline-none bg-transparent border-b border-[#fff] p-[5px] w-[95%]`} />
                                    <button  onClick={handleReviewReplySubmit} type="submit" className="absolute right-0 bottom-1"> Submit</button>
                            </div>
                            

                        )
                    }
                    {
                        item.commentReplies.map((i:any, index:number) => (
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
</div>    
     


                        </>

                    </div>
                )
            }
        </div>);
};


const CommentReply = ({ data, activeVideo, answer, setAnswer, handleAnswerSubmit, user, setQuestionId, answerCreationLoading }: any) => {
    return (

        <>
            <div className="w-full my-3">
                {
                    data[activeVideo].questions.map((item: any, index: number) => (
                        <CommentItem
                            key={index}
                            data={data}
                            activeVideo={activeVideo}
                            item={item}
                            setAnswer={setAnswer}
                            answer={answer}
                            setQuestionId={setQuestionId}
                            handleAnswerSubmit={handleAnswerSubmit}
                            answerCreationLoading={answerCreationLoading}
                        />
                    ))
                }
            </div>

        </>
    )
}


const CommentItem = ({ data, setQuestionId, item, answer, setAnswer, handleAnswerSubmit, answerCreationLoading }: any) => {
    const [replayActive, setReplayActive] = useState(false)
    return (
        <>
            <div className="my-4">
                <div className="flex mb-2">
                    <div className="w-[50px] h-[50px]">
                        <Image
                            src={item?.user.avatar ? item?.user.avatar.url : ""}
                            alt=""
                            width={50}
                            height={50}
                            className="w-[50px] h-[50px] rounded-full object-cover"
                        />
                    </div>
                    {/* <div className="w-[50px] h-[50px]">
                        <div className="w-[50px] h-[50px] bg-slate-600 rounded-[50px] flex items-center justify-center cursor-pointer">
                            <h1 className="uppercase text-[18px]">
                                {item?.user?.name.slice(0, 2)}
                            </h1>

                        </div>
                </div> */}
                    <div className="pl-3 text-black dark:text-white">
                        <h5 className="text-[20px]">
                            {item?.user.name}

                        </h5>
                        <p>
                            {item?.question}
                        </p>
                        <small className="text-[#ffffff83]">{!item.createdAt ? "" : format(item?.createdAt)} *
                        </small>

                    </div>
                </div>
                <div className="w-full flex">
                    <span className="800px:pl-16 text-black dark:text-[#ffffff83] cursor-pointer mr-2" onClick={() => { setReplayActive(!replayActive), setQuestionId(item._id) }}>
                        {!replayActive ? item?.questionReplies.length !== 0 ? "All Replies" : "Add Replay" : "Hide Replies"}

                    </span>
                    <BiMessage size={20} className="cursor-pointer text-black dark:text-white" fill="#ffffff83" />
                    <span className="pl-1 mt-[-4px] cursor-pointer text-black dark:text-white text-[#ffffff83]">
                        {item.questionReplies.length}
                    </span>
                </div>
                {
                    replayActive && (
                        <>
                            {
                                item.questionReplies.map((item: any, index: number) => (
                                    <div key={index} className="w-full flex 800px:ml-16 my-5 text-black dark:text-white">
                                        <div className="w-[50px] h-[50px]">
                                            <Image
                                                src={item?.user.avatar ? item?.user.avatar.url : ""}
                                                alt=""
                                                width={50}
                                                height={50}
                                                className="w-[50px] h-[50px] rounded-full object-cover"
                                            />
                                        </div>
                                        <div className="pl-2">
                                            <h5 className="text-[20px]">
                                                <div className="flex items-center">
                                                    {item?.user?.name} {item.user.role && <VscVerifiedFilled className="text-blue-700 ml-2" size={20} />}

                                                </div>

                                            </h5>
                                            <p className="">{item?.answer}

                                            </p>
                                            <small className="text-[#fffffff83]">
                                                {format(item?.createdAt)}
                                            </small>
                                        </div>
                                    </div>
                                ))
                            }
                            <>
                                <div className="w-full flex relative text-black dark:text-white">
                                    <input type="text" placeholder="Enter your answer ......" value={answer} onChange={(e: any) => setAnswer(e.target.value)}
                                        className={`block 800px:ml-12 mt-2 outline-none bg-transparent border-b dark:border-[#fff] border-[#00000027] p-[5px] w-[95%] ${answer === "" || answerCreationLoading && "cursor-not-allowed"}`} />
                                    <button className="absolute right-0 bottom-1" type="submit" onClick={handleAnswerSubmit} disabled={answer === "" || answerCreationLoading}>
                                        Submit
                                    </button>
                                </div>

                            </>
                        </>
                    )
                }
            </div>

        </>
    )

}




export default CourseContentMedia;
