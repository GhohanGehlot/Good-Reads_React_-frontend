import axiosInstance from "config/axiosInstance";
import {toast} from "react-hot-toast";
import { createAsyncThunk , createSlice } from "@reduxjs/toolkit";
import { build } from "vite";


const initialState = {
    isLoggedIn: localStorage.getItem("isLoggedIn") || false,
    username: localStorage.getItem("username") || '',
    token: localStorage.getItem("token") || '',
};

export const signup = createAsyncThunk("auth/signup" , async (data) => {
    try {

        const response = axiosInstance.post("signup" , data);
        toast.promise(response , {
            loading:'Submitting form',
            success: 'Successfully Sign Up',
            error: "Something went wrong",
        })
        
        return await response;
    } catch (error) {
        console.log(error);
        toast.error("Cannot Signup , something went wrong")
    }
});



export const signin = createAsyncThunk("auth/signin" , async (data) => {
    try {

        const response = axiosInstance.post("signin" , data);
        toast.promise(response , {
            loading:'Submitting form',
            success: 'Successfully Sign in',
            error: "Something went wrong",
        })
        
        return await response;
    } catch (error) {
        console.log(error);
        if(error?.response?.data?.err){
            toast.error(error?.response?.data?.err)
        }
        toast.error("Cannot Signin , something went wrong")
    }
});

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(signin.fulfilled, (state , action) => {
            console.log(action);
            if(response?.payload?.data){
                state.isLoggedIn = (response?.payload?.data?.data !== undefined);
                state.username = response?.payload?.data?.data?.username;
                state.token = response?.payload?.data?.data?.token;
                localStorage.setItem("isLoggedIn" , (response?.payload?.data?.data !== undefined) );
                 localStorage.setItem("username" , ( response?.payload?.data?.data?.username) );
                  localStorage.setItem("token" , (response?.payload?.data?.data?.token) );
            }
        })
    }
})

export default authSlice.reducer;