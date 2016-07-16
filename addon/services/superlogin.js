import Ember from 'ember';
import fetch from "ember-network/fetch";
import config from 'ember-get-config';

const { server }= config['ember-cli-superlogin'];

/**
* Superlogin provides a service abstracting all of the restful api endpoints
* for the [node Superlogin server](https://www.npmjs.com/package/superlogin).
*
* @class Superlogin
*/
export default Ember.Service.extend({
  testMirage() {
    fetch(`${server}/session`).then(response => console.log);
  }
});
