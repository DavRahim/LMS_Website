import { styles } from "@/app/styles/styles";
import React, { FC } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle"
import toast from "react-hot-toast";

type Props = {
    benefits: { title: string }[];
    setBenefits: (benefits: { title: string }[]) => void;
    prerequisites: { title: string }[];
    setPrerequisites: (prerequisites: { title: string }[]) => void;
    active: number;
    setActive: (active: number) => void
};

const CourseData: FC<Props> = ({ active, benefits, prerequisites, setActive, setBenefits, setPrerequisites }) => {

    const handleBenefitChange = (index: number, value: any) => {
        const updateBenefits = [...benefits];
        updateBenefits[index].title = value
        setBenefits(updateBenefits)
    }
    const handlePrerequisiteChange = (index: number, value: any) => {
        const updatePrerequisite = [...prerequisites];
        updatePrerequisite[index].title = value
        setPrerequisites(updatePrerequisite)
    }

    const handleAddBenefit = () => {
        setBenefits([...benefits, { title: "" }])
    }
    const handleAddPrerequisite = () => {
        setPrerequisites([...prerequisites, { title: "" }])
    }

    const prevButton = () => {
        setActive(active - 1)
    }
    const handleOptions = () => {
        if (benefits[benefits.length - 1]?.title !== "" && prerequisites[prerequisites.length - 1]?.title !== "") {
            setActive(active + 1)
        } else {
            toast.error("please fill the fields for go to next")
        }
    }


    return (
        <div className="w-[80%] m-auto mt-24 block">
            <div >
                <label className={`${styles.label} text-[20px]`} htmlFor="email">
                    What are the benefits for the students in this course?
                </label>
                <br />
                {
                    benefits.map((benefit: any, index: number) => (
                        <input type="text"
                            key={index}
                            name="benefit"
                            placeholder="You will be able to build a full  stack LMS platform..."
                            className={`${styles.input} my-2`}
                            value={benefit.title}
                            onChange={(e) => handleBenefitChange(index, e.target.value)}

                        />

                    ))
                }
                <AddCircleIcon
                    style={{ margin: "10px 0px", cursor: "pointer", width: "38px", color: "#fff" }}
                    onClick={handleAddBenefit}
                />
            </div>
            <br />
            <div >
                <label className={`${styles.label} text-[20px]`} htmlFor="email">
                    What are the Prerequisites for  starting this course?
                </label>
                <br />
                {
                    prerequisites.map((prerequisite: any, index: number) => (
                        <input type="text"
                            key={index}
                            name="prerequisite"
                            placeholder="You need basic knowledge of MERN stack."
                            required
                            className={`${styles.input} my-2`}
                            value={prerequisite.title}
                            onChange={(e) => handlePrerequisiteChange(index, e.target.value)}

                        />

                    ))
                }
                <AddCircleIcon
                    style={{ margin: "10px 0px", cursor: "pointer", width: "38px", color: "#fff" }}
                    onClick={handleAddPrerequisite}
                />
            </div>
            <div className="w-full flex items-center justify-between">
                <div className="w-full 800px:w-[180px] flex items-center justify-center h-[40px] bg-[#37a39a] text-center text-[#fff] rounded mt-8 cursor-pointer"
                    onClick={() => prevButton()}>
                    Prev

                </div>
                <div className="w-full 800px:w-[180px] flex items-center justify-center h-[40px] bg-[#37a39a] text-center text-[#fff] rounded mt-8 cursor-pointer"
                    onClick={() => handleOptions()}>
                    Next

                </div>

            </div>
        </div>

    );
};

export default CourseData;
