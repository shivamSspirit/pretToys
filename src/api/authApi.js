import axios from "axios"

const baseAuthUrl = '/api/auth'


export const signupHandler = async (userData) => {
    try {
        const response = await axios.post(`${baseAuthUrl}/signup`, userData);
        console.log('res from signup api',response)
        localStorage.setItem("token", response.data.encodedToken);
        return response;
    } catch (error) {
        console.log(error);
    }
};


export const LoginHandler = async (userLogdata) => {
    try {
        const response = await axios.post(`${baseAuthUrl}/login`, userLogdata);
        console.log('res from login api',response)
        localStorage.setItem("token", response.data.encodedToken);
        localStorage.setItem("authUser",response.data.foundUser.name)
        console.log('res',response)
        return response;
    } catch (error) {
        console.log(error);
    }
}