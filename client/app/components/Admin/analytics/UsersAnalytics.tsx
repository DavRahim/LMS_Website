import React from "react";
import { ResponsiveContainer, XAxis, AreaChart, Tooltip, Area } from "recharts"

import Loader from "../../Loader";
import { useGetUsersAnalyticsQuery } from "@/redux/features/analytics/analyticsApi";
import { styles } from "@/app/styles/styles";

type Props = {
    isDashboard?: boolean
};


// const analyticsData = [
//     { name: "January 2023", count: 300 },
//     { name: "February 2023", count: 8200 },
//     { name: "March 2023", count: 5050 },
//     { name: "April 2023", count: 1200 },
//     { name: "May 2023", count: 2083 },
//     { name: "Jun 2023", count: 300 },
//     { name: "July 2023", count: 8200 },
//     { name: "August 2023", count: 5050 },
//     { name: "Sept 2023", count: 1200 },
//     { name: "Nov 2023", count: 2083 },
//     { name: "December 2023", count: 7230 },

// ]

const analyticsData: any = []

const UsersAnalytics = ({ isDashboard }: Props) => {
    const { data, isLoading } = useGetUsersAnalyticsQuery({})
    data && data.users.last12Months.forEach((item: any) => {
        analyticsData.push({ name: item.month, count: item.count })
    })


    return (<>

        {
            isLoading ? (
                <Loader />

            ) : (
                <div className={`${!isDashboard ? "mt-[50px]" : "mt-[50px] dark:bg-[#111c43] shadow-sm pb-5 rounded-sm"}`}>
                    <div className={`${isDashboard ? "!ml-8 mb-5 " : ""}`}>
                        <h1 className={`${styles.title} ${isDashboard && "!text-{20px] px-5 !text-start"}`}> Users Analytics</h1>
                        {
                            !isDashboard && (
                                <p className={`${styles.label} px-5`}> Last 12 month analytics Data {" "}</p>
                            )
                        }
                    </div>

                    <div className={`w-full ${isDashboard ? "h-[30vh]" : "h-screen"} flex items-center justify-center`}>

                        <ResponsiveContainer width={isDashboard ? "100%" : "90%"} height={!isDashboard ? "50%" : "90%"}>
                            <AreaChart data={analyticsData}
                                margin={{
                                    top: 20,
                                    right: 30,
                                    left: 0,
                                    bottom: 0
                                }}

                            >
                                <XAxis dataKey={"name"}>
                                </XAxis>
                                <Tooltip />
                                <Area type={"monotone"} dataKey={"count"} stroke="#4d62d9" fill="#4d62d9" />
                            </AreaChart>
                        </ResponsiveContainer>

                    </div>


                </div>
            )
        }

    </>);
};

export default UsersAnalytics;
