import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    successTransition() {
      this.transitionTo('login');
    }
  }
});
