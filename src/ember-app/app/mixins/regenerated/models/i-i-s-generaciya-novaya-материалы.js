import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  iD: DS.attr('number'),
  наименование: DS.attr('string'),
  склады: DS.belongsTo('i-i-s-generaciya-novaya-склады', { inverse: null, async: false })
});

export let ValidationRules = {
  iD: {
    descriptionKey: 'models.i-i-s-generaciya-novaya-материалы.validations.iD.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  наименование: {
    descriptionKey: 'models.i-i-s-generaciya-novaya-материалы.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  склады: {
    descriptionKey: 'models.i-i-s-generaciya-novaya-материалы.validations.склады.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('МатериалыE', 'i-i-s-generaciya-novaya-материалы', {
    iD: attr('ID', { index: 0 }),
    наименование: attr('Наименование', { index: 1 }),
    склады: belongsTo('i-i-s-generaciya-novaya-склады', 'Склады', {
      наименование: attr('Склад', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'наименование' })
  });

  modelClass.defineProjection('МатериалыL', 'i-i-s-generaciya-novaya-материалы', {
    iD: attr('ID', { index: 0 }),
    наименование: attr('Наименование', { index: 1 }),
    склады: belongsTo('i-i-s-generaciya-novaya-склады', 'Склад', {
      наименование: attr('Склад', { index: 2 })
    }, { index: -1, hidden: true })
  });
};
