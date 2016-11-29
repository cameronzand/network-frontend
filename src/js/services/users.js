
import { SERVER } from '../server';

function UserService ($http) {

  this.login = login;
  this.create = create;
  this.allUsers = allUsers;
 

  function create (user) {
    return $http.post(`${SERVER}/users`, user);
  };

  function login (user) {
    return $http.post(`${SERVER}/login`, user);
  };

  function allUsers (user) {
    return $http.get(`${SERVER}/users`);
  };


};

UserService.$inject = ['$http'];
export { UserService };