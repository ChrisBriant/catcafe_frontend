import axios from 'axios';

const multipartConn = axios.create({
    baseURL: 'https://catcafeapi.chrisbriant.uk',
    headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${localStorage.getItem("access_token")}`
    }
});


const catApiAuth = axios.create({
    baseURL: 'https://catcafeapi.chrisbriant.uk',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem("access_token")}`
    }
});

const catApi = axios.create({
    baseURL: 'https://catcafeapi.chrisbriant.uk',
    headers: {
        'Content-Type': 'application/json',
    }
});



export {multipartConn, catApi, catApiAuth};
