import { useEditLayoutMutation, useGetHeroDataQuery } from "@/redux/features/layout/layoutApi";
import React, { useEffect, useState } from "react";
import Loader from "../../Loader";
import { styles } from "@/app/styles/styles";
import { AiOutlineDelete } from "react-icons/ai";

type Props = {};

const EditCategories = (props: Props) => {
    const { data, refetch, isLoading } = useGetHeroDataQuery("categories", { refetchOnMountOrArgChange: true });
    const [editLayout, { isSuccess, error }] = useEditLayoutMutation()
    const [categories, setCategories] = useState<any>([]);

    useEffect(() => {
        if (data) {
            setCategories(data?.layout.categories)
        }

    }, [data])

    const handleCategoriesAdd = (id: any, value: string) => {
        setCategories((prevCategory: any) => prevCategory.map((i: any) => (i._id === id ? { ...i, title: value } : i))
        )

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

                    </div>

                )
            }

        </>
    );
};

export default EditCategories;
