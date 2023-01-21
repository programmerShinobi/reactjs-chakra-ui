import Config from "config/Config";
import axios from "axios";

const ApiLogin = {
    login: async (userEmail, userPassword) => {
        let option = {
            url: Config.base_url + '/auth/login',
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            data: {
                userEmail: userEmail,
                userPassword: userPassword
            }
        }
        try {
            let result = await axios(option);
            return result.data;
        } catch (error) {
            return error.toString();
        }
    }
}

export default ApiLogin;