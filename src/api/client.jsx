import axios from "axios";
import { config } from "./config";
const url = config.api.dev;
const ApiClient  = {
    auth: async (data) => {
        const login  = await axios.post(url + 'auth', {
            email: data.email,
            password: data.password
        })
        return login.data
    },
    register: async (data) => {
        const register = await axios.post(url + 'register', {
            email : data.email,
            password: data.password,
            name: data.name, 
            lastname: data.lastname,
            user: data.user
        })
        return register.data
    },
    Asamblea: {
        escudo_comunal: async (data) => {
            const escudo  = await axios.post(url + 'asamblea/escudo', {
                elemento: data.elemento,
                porque_identifica: data.porque_identifica
            })
            return escudo.data
        }
    }
}
export default ApiClient