import customAxios from "../utils/customAxios";
import axios from "axios";
import Cookies from "universal-cookie"
export const cookies = new Cookies()

const Bknd = {
    domain: process.env.REACT_APP_BACKEND_IP
}

const McqServicee = {
    getMcqQuiz : () => {
        console.log(cookies.get('authToken'));
        const lang = 'de';
        const noOfMcqs = 10;
        const url = Bknd.domain + `/api/quiz/${lang}/${noOfMcqs}`;
        return new Promise((resolve, reject) => {
            customAxios.get(url)
                .then((res) => {
                    return resolve(res.data);
                })
                .catch((err) => {
                    return reject(err);
                })
        })
    },   
    // submit the mcq quiz, & get total score in response
    submitMcqQuiz : (data) => {
        const url = Bknd.domain + `/api/quiz/submit`;
        return new Promise((resolve, reject) => {
            customAxios.post(url, data)
                .then((res) => {
                    return resolve(res.data);
                })
                .catch((err) => {
                    return reject(err);
                })
        })
    }
}

export default McqServicee
