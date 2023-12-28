import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  версия: DS.attr('decimal'),
  датаИзм: DS.attr('date'),
  имяФайла: DS.attr('string'),
  расширение: DS.attr('i-i-s-generaciya-novaya-расширение'),
  чертежи: DS.belongsTo('i-i-s-generaciya-novaya-чертежи', { inverse: 'тчЧертежи', async: false })
});

export let ValidationRules = {
  версия: {
    descriptionKey: 'models.i-i-s-generaciya-novaya-тч-чертежи.validations.версия.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  датаИзм: {
    descriptionKey: 'models.i-i-s-generaciya-novaya-тч-чертежи.validations.датаИзм.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  имяФайла: {
    descriptionKey: 'models.i-i-s-generaciya-novaya-тч-чертежи.validations.имяФайла.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  расширение: {
    descriptionKey: 'models.i-i-s-generaciya-novaya-тч-чертежи.validations.расширение.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  чертежи: {
    descriptionKey: 'models.i-i-s-generaciya-novaya-тч-чертежи.validations.чертежи.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТчЧертежиE', 'i-i-s-generaciya-novaya-тч-чертежи', {
    версия: attr('Версия файла', { index: 0 }),
    имяФайла: attr('Имя файла', { index: 1 }),
    расширение: attr('Расширение', { index: 2 }),
    датаИзм: attr('Дата изменения', { index: 3 })
  });
};
