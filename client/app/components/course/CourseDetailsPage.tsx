"use client"
import { useGetCoursesDetailsQuery } from "@/redux/features/courses/coursesApi";
import React, { useEffect, useState } from "react";
import Loader from "../Loader"
import Heading from "@/app/utils/Heading";
import Header from "../Header";
import Footer from "../Footer";
import CourseDetails from "./CourseDetails";
import { useCreatePaymentIntentMutation, useGetStripePublishAbleKeyQuery } from "@/redux/features/orders/ordersApi";
import {loadStripe} from "@stripe/stripe-js"

type Props = {
  id: string
};

const CourseDetailsPage = ({ id }: Props) => {

  const [route, setRoute] = useState("Login");
  const [open, setOpen] = useState(false)

  const { data, isLoading } = useGetCoursesDetailsQuery(id);
  const {data:config} = useGetStripePublishAbleKeyQuery({});
  const [createPaymentIntent, { data: createPaymentIntentData} ] = useCreatePaymentIntentMutation()


  const [stripePromise, setStripePromise] = useState<any>(null);
  const [clientSecret, setClientSecret] = useState("");


  useEffect(()=>{
    if(config){
      const publishablekey = config?.publishablekey;
      setStripePromise(loadStripe(publishablekey))
    }
    if(data){
      const amount = Math.round(data.course.price * 100)
      createPaymentIntent(amount)
    }

  }, [config, data, createPaymentIntent])

  useEffect(()=>{
    if (createPaymentIntentData){
      setClientSecret(createPaymentIntentData?.client_secret)
    }


  }, [createPaymentIntentData])


  


  return (
    <>
      {
        isLoading ? (
          <Loader />
        ) : (
          <div>
            <Heading title="E-Learning"
              description="E-Learning is platform for student to learn and get help form teachers" keywords="Programming,MERN, Redux" />
            <Header open={open} setOpen={setOpen} activeItem={1} setRoute={setRoute} route={route} />
            {
              stripePromise && (
                  <CourseDetails data={data} stripePromise={stripePromise} clientSecret={clientSecret}/>
              )
            }
           

            <Footer />

          </div>
        )
      }

    </>

  );
};

export default CourseDetailsPage;
