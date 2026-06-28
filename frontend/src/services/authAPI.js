import axios from "axios";

const API=axios.create({

    baseURL:"http://127.0.0.1:5000"

});

export const signupUser=(data)=>API.post("/signup",data);

export const loginUser=(data)=>API.post("/login",data);