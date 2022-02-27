import axios  from "axios";

class UserService {
    constructor(){
        this.domain = "http://127.0.0.1:1337/api";
    }
    loginRequest = (data) => {
        // console.log(data, typeof data);
        const url = this.domain  + "/user/login";
        axios.post(url, data)
          .then( (res) => {
            console.log(res.data);
            return res;
          } )
          .catch((err)=> {
            console.warn(err);
            console.warn(err.message);
            return err;
          })
    }
}

export default UserService;