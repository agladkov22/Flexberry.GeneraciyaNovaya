import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  пунктРаботы: DS.attr('number'),
  составРабот: DS.attr('string'),
  материалы: DS.belongsTo('i-i-s-generaciya-novaya-материалы', { inverse: null, async: false }),
  оборудование: DS.belongsTo('i-i-s-generaciya-novaya-оборудование', { inverse: null, async: false }),
  техКарты: DS.belongsTo('i-i-s-generaciya-novaya-тех-карты', { inverse: 'тЧТехКарты', async: false })
});

export let ValidationRules = {
  пунктРаботы: {
    descriptionKey: 'models.i-i-s-generaciya-novaya-т-ч-тех-карты.validations.пунктРаботы.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  составРабот: {
    descriptionKey: 'models.i-i-s-generaciya-novaya-т-ч-тех-карты.validations.составРабот.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  материалы: {
    descriptionKey: 'models.i-i-s-generaciya-novaya-т-ч-тех-карты.validations.материалы.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  оборудование: {
    descriptionKey: 'models.i-i-s-generaciya-novaya-т-ч-тех-карты.validations.оборудование.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  техКарты: {
    descriptionKey: 'models.i-i-s-generaciya-novaya-т-ч-тех-карты.validations.техКарты.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТЧТехКартыE', 'i-i-s-generaciya-novaya-т-ч-тех-карты', {
    пунктРаботы: attr('Пункт работы', { index: 0 }),
    составРабот: attr('Состав работ', { index: 1 }),
    материалы: belongsTo('i-i-s-generaciya-novaya-материалы', 'Материалы', {
      наименование: attr('Необходимые материалы', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'наименование' }),
    оборудование: belongsTo('i-i-s-generaciya-novaya-оборудование', 'Оборудование', {
      наименование: attr('Необходимое оборудование', { index: 5, hidden: true })
    }, { index: 4, displayMemberPath: 'наименование' })
  });
};
