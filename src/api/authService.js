import axios from 'axios';

export const sign_up_user = async (data) => {
    try {
        const response = axios.post("/register/register-new-user" , data);
        return response;
    } catch (error) {
        return error;
    }
}


export const login_user = async (data) => {
    try {
        const response = axios.post("/register/login-user" , data);
        return response;
    } catch (error) {
        return error;
    }
}

