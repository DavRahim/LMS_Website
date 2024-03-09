import { apiSlice } from "../api/apiSlice";
import { useRegistration, userLoggedIn } from "./authSlice";




type RegistrationResponse = {
    message: string;
    activationToken: string
}

type RegistrationData = {};

export const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        // endpoint
        register: builder.mutation<RegistrationResponse, RegistrationData>({
            query: (data) => ({
                url: "registration",
                method: "POST",
                body: data,
                credentials: "include" as const
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;
                    // console.log(result);
                    dispatch(
                        // eslint-disable-next-line react-hooks/rules-of-hooks
                        useRegistration({
                            token: result.data.activationToken
                        })
                    )
                } catch (error: any) {
                    console.log(error)
                }
            }
        }),

        activation: builder.mutation({
            query: ({ activation_token, activation_code }) => ({
                url: "active-user",
                method: "POST",
                body: {
                    activation_token, activation_code
                }
            }),
        }),
        login: builder.mutation({
            query: ({ email, password }) => ({
                url: "Login",
                method: "POST",
                body: {
                    email,
                    password
                },
                credentials: "include" as const
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;
                    // console.log(result);
                    dispatch(
                        // eslint-disable-next-line react-hooks/rules-of-hooks
                        userLoggedIn({
                            accessToken: result.data.accessToken,
                            user: result.data.user
                        })
                    )
                } catch (error: any) {
                    console.log(error)
                }
            }

        })

    })
})


export const { useRegisterMutation, useActivationMutation, useLoginMutation } = authApi

