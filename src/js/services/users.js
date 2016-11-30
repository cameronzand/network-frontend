
import { SERVER } from '../server';

function UserService ($http) {

  this.login = login;
  this.create = create;
  this.allUsers = allUsers;
  this.getUser = getUser;
 

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


};

UserService.$inject = ['$http'];
export { UserService };