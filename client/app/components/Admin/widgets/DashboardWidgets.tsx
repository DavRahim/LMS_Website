import React, { FC } from "react";
import UsersAnalytics from "../analytics/UsersAnalytics";
import { BiBorderLeft } from "react-icons/bi";
import { PiUsersFourLight } from "react-icons/pi";
import { Box, CircularProgress } from "@mui/material";
import OrdersAnalytics from "../analytics/OrdersAnalytics";
import AllInvoices from "../order/AllInvoices";

type Props = {
    open?: boolean;
    value?: number
};

const CircularProgressWithLabel: FC<Props> = ({ open, value }) => {

    return (

        <Box sx={{ position: "relative", display: "inline-flex" }}>
            <CircularProgress
                variant="determinate"
                value={value}
                size={45}
                color={value && value > 90 ? "info" : "error"}
                thickness={4}
                style={{ zIndex: open ? -1 : 1 }}
            />
            <Box sx={{
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                position: "absolute",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }
            }>
            </Box>
        </Box>
    )


}


const DashboardWidgets: FC<Props> = ({ open }: Props) => {
    return (
        <div className="mt-[30px] min-h-screen">
            <div className="grid grid-cols-[75%,25%]">
                <div className="p-8">
                    <UsersAnalytics isDashboard={true} />
                </div>

                <div className="pt-[80px] pr-8">
                    <div className="w-full dark:bg-[#111C43] rounded-sm shadow">
                        <div className="flex items-center p-5 justify-between">
                            <div className="">
                                <BiBorderLeft className="dark:text-[#45cba0] text-[#000] text-[30px]" />
                                <h5 className="pt-2 font-Poppins dark:text-[#fff] text-black text-[20px]">128

                                </h5>
                                <h5 className="py-2 font-Poppins dark:text-[#45cbab] text-black text-[20px] font-[400]">
                                    Sales Obtaired

                                </h5>

                            </div>
                            <div>
                                <CircularProgressWithLabel value={100} open={open} />
                                <h5 className="text-center pt-4 dark:text-[#fff] text-black"> 120%
                                </h5>
                            </div>

                        </div>

                    </div>

                    <div className="w-full dark:bg-[#111C43] rounded-sm shadow my-8">
                        <div className="flex items-center p-5 justify-between">
                            <div className="">
                                <PiUsersFourLight className="dark:text-[#45cbab] text-[#000] text-[30px]" />
                                <h5 className="pt-2 font-Poppins dark:text-[#fff] text-black text-[20px]">458

                                </h5>
                                <h5 className=" py-2 font-Poppins dark:text-[#45cbab] text-black text-[20px] font-[400]">New User

                                </h5>

                            </div>
                            <div className="">
                                <CircularProgressWithLabel value={100} open={open} />

                                <h5 className="text-center pt-4 dark:text-[#fff] text-black"> 150%
                                </h5>


                            </div>

                        </div>

                    </div>

                </div>

            </div>


            <div className="grid grid-cols-[65%,35%] mt-[-28px]">
            <div className="dark:bg-[#11c43] mt-[38px] w-[90%] h-[40vh] shadow-sm m-auto">
                <OrdersAnalytics isDashboard={true} />
            </div>
            <div className="p-5">
                <h5 className="dark:text-[#fff] text-black text-[20px] font-[400] font-Poppins pb-3">
                    Recent Transitions
                </h5>
                <AllInvoices isDashboard={true} />
            </div>
        </div>
    </div>
    );
};

export default DashboardWidgets;
