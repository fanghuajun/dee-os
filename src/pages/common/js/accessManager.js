import axios from 'axios'

export default {
  async getAccess_Token(user){
    var url = 'http://localhost:8081/oauth/token?username=admin&password=admin&grant_type=password&scope=read&client_id=rajithapp&client_secret=secret&realm=resource';
    var data = Object.assign({}, {
        username:user.username,
        password:user.password,
        grant_type:'password',
        scope:'read',
        client_id:'rajithapp',
        client_secret:'secret'
    });
    var response= await axios.post(url, data);
    return response;
  }
}