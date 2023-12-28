import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-generaciya-novaya-материалы', 'Unit | Serializer | i-i-s-generaciya-novaya-материалы', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-generaciya-novaya-материалы',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-generaciya-novaya-расширение',
    'transform:i-i-s-generaciya-novaya-состояние',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
