import Config from "config/Config";
import axios from "axios";

const ApiGetUsers = {
    getUsers: async () => {
        let option = {
            url: Config.base_url + '/users',
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        }
        try {
            let result = await axios(option);
            return result.data
        } catch (error) {
            return error.toString();
        }
    }
}

export default ApiGetUsers;