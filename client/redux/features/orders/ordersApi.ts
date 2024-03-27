import { apiSlice } from "../api/apiSlice";


export const ordersApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllOrders: builder.query({
            query: (type) => ({
                url: `get-orders`,
                method: "GET",
                credentials: "include" as const,

            })
        }),
        getStripePublishAbleKey: builder.query({
            query: () => ({
                url: `payment/stripepublishablekey`,
                method: "GET",
                credentials: "include" as const,

            })
        }),
        createPaymentIntent: builder.mutation({
            query: (amount) => ({
                url: `payment`,
                method: "POST",
                body: {
                    amount
                },
                credentials: "include" as const,

            })
        }),
        createOrder: builder.mutation({
            query: ({ courseId, payment_info }) => ({
                url: `create-order`,
                method: "POST",
                body: {
                    courseId,
                    payment_info
                },
                credentials: "include" as const,

            })
        }),

    })
})

export const { useGetAllOrdersQuery, useGetStripePublishAbleKeyQuery, useCreatePaymentIntentMutation, useCreateOrderMutation } = ordersApi