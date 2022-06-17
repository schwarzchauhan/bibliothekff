import customAxios from "../utils/customAxios";

class McqService {
    constructor() {
        this.domain = process.env.REACT_APP_BACKEND_IP;
    }
    // https://stackoverflow.com/questions/53385477/using-async-await-still-returns-undefined
    saveMcq = (data) => {
        // console.log(data, typeof data);
        const url = this.domain + "/api/mcq/save";
        return new Promise((resolve, reject) => {
            customAxios.post(url, data)
                .then((res) => {
                    // {"quesn":"june252","choices":["first choice","second choice","third choice","fourth choice"],"ans":"fourth choice","_id":"62b710fce6e409d868920367","__v":0}
                    return resolve(res.data);
                })
                .catch((err) => {
                    return reject(err);
                })
        })
    }
}

export default McqService;