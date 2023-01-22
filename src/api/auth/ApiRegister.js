
import Config from "config/Config";
import axios from "axios";

// import jsonStringify from 'json-stringify-safe';

const ApiRegister = {
    register: async (userFullName, userEmail, uspaPasswordhash) => {
        let option = {
            url: Config.base_url + '/auth/register',
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            data: {
                userFullName: userFullName,
                userEmail: userEmail,
                uspaPasswordhash: uspaPasswordhash
            }
        }
        try {
            let result = await axios(option)

            console.info(result.data)
            // console.info(jsonStringify(result));

            return result.data;

        } catch (error) {
            return error.toString();
        }
    }
}

export default ApiRegister;