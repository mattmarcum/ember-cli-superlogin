import Ember from 'ember';
import fetch from "ember-network/fetch";
import config from 'ember-get-config';

const { server }= config['ember-cli-superlogin'];

export default Ember.Service.extend({
  testMirage() {
    fetch(`${server}/session`).then(response => console.log);
  }
});
