"use client"
import React, { FC, useState } from "react"
import Heading from "./utils/Heading";
import Header from "./components/Header";
import Hero from "./components/Route/Hero";
import { useSelector } from "react-redux";
interface Props { }



const Page: FC<Props> = (props) => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(0);
  const [route, setRoute] = useState("Login")
  const {user} = useSelector((state:any) => state.auth)


  return (
    <div>
      <Heading title="E-Learning"
      description="E-Learning is platform for student to learn and get help form teachers" keywords="Programming,MERN, Redux" />
      <Header open={open} setOpen={setOpen} activeItem={activeItem} setRoute={setRoute} route={route} />
      <Hero />
    </div>
  );
};

export default Page;