import Ember from 'ember';
import layout from '../templates/components/register-form';

const { get, set, setProperties, inject:{ service } } = Ember;

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
      .then( ()=>
        setProperties(this, {
          hasValidatedUsername: true,
          usernameValid: true
        })
      )
      .catch( ()=>
        setProperties(this, {
          hasValidatedUsername: true,
          usernameValid: false
        })
      );
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
