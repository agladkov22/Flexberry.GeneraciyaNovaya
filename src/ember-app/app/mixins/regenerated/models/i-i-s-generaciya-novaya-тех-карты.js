import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date'),
  номерКарты: DS.attr('number'),
  чертежи: DS.belongsTo('i-i-s-generaciya-novaya-чертежи', { inverse: null, async: false }),
  тЧТехКарты: DS.hasMany('i-i-s-generaciya-novaya-т-ч-тех-карты', { inverse: 'техКарты', async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-generaciya-novaya-тех-карты.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  номерКарты: {
    descriptionKey: 'models.i-i-s-generaciya-novaya-тех-карты.validations.номерКарты.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  чертежи: {
    descriptionKey: 'models.i-i-s-generaciya-novaya-тех-карты.validations.чертежи.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  тЧТехКарты: {
    descriptionKey: 'models.i-i-s-generaciya-novaya-тех-карты.validations.тЧТехКарты.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТехКартыE', 'i-i-s-generaciya-novaya-тех-карты', {
    номерКарты: attr('Номер карты', { index: 0 }),
    дата: attr('Дата', { index: 1 }),
    чертежи: belongsTo('i-i-s-generaciya-novaya-чертежи', 'Чертежи', {
      наименЧертеж: attr('Наименование чертежа', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'наименЧертеж' }),
    тЧТехКарты: hasMany('i-i-s-generaciya-novaya-т-ч-тех-карты', 'Этапы', {
      пунктРаботы: attr('Пункт работы', { index: 0 }),
      составРабот: attr('Состав работ', { index: 1 }),
      материалы: belongsTo('i-i-s-generaciya-novaya-материалы', 'Материалы', {
        наименование: attr('Необходимые материалы', { index: 3, hidden: true })
      }, { index: 2, displayMemberPath: 'наименование' }),
      оборудование: belongsTo('i-i-s-generaciya-novaya-оборудование', 'Оборудование', {
        наименование: attr('Необходимое оборудование', { index: 5, hidden: true })
      }, { index: 4, displayMemberPath: 'наименование' })
    })
  });

  modelClass.defineProjection('ТехКартыL', 'i-i-s-generaciya-novaya-тех-карты', {
    номерКарты: attr('Номер карты', { index: 0 }),
    дата: attr('Дата', { index: 1 }),
    чертежи: belongsTo('i-i-s-generaciya-novaya-чертежи', 'Наименование чертеж', {
      наименЧертеж: attr('Наименование чертеж', { index: 2 })
    }, { index: -1, hidden: true })
  });
};
