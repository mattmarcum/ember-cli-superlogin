/* jshint expr:true */
import { expect } from 'chai';
import {
  describeModule,
  it
} from 'ember-mocha';

describeModule(
  'service:superlogin',
  'SuperloginService',
  {
    // Specify the other units that are required for this test.
    // needs: ['service:foo']
  },
  function() {
    // Replace this with your real tests.
    it('returns a rejected promise on invalid username', function() {
      let service = this.subject();

      const promise = service.validateUsername('test');

    });

    it('returns a resolved promise on valid username', function() {
      let service = this.subject();

      const promise = service.validateUsername('superlogin');

    });
  }
);
