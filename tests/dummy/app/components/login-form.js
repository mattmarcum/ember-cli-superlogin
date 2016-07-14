import Ember from 'ember';
import layout from '../templates/components/login-form';

const { get } = Ember;
export default Ember.Component.extend({
  username: '',
  password: '',

  actions: {
    submit() {
      get(this, 'submit')();
    }
  }
});
