import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | create-contact', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:create-contact');
    assert.ok(route);
  });
});
