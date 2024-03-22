import { useEditLayoutMutation, useGetHeroDataQuery } from "@/redux/features/layout/layoutApi";
import React, { useEffect, useState } from "react";
import Loader from "../../Loader";
import { styles } from "@/app/styles/styles";
import { AiOutlineDelete } from "react-icons/ai";
import { IoMdAddCircleOutline } from "react-icons/io";
import toast from "react-hot-toast";

type Props = {};

const EditCategories = (props: Props) => {
    const { data, refetch, isLoading } = useGetHeroDataQuery("categories", { refetchOnMountOrArgChange: true });
    const [editLayout, { isSuccess, error }] = useEditLayoutMutation()
    const [categories, setCategories] = useState<any>([]);

    useEffect(() => {
        if (data) {
            setCategories(data?.layout.categories)
        }
        if (isSuccess) {
            refetch()
            toast.success("Category update successfully")
        }

        if (error) {
            if ("data" in error) {
                const errorData = error as any;
                toast.error(errorData?.data?.message)
            }
        }

    }, [data, isSuccess, refetch, , error])

    const handleCategoriesAdd = (id: any, value: string) => {
        setCategories((prevCategory: any) => prevCategory.map((i: any) => (i._id === id ? { ...i, title: value } : i))
        )

    }

    const newCategoriesHandler = () => {
        if (categories[categories.length - 1].title === "") {
            toast.error("Category title cannot be empty")
        } else {
            setCategories((prevCategory: any) => [...prevCategory, { title: "" }])
        }
    }

    // function to check if the FAQ arrays are unchanged
    const areCategoriesIsUnchanged = (originalCategories: any[], newCategories: any[]) => {

        return JSON.stringify(originalCategories) === JSON.stringify(newCategories)

    }

    const isAnyCategoriesTitleEmpty = (categories: any[]) => {

        return categories.some((c) => c.title === "")
    }

    const editCategoriesHandler = async () => {
        if (!areCategoriesIsUnchanged(data.layout.categories, categories) && !isAnyCategoriesTitleEmpty(categories)) {
            await editLayout({
                type: "categories",
                categories
            })
        }
    }

    return (

        <>
            {
                isLoading ? (<Loader />) : (
                    <div className="mt-[120px] text-center">
                        <h1 className={`${styles.title}`}>All Categories</h1>
                        {
                            categories && categories.map((item: any, index: number) => {
                                return (
                                    <div className="p-3" key={index}>
                                        <div className="flex items-center w-full justify-center">
                                            <input type="text" className={`${styles.input} !w-[unset] !border-none !text-[20px]`} value={item.title} onChange={(e) => handleCategoriesAdd(item._id, e.target.value)} placeholder="Enter categories title ..." />
                                            <AiOutlineDelete className="dark:text-white text-black text-[18px] cursor-pointer" onClick={() => { setCategories((prevCategory: any) => prevCategory.filter((i: any) => i._id !== item._id)) }} />

                                        </div>

                                    </div>
                                )
                            })
                        }

                        <br />
                        <br />
                        <div className="w-full flex justify-center">
                            <IoMdAddCircleOutline className="dark:text-white text-black text-[25px] cursor-pointer" onClick={newCategoriesHandler} />


                        </div>
                        <div className={`${styles.button} !w-[100px] !min-h-[40px] dark:text-white text-black bg-[#cccccc34] ${areCategoriesIsUnchanged(data.layout.categories, categories) || isAnyCategoriesTitleEmpty(categories) ? "!cursor-not-allowed" : "!cursor-pointer !bg-[#42d383]"} !rounded absolute bottom-12 right-12`} onClick={areCategoriesIsUnchanged(data.layout.categories, categories) || isAnyCategoriesTitleEmpty(categories) ? () => null : editCategoriesHandler}>
                            Save

                        </div>

                    </div>

                )
            }

        </>
    );
};

export default EditCategories;
