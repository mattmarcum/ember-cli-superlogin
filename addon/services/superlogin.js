import Ember from 'ember';
import fetch from "ember-network/fetch";
import config from 'ember-get-config';

const { serverURL } = config['ember-cli-superlogin'];

const postOptions = (params) => {
  method: 'POST',
  body: window.FormData(params)
}

function statusCheck(response){
  if(!response.ok){
    throw new Error(response.statusText);
  }
  return response;
}

/**
* Superlogin provides a service abstracting all of the restful api endpoints
* for the [node Superlogin server](https://www.npmjs.com/package/superlogin).
*
* @class Superlogin
*/
export default Ember.Service.extend({
  /**
  * @method validateUsername
  * @param {String} username
  * @return {Promise} A promise that will reject on invalid username
  */
  validateUsername(username) {
    return fetch(`${serverURL}/validate-username/${username}`)
    .then(statusCheck);
  },

  /**
  * @method validateEmail
  * @param {String} email
  * @return {Promise} A promise that will reject on invalid email
  */
  validateEmail(email) {
    return fetch(`${serverURL}/validate-email/${email}`)
    .then(statusCheck);
  },

  /**
  * @method register
  * @param {Object} params, an object with key/value pairs of required params: username, email, password and confirmPassword.
  * @return {Promise} A promise that will reject on invalid email
  */
  register(params) {
    return fetch(`${serverURL}/register`, postOptions(params))
    .then(statusCheck);
  }

});
