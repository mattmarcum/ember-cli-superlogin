import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  actions: {
    changePassword(password) {

    },
    changeEmail(email) {

    },
    logoutOthers() {

    },
    logoutAll() {

    }
  }
});
