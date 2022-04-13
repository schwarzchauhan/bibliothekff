import axios  from "axios";

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
            // res.data  {"_id":"61f6538cdfef69387709ec03","email":"harshchauhan0994@gmail.com","password":"4321","name":"harsh chauhan","imgUrl":"https://miro.medium.com/max/875/1*7HZGoVt_I3g_3f-j8uwpSg.jpeg"}
            return resolve(res.data);
          } )
          .catch((err)=> {
            // console.warn(err);
            // console.warn(err.message);
            // https://stackoverflow.com/questions/60434870/node-express-is-not-sending-a-custom-error-message
            // console.warn(err.response);
            if(err.response && err.response.data && err.response.data.type == 'knownError'){
              // console.warn(err, err.message);
              err.message = err.response.data.message;
              // console.warn(err, err.message);
            }
            return reject(err);
          })

        })
    }
    getProfileData = (data) => {
      const url = this.domain + `/api/user/dashboard/${data.username}`;
      return new Promise(resolve => {
        axios.get(url)
        .then( (res) => {
          resolve(res.data);
        })
        .catch( (err) => {
          console.warn(err);
          console.warn(err.message);
          resolve(err);
        } )
      })
    }
}

export default UserService;