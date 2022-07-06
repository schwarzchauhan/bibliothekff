import axios from 'axios';
import Cookies from "universal-cookie"
export const cookies = new Cookies()

// Step-1: Create a new Axios instance with a custom config.
// The timeout is set to 10s. If the request takes longer than
// that then the request will be aborted.
const customAxios = axios.create({
    baseURL: `${process.env.REACT_APP_BACKEND_IP}/api`,
    timeout: 10000, 
});

// Step-2: Create request, response & error handlers
const requestHandler = request => {
    // Token will be dynamic so we can use any app-specific way to always   
    // fetch the new token before making the call
    // request.headers.Authorization = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIwMTIzNDU2Nzg5IiwibmFtZSI6IlNhbXBsZSIsImlhdCI6MTUxNjIzODIzfQ.ZEBwz4pWYGqgFJc6DIi7HdTN0z5Pfs4Lcv4ZNwMr1rs';  
    request.headers['x-access-token'] =  cookies.get('authToken')
  
    return request;
};

const responseHandler = response => {
    if (response.status === 401) {
        window.location = '/user/login';
    }
    return response;
};

const errorHandler = err => {
    if(err && err.response && err.response.status == 401)
        window.location = '/user/login'
    if (err.response && err.response.data && err.response.data.type == 'KnownError') {
        err.message = err.response.data.message;
    } else {
        err.message = 'Oops! Unexpected Error occurred.'
    }
    return Promise.reject(err);
};

// Step-3: Configure/make use of request & response interceptors from Axios
// Note: You can create one method say configureInterceptors, add below in that,
// export and call it in an init function of the application/page.
customAxios.interceptors.request.use(
    (request) => requestHandler(request),
    (error) => errorHandler(error)
);

customAxios.interceptors.response.use(
    (response) => responseHandler(response),
    (error) => errorHandler(error)
 );


// Step-4: Export the newly created Axios instance to be used in different locations.
export default customAxios;