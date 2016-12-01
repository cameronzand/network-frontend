
import { SERVER } from '../server';

function UserService ($http, $cookies) {

  this.login = login;
  this.create = create;
  this.allUsers = allUsers;
  this.getUser = getUser;
  this.setUser = setUser;
  this.logout = logout;
  this.isLoggedIn = isLoggedIn;
  this.postLoc = postLoc;
  this.getHeaders = getHeaders;

  function create (user) {
    return $http.post(`${SERVER}/users`, user);
  };

  function login (user) {
    return $http.post(`${SERVER}/login`, user);
  };

  function allUsers (user) {
    return $http.get(`${SERVER}/users`);
  };

  function getUser (id) {
  	return $http.get(`${SERVER}/users/${id}`)
  }

  function setUser (data){
    $cookies.put('username', data.username);
    $cookies.put('access_token', data.access_token);
  }

  function logout () {
    $cookies.remove('username');
    $cookies.remove('access_token');
  }

  function isLoggedIn () {
   return $cookies.get('username') ? true : false;
  }

  function postLoc (location) {
    console.log("request made.");
    console.log(getHeaders());
    let req = {
      url: `${SERVER}/location`,
      params: location,
      method: 'POST',
      headers: getHeaders()
    };
    return $http(req);
    //return $http.post(`${SERVER}/location`, location);
  }

  function getHeaders () {
    let token = $cookies.get('access_token');
    return {
      Authorization: `Bearer ${token}`
    };
  }



};

UserService.$inject = ['$http', '$cookies'];
export { UserService };