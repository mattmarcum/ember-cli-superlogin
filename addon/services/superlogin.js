import Ember from 'ember';
import fetch from "ember-network/fetch";
import config from 'ember-get-config';

const { server: serverHostname } = config['ember-cli-superlogin'];

/**
* Superlogin provides a service abstracting all of the restful api endpoints
* for the [node Superlogin server](https://www.npmjs.com/package/superlogin).
*
* @class Superlogin
*/

function httpCodeCheck(response, errorMsg){
  if(!response.ok){
    throw errorMsg;
  }
  return response;
}

export default Ember.Service.extend({
  /**
  * @method validateUsername
  * @param {String} username
  * @return {Promise} A promise that will reject on invalid username 
  */
  validateUsername(username) {
    return fetch(`${serverHostname}/validate-username/${username}`)
    .then(response => httpCodeCheck(response));
  }
});
