import ajax from 'axios';
let axios = ajax.create({
  baseURL: 'http://localhost:8080/',
  timeout: 60000,
  headers:{'X-Custom-Header':'foobar'}
})

export default{
  axios
}