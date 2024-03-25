import { styles } from "@/app/styles/styles";
import { useGetHeroDataQuery } from "@/redux/features/layout/layoutApi";
import React, { useEffect, useState } from "react";
import { HiMinus, HiPlus } from "react-icons/hi";

type Props = {};

const FAQ = (props: Props) => {
    const { data } = useGetHeroDataQuery("FAQ", {});
    const [question, setQuestion] = useState<any[]>([]);
    const [activeQuestion, setActiveQuestion] = useState(null);

    useEffect(() => {
        if (data) {
            setQuestion(data?.layout?.faq)
        }

    }, [data]);

    const toggleQuestion = (id: any) => {
        setActiveQuestion(activeQuestion === id ? null : id)
    }
    return (
        <div className="w-[90%] 800px:w-[80%] m-auto mb-10">
            <h1 className={`${styles.title} 800px:text-[40px]`}>
                Frequently Asked Question
            </h1>
            <div className="mt-12">
                <dl className="space-y-8">
                    {
                        question.map((q: any) => (
                            <div key={q._id} className={`${q._id !== question[0]?._id && "border-t"} border-gray-200 pt-6`}>

                                <dt className="text-lg">

                                    <button className="flex items-center dark:text-white text-black justify-between w-full text-left focus:outline-none" onClick={() => toggleQuestion(q._id)}>

                                        <span className=" font-medium text-black dark:text-white">
                                            {q.question}
                                        </span>


                                        {/* <input type="text" className={`${styles.input} border-none`} value={q.question} onChange={(e) => handleQuestionChange(q._id, e.target.value)} placeholder="Add your question ..." /> */}

                                        {/* <input type="text" className={`${styles.input} border-none`} value={q.question} onChange={(e: any) => handleQuestionChange(q._id, e.target.value)} placeholder="Add your question ..." /> */}
                                        <span className="ml-6 flex-shrink-0">
                                            {
                                                activeQuestion === q._id ? (<HiMinus className="h-6 w-6" />) : (<HiPlus className="h-6 w-6" />)
                                            }
                                        </span>
                                    </button>
                                </dt>
                                {
                                    activeQuestion === q._id && (
                                        <dd className="mt-2 pr-12">
                                            {/* <input type="text" className={`${styles.input} border-none`} value={q.answer}
                            onChange={(e) => handleAnswerChange(q._id, e.target.value)}
                            placeholder="Add your answer"
                        /> */}
                                            {/* <span className="ml-6 flex-shrink-0">
                            <AiOutlineDelete className="dark:text-white text-black text-[18px] cursor-pointer" onClick={() => setQuestion((prevQuestions) => prevQuestions.filter((item) => item._id !== q._id))} />
                        </span> */}
                                            <p className="text-base font-Poppins text-black dark:text-white">{q.answer}</p>
                                        </dd>
                                    )
                                }
                            </div>
                        ))
                    }
                </dl>

            </div>

        </div>

    );
};

export default FAQ;
