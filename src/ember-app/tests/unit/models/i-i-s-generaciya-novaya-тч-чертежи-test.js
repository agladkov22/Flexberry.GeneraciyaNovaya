import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-generaciya-novaya-тч-чертежи', 'Unit | Model | i-i-s-generaciya-novaya-тч-чертежи', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-generaciya-novaya-заявки',
    'model:i-i-s-generaciya-novaya-клиенты',
    'model:i-i-s-generaciya-novaya-материалы',
    'model:i-i-s-generaciya-novaya-оборудование',
    'model:i-i-s-generaciya-novaya-склады',
    'model:i-i-s-generaciya-novaya-т-ч-тех-карты',
    'model:i-i-s-generaciya-novaya-тех-карты',
    'model:i-i-s-generaciya-novaya-тч-чертежи',
    'model:i-i-s-generaciya-novaya-чертежи',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
