import axios  from "axios";
import Cookies from "universal-cookie"
export const cookies = new Cookies()

class UserService {
    constructor(){
        this.domain = process.env.REACT_APP_BACKEND_IP;
    }
    // https://stackoverflow.com/questions/53385477/using-async-await-still-returns-undefined
    loginRequest = (data) => {
        // console.log(data, typeof data);
        const url = this.domain  + "/api/user/login";
        return new Promise((resolve,reject) => {
          axios.post(url, data)
          .then( (res) => {
            // res.data  {"email":"harshchauhan0999@schwarzz.com","_id":"62addc8e19fdfb3f6b8bab72","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MmFkZGM4ZTE5ZmRmYjNmNmI4YmFiNzIiLCJpYXQiOjE2NTYwODI3ODR9.yjBrNl_vbyR4_ikD0LxMDktIiOPZJ2tcUKfVUO4WxX0"}
            cookies.set('authToken', res.data.token, {path: '/'})
            return resolve(res.data);
          } )
          .catch((err)=> {
            // console.warn(err);
            // console.warn(err.message);
            // https://stackoverflow.com/questions/60434870/node-express-is-not-sending-a-custom-error-message
            // console.warn(err.response);
            if(err.response && err.response.data && err.response.data.type == 'KnownError'){
              // console.warn(err, err.message);
              err.message = err.response.data.message;
              // console.warn(err, err.message);
            }
            return reject(err);
          })

        })
    }
    register = (data) => {
      // console.log(data, typeof data);
      const url = this.domain  + "/api/user/register";
      return new Promise((resolve,reject) => {
        axios.post(url, data)
        .then( (res) => {
          return resolve(res.data);
        } )
        .catch((err)=> {
          // https://stackoverflow.com/questions/60434870/node-express-is-not-sending-a-custom-error-message
          if(err.response && err.response.data && err.response.data.type == 'KnownError'){
            err.message = err.response.data.message;
          }
          return reject(err);
        })

      })
  }
}

export default UserService;