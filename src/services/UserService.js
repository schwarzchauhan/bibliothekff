import axios  from "axios";

class UserService {
    constructor(){
        this.domain = process.env.REACT_APP_BACKEND_IP;
    }
    // https://stackoverflow.com/questions/53385477/using-async-await-still-returns-undefined
    loginRequest = (data) => {
        // console.log(data, typeof data);
        const url = this.domain  + "/api/user/login";
        return new Promise(resolve => {
          axios.post(url, data)
          .then( (res) => {
            // res.data  {"_id": "61f6538cdfef69387709ec03","email": "harshchauhan0994@gmail.com","password": "4321","name": "harsh chauhan"}
            resolve(res.data);
          } )
          .catch((err)=> {
            console.warn(err);
            console.warn(err.message);
            resolve(err);
          })

        })
    }
}

export default UserService;