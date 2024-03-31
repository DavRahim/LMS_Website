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
        getCourseContent: builder.query({
            query: (id) => ({
                url: `get-course-content/${id}`,
                method: "GET",
                credentials: "include" as const
            })
        }),
        addNewQuestion: builder.mutation({
            query: ({ question, courseId, contentId }) => ({
                url: `add-question`,
                method: "PUT",
                body: { question, courseId, contentId },
                credentials: "include" as const
            })
        }),
        addAnswerInQuestion: builder.mutation({
            query: ({ answer, courseId, contentId, questionId }) => ({
                url: `add-answer`,
                method: "PUT",
                body: { answer, courseId, contentId, questionId },
                credentials: "include" as const
            })
        }),
        addReviewInCourse: builder.mutation({
            query: ({ review, rating, courseId }) => ({
                url: `add-review/${courseId}`,
                method: "PUT",
                body: { review, rating },
                credentials: "include" as const
            })
        }),
        addReplyInReview: builder.mutation({
            query: ({ reviewId, comment, courseId }) => ({
                url: `add-reply`,
                method: "PUT",
                body: { reviewId, comment, courseId },
                credentials: "include" as const
            })
        }),

    })
})

export const { useCreateCourseMutation, useGetAllCoursesQuery, useDeleteCourseMutation, useEditCourseMutation, useGetUsersAllCoursesQuery, useGetCoursesDetailsQuery, useGetCourseContentQuery, useAddNewQuestionMutation, useAddAnswerInQuestionMutation, useAddReviewInCourseMutation, useAddReplyInReviewMutation } = courseApi