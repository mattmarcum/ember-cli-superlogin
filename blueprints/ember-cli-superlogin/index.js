/*jshint node:true*/
module.exports = {
  description: 'Adds dependencies for Ember-Cli-Superlogin',

  normalizeEntityName: function() {},

  afterInstall: function() {
    return this.addAddonsToProject({
      packages: [
        'ember-network'
      ]
    });
  }
};
