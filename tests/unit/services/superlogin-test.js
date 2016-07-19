/* jshint expr:true */
import { expect } from 'chai';
import {
  describeModule,
  it
} from 'ember-mocha';

import mirageStarter from '../../helpers/ember-mirage-starter';

describeModule(
  'service:superlogin',
  'SuperloginService',
  {
  },
  function() {
    before(function() {
      mirageStarter(this.container);
    });

    it('returns a rejected promise on invalid username', function() {
      let service = this.subject();

      const promise = service.validateUsername('asdf');
      return expect(promise).to.be.rejected;
    });

    it('returns a resolved promise on valid username', function() {
      let service = this.subject();

      const promise = service.validateUsername('superlogin');
      return expect(promise).to.be.fulfilled;
    });

    it('returns a rejected promise on invalid email', function() {
      let service = this.subject();

      const promise = service.validateEmail('asdf');
      return expect(promise).to.be.rejected;
    });

    it('returns a resolved promise on valid email', function() {
      let service = this.subject();

      const promise = service.validateEmail('super@login.com');
      return expect(promise).to.be.fulfilled;
    });
  }
);
