import Ember from 'ember';

const {
    computed: { and },
    get, getProperties,
    set, setProperties,
    inject: { service }
  } = Ember;

export default Ember.Component.extend({
  superlogin: service(),
  flashMessages: service(),

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

  formHasValidated: and('hasValidatedUsername', 'hasValidatedEmail',
    'hasValidatedPassword'),

  formIsValid: and('usernameValid', 'emailValid', 'passwordValid'),

  formError: '',

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

    validatePassword() {
      let { password, verifyPassword } =
        getProperties(this, 'password', 'verifyPassword');

      setProperties(this, {
        passwordValid: password===verifyPassword,
        hasValidatedPassword: true
      });
    },

    submit() {
      const flashMessages = get(this, 'flashMessages');

      if (!get(this, 'formHasValidated')) {
        setProperties(this, {
          hasValidatedUsername: true,
          hasValidatedEmail: true,
          hasValidatedPassword: true
        });
        return;
      }

      if (!get(this, 'formIsValid')) {
        return;
      }

      return get(this, 'superlogin')
      .register(getProperties(this, 'username', 'email', 'password'))
      .then(()=> {
        flashMessages.success('Successfully Registered!');
        get(this, 'successTransition')();
      })
      .catch(err => set(this, 'formError', err));
    }
  }
});
