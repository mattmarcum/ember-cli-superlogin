import Ember from 'ember';

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
