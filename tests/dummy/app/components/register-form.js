import Ember from 'ember';

const { get, set, inject:{ service } } = Ember;

export default Ember.Component.extend({
  superlogin: service(),

  username: '',
  hasValidatedUsername: false,
  usernameValid: false,

  email: '',
  hasValidatedEmail: false,
  emailValid: false,

  password: '',
  verifyPassword: '',
  hasValidatedPassword: false,
  passwordValid: false,

  actions: {
    validateUsername(username) {
      get(this, 'superlogin')
      .validateUsername(username)
      .then(()=>set(this, 'usernameValid', true))
      .catch(()=>set(this, 'usernameValid', false))
      .finally(()=>set(this, 'hasValidatedUsername', true));
    },

    validateEmail(email) {
      get(this, 'superlogin')
      .validateEmail(email)
      .then(()=>set(this, 'emailValid', true))
      .catch(()=>set(this, 'emailValid', false))
      .finally(()=>set(this, 'hasValidatedEmail', true));
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
