import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | new-contact', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:new-contact');
    assert.ok(route);
  });
});
