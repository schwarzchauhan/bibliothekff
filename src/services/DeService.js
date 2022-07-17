import customAxios from "../utils/customAxios";
import axios from "axios";
import Cookies from "universal-cookie"
export const cookies = new Cookies()

class UserService {
    constructor() {
        this.domain = process.env.REACT_APP_BACKEND_IP;
    }

    getFlags = () => {
        const url = this.domain + `/api/flagge`;
        return new Promise((resolve, reject) => {
            customAxios.get(url)
                .then((res) => {
                    return resolve(res.data);
                })
                .catch((err) => {
                    console.warn(err);
                    console.warn(err.message);
                    return reject(err);
                })
        })
    }

}

export default UserService;