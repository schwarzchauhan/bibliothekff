import axios  from "axios";

class UserService {
    constructor(){
        this.domain = process.env.REACT_APP_BACKEND_IP;
    }
    loginRequest = (data) => {
        // console.log(data, typeof data);
        const url = this.domain  + "/api/user/login";
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