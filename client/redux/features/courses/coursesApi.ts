import { apiSlice } from "../api/apiSlice";

export const courseApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        createCourse: builder.mutation({
            query: (data) => ({
                url: "create-course",
                method: "POST",
                body: data,
                credentials: "include" as const
            })
        }),

        getAllCourses: builder.query({
            query: (data) => ({
                url: "get-admin-Courses",
                method: "GET",
                credentials: "include" as const
            })
        }),
        deleteCourse: builder.mutation({
            query: (id) => ({
                url: `deleted-course/${id}`,
                method: "DELETE",
                credentials: "include" as const
            })
        }),
        editCourse: builder.mutation({
            query: ({ id, data }) => ({
                url: `edit-course/${id}`,
                method: "PUT",
                body: data,
                credentials: "include" as const
            })
        }),
        getUsersAllCourses: builder.query({
            query: () => ({
                url: "get-courses",
                method: "GET",
                credentials: "include" as const
            })
        }),
        getCoursesDetails: builder.query({
            query: (id) => ({
                url: `get-course/${id}`,
                method: "GET",
                credentials: "include" as const
            })
        }),

    })
})

export const { useCreateCourseMutation, useGetAllCoursesQuery, useDeleteCourseMutation,useEditCourseMutation, useGetUsersAllCoursesQuery,useGetCoursesDetailsQuery } = courseApi