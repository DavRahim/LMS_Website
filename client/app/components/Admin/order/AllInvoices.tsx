import { useGetAllCoursesQuery } from "@/redux/features/courses/coursesApi";
import { useGetAllOrdersQuery } from "@/redux/features/orders/ordersApi";
import { useGetAllUsersQuery } from "@/redux/features/user/userApi";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { format } from "timeago.js";
import Loader from "../../Loader";
import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

type Props = {
    isDashboard?: boolean
};

const AllInvoices = ({ isDashboard }: Props) => {

    const { theme, setTheme } = useTheme();
    const { data, isLoading } = useGetAllOrdersQuery({});
    const { data: usersData } = useGetAllUsersQuery({});
    const { data: coursesData } = useGetAllCoursesQuery({});

    const [orderData, setOrderData] = useState<any>([])

    useEffect(() => {

        if (data) {
            const temp = data.orders.map((item: any) => {
                const user = usersData?.users?.find((user: any) => user?._id === item?.userId)
                const course = coursesData?.courses?.find((course: any) => course._id === item.courseId)
                return {
                    ...item,
                    userName: user?.name,
                    userEmail: user?.email,
                    title: course?.name,
                    price: "$" + course?.price
                }
            })
            setOrderData(temp)
        }

    }, [data, usersData, coursesData]);

    const columns: any = [
        { field: "id", headerName: "ID", flex: 0.3 },
        { field: "userName", headerName: "Name", flex: isDashboard ? 0.6 : 0.5 },
        ...(isDashboard ? [] : [
            { field: "userEmail", headerName: "Email", flex: 1 },
        ]),
        { field: "price", headerName: "Price", flex: 0.5 },
        ...(isDashboard ? [
            { field: "created_at", headerName: "Created At", flex: 0.5 }
        ] : [
            {
                field: " ",
                headerName: "Email",
                flex: 0.2,
                renderCell: (params: any) => {
                    return (
                        <a href={`mailto:${params.row.userEmail}`}>
                            <AiOutlineExclamationCircle className="dark:text-white text-black" size={20} />
                        </a>
                    )
                }
            }
        ])

    ];

    // const rows: any = [
    //     // mock data for testing;
    //     {
    //         id: "124894389894",
    //         userName: "Abdur Rahim",
    //         userEmail: "abc@gmail.com",
    //         title: "React js course",
    //         price: "$3939",
    //         created_at: "2 days ago"

    //     },
    //     {
    //         id: "124894389894",
    //         userName: "Abdur Rahim",
    //         userEmail: "abc@gmail.com",
    //         title: "React js course",
    //         price: "$3939",
    //         created_at: "2 days ago"

    //     },
    //     {
    //         id: "124894389894",
    //         userName: "Abdur Rahim",
    //         userEmail: "abc@gmail.com",
    //         title: "React js course",
    //         price: "$3939",
    //         created_at: "2 days ago"

    //     },
    //     {
    //         id: "124894389894",
    //         userName: "Abdur Rahim",
    //         userEmail: "abc@gmail.com",
    //         title: "React js course",
    //         price: "$3939",
    //         created_at: "2 days ago"

    //     },
    //     {
    //         id: "124894389894",
    //         userName: "Abdur Rahim",
    //         userEmail: "abc@gmail.com",
    //         title: "React js course",
    //         price: "$3939",
    //         created_at: "2 days ago"

    //     },
    //     {
    //         id: "124894389894",
    //         userName: "Abdur Rahim",
    //         userEmail: "abc@gmail.com",
    //         title: "React js course",
    //         price: "$3939",
    //         created_at: "2 days ago"

    //     },
    //     {
    //         id: "124894389894",
    //         userName: "Abdur Rahim",
    //         userEmail: "abc@gmail.com",
    //         title: "React js course",
    //         price: "$3939",
    //         created_at: "2 days ago"

    //     },
    //     {
    //         id: "124894389894",
    //         userName: "Abdur Rahim",
    //         userEmail: "abc@gmail.com",
    //         title: "React js course",
    //         price: "$3939",
    //         created_at: "2 days ago"

    //     },
    //     {
    //         id: "124894389894",
    //         userName: "Abdur Rahim",
    //         userEmail: "abc@gmail.com",
    //         title: "React js course",
    //         price: "$3939",
    //         created_at: "2 days ago"

    //     },
    //     {
    //         id: "124894389894",
    //         userName: "Abdur Rahim",
    //         userEmail: "abc@gmail.com",
    //         title: "React js course",
    //         price: "$3939",
    //         created_at: "2 days ago"

    //     },
    //     {
    //         id: "124894389894",
    //         userName: "Abdur Rahim",
    //         userEmail: "abc@gmail.com",
    //         title: "React js course",
    //         price: "$3939",
    //         created_at: "2 days ago"

    //     },
    // ]
    const rows: any = [
    ]



    orderData && orderData?.forEach((item: any) => {
        rows.push({
            id: item._id,
            userName: item.userName,
            userEmail: item.userEmail,
            title: item.title,
            price: item.price,
            created_at: format(item.createdAt),
        })
    })


    return (
        <div className={!isDashboard ? "mt-120px" : "mt-[8px]"}>
            {isLoading ? (
                <Loader />
            ) : (
                <Box m={isDashboard ? "0" : "40px"}>
                    <Box
                        m={isDashboard ? "0" : "40px 0 0 0"}
                        height={isDashboard ? "35vh" : "90vh"}
                        overflow={"hidden"}
                        sx={{
                            "& .MuiDataGrid-root": {
                                border: "none",
                                outline: "none"
                            },
                            "& .css-pqjvzy-MMuiSvgIcon-root-MuiSelect-icon": {
                                color: theme === "dark" ? "#fff" : "#000"
                            },
                            "& .MuiDataGrid-sortIcon": {
                                color: theme === "dark" ? "#fff" : "#000"
                            },
                            "& .MuiDataGrid-row": {
                                color: theme === "dark" ? "#fff" : "#000",
                                borderBottom: theme === "dark" ? "1px solid #ffffff38!important" : "1px solid #ccc!important"
                            },
                            "& .MuiTablePagination-root": {
                                color: theme === "dark" ? "#fff" : "#000",
                            },
                            "& .MuiDataGrid-cell": {
                                borderBottom: "none!important"
                            },
                            "& .name-column-cell": {
                                color: theme === "dark" ? "#fff" : "#000",
                            },
                            "& .MuiDataGrid-columnHeaders": {
                                backgroundColor: theme === "dark" ? "#3e4396" : "#A4A9FC",
                                borderBottom: "none",
                                color: theme === "dark" ? "#fff" : "#000",
                            },
                            "& .MuiDataGrid-virtualScroller": {
                                backgroundColor: theme === "dark" ? "#1f2a40" : "#f2f0f0"
                            },
                            "& .MuiDataGrid-footerContainer": {
                                backgroundColor: theme === "dark" ? "#3e4396" : "#A4A9FC",
                                borderTop: "none",
                                color: theme === "dark" ? "#fff" : "#000",

                            },
                            "& .MuiCheckbox-root": {
                                color: theme === "dark" ? "#b7ebde !important" : "#000 !important",
                            },
                            "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                                color: "#fff!important"
                            }
                        }}
                    >
                        <DataGrid
                            checkboxSelection={isDashboard ? false : true} rows={rows} columns={columns} components={isDashboard ? {} : { Toolbar: GridToolbar }} />

                    </Box>

                </Box>
            )}
        </div>
    );
};

export default AllInvoices;
