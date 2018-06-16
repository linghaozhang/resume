import fetch from 'isomorphic-fetch';
import {API_PREFIX} from './config'
const checkStatus = function (res) {
    switch (res.status) {
        case 401:
            console.log('Status:401');
            break;
        case 500:
            console.log('Status:500');
            break;
        case 404:
            console.log('Status:500');
            break;
        default:
            return res;
    }
};
const jsonParse = function (res) {
    return res.json().then(response => {
        console.log("fetchResponse", response);
        return response
    });
};

let netWork={
  post:(url,data)=>{
    let options={
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    };
    return fetch(url, options).then(checkStatus)
        .then(jsonParse)
  },
  get:(pramsArr)=>{
      let options={
          method: 'GET',
      };
      let requestData='';
      if (pramsArr && (pramsArr instanceof Array)) {
          for (let i = 0; i < pramsArr.length; i++) {
              requestData = requestData + '/' + pramsArr[i];
          }
      }
      return fetch(`${API_PREFIX}${requestData}`, options).then(checkStatus)
          .then(jsonParse)
  }
};
export default netWork