
import { SERVER } from '../server';

function UserService ($http) {

  this.login = login;
  this.create = create;
 

  function create (user) {
    return $http.post(`${SERVER}/users`, user);
  };

  function login (user) {
    return $http.post(`${SERVER}/login`, user);
  };


};

UserService.$inject = ['$http'];
export { UserService };