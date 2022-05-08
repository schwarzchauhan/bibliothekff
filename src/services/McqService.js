import axios  from "axios";

class McqService {
    constructor(){
        this.domain = process.env.REACT_APP_BACKEND_IP;
    }
    // https://stackoverflow.com/questions/53385477/using-async-await-still-returns-undefined
    saveMcq = (data) => {
        // console.log(data, typeof data);
        const url = this.domain  + "/api/mcq/save";
        return new Promise((resolve,reject) => {
          axios.post(url, data)
          .then( (res) => {
            // res.data  {"_id": "61f6538cdfef69387709ec03","email": "harshchauhan0994@gmail.com","password": "4321","name": "harsh chauhan"}
            return resolve(res.data);
          })
          .catch((err)=> {
            if(err.response && err.response.data && err.response.data.type == 'KnownError'){
              err.message = err.response.data.message;
            }else {
                err.message = 'Oops! Unexpected Error occurred.'
            }
            return reject(err);
          })
        })
    }
}

export default McqService;