import axios from "axios";
import { config } from "./config";
const url = config.api.dev;
const ApiClient  = {
    auth: async (data) => {
        const login  = await axios.post(url + 'auth', {
            email: data.email,
            password: data.password
        })
        console.log(login.data)
        return login.data
    }
}
export default ApiClient