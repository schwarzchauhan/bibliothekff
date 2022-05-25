import axios from "axios";

const Bknd = {
    domain: process.env.REACT_APP_BACKEND_IP
}

const McqServicee = {
    getMcqQuiz : () => {
        const lang = 'de';
        const noOfMcqs = 10;
        const url = Bknd.domain + `/api/quiz/${lang}/${noOfMcqs}`;
        return new Promise((resolve, reject) => {
            axios.get(url)
                .then((res) => {
                    return resolve(res.data);
                })
                .catch((err) => {
                    if (err.response && err.response.data && err.response.data.type == 'KnownError') {
                        err.message = err.response.data.message;
                    } else {
                        err.message = 'Oops! Unexpected Error occurred.'
                    }
                    return reject(err);
                })
        })
    }
}

export default McqServicee
