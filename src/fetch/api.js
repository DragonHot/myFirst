import axios from 'axios';

// function fetch (url, params) {
//   return new Promise((resolve, reject) => {
//     axios.post(url, params).then(
//       response => {
//         resolve(response.data);
//       }
//     ).catch(error => {
//       console.log(12345, error);
//       reject(error);
//     });
//   });
// }

var getDefaultData = () => {
  // return fetch('/api/getBoardList');
  var url = 'https://www.runoob.com/try/ajax/json_demo.json';
  var params = {a: 233};
  return axios.post(url, params);
};
export default {
  getDefaultData
};
