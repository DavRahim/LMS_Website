import { styles } from "@/app/styles/styles";
import { useEditLayoutMutation, useGetHeroDataQuery } from "@/redux/features/layout/layoutApi";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineCamera } from "react-icons/ai";

type Props = {};

const EditHero = (props: Props) => {
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("")

  const { data, refetch } = useGetHeroDataQuery("banner", { refetchOnMountOrArgChange: true });
  const [editLayout, { isLoading, isSuccess, error }] = useEditLayoutMutation()

  useEffect(() => {


    if (data) {
      setTitle(data?.layout?.banner?.title)
      setSubTitle(data?.layout?.banner?.subTitle)
      setImage(data?.layout?.banner?.image?.url)

    }
    if (isSuccess) {
      refetch()
      toast.success("Hero update success")
    }

    if (error) {
      if ("data" in error) {
        const errorData = error as any;
        toast.error(errorData?.data?.message)
      }
    }

  }, [data, isSuccess, error, refetch])


  const handleChange = (e: any) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        if (reader.readyState === 2) {
          setImage(reader.result as string)
        }
      }

      reader.readAsDataURL(file)
    }

    // const file = e.target.files[0];
    // if (file) {
    //   const reader = new FileReader();
    //   reader.onload = (e: any) => {
    //     if (reader.readyState === 2) {
    //       setImage(e.target as string)
    //     }
    //   }
    //   reader.readAsDataURL(file);
    // }

  }

  const handleEdit = async (e: any) => {
    await editLayout({
      type: "banner",
      image,
      title,
      subTitle
    })

  }

  return (<>
    <div className="w-full 1000px:flex items-center">
      <div className="absolute top-[500px] 1000px:top-[unset] 1500px:h-[700px] 1500px:w-[700px] 1100px:h-[500px] 1100px:w-[500px] h-[50vh] hero_animation rounded-[50%] 1100px:left-[18rem] 1500px:left-[21rem]"></div>

      <div className="1000px:w-[40%] flex 1000px:min-h-screen justify-end pt-[70px] 1000px:pt-0 z-10">
        <div className=" relative flex items-center justify-end">
          <img src={image} alt="" className="object-contain 1100px:max-w-[90%] 1500px:max-w-[85%] h-[auto] z-[10]" />
          <input type="file" name="" id="banner" accept="image/*" onChange={handleChange}
            className="hidden" />
          <label htmlFor="banner" className="absolute bottom-40 right-0 z-20">
            <AiOutlineCamera className="dark:text-white text-black text-[18px] cursor-pointer" />
          </label>
        </div>
      </div>

      <div className="1000px:w-[60%] ml-5 flex flex-col items-center 1000px:mt-[8px] text-center 1000px:text-left mt-[150px]">
        <textarea className="dark:text-white text-[#000000c7] text-[30px] px-3 w-full !bg-transparent 1000px:text-[50px] font-[600] font-Josefin py-1 1000px:leading-[75px] 1500px:w-[80%]  1100px:!w-[78%]" name="" id="" rows={3} placeholder="Improve Your Online Learning Experience Better Instantly" value={title} onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <textarea value={subTitle} onChange={(e) => setSubTitle(e.target.value)} className="dark:text-[#edfff4] !bg-transparent text-[#000000ac] font-Josefin font-[600] text-[18px] 1500px:!w-[55%] 1100px:!w-[78%]" placeholder=" We have 48k+ Online Course & 500k+ Online register student. find your desired course from them." />
        <br />
        <br />

      </div>
      <div className={`${styles.button} !w-[180px] !min-h-[40px] !h-[40px] dark:text-white text-black bg-[#cccccc34] ${data?.layout?.banner?.title !== title || data?.layout?.banner?.subTitle !== subTitle || data?.layout?.banner?.image?.url !== image ? "!cursor-pointer !bg-[#42d383]" : "!cursor-not-allowed"} !rounded absolute bottom-12 right-12`}
        onClick={data?.layout?.banner?.title !== title || data?.layout?.banner?.subTitle !== subTitle || data?.layout?.banner?.image?.url !== image ? handleEdit : () => null}
      >

        Save
      </div>
    </div>

  </>);
};

export default EditHero;
