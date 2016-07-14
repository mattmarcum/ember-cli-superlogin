import Ember from 'ember';
import layout from '../templates/components/register-form';

const { get, set } = Ember;

export default Ember.Component.extend({
  hasValidated: false,
  usernameValid: false,
  emailValid: false,

  username: '',
  password: '',
  verifyPassword: '',
  email: '',

  actions: {
    validateUsername(username) {

    },
    validateEmail(email) {

    },
    validatePassword(password) {

    },

    submit() {
      if(!get(this, 'hasValidated')) {
        set(this, 'hasValidated', true);
        return;
      }
    }
  }
});
