import Ember from 'ember';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';

const { get, inject: { service } } = Ember;

export default Ember.Route.extend(UnauthenticatedRouteMixin, {
  superlogin: service(),

  actions: {
    authenticate(username, password) {
      get(this, 'superlogin').testMirage();
    }
  }
});
