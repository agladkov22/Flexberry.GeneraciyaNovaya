import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаСоздания: DS.attr('date'),
  наименЧертеж: DS.attr('string'),
  заявки: DS.belongsTo('i-i-s-generaciya-novaya-заявки', { inverse: null, async: false }),
  тчЧертежи: DS.hasMany('i-i-s-generaciya-novaya-тч-чертежи', { inverse: 'чертежи', async: false })
});

export let ValidationRules = {
  датаСоздания: {
    descriptionKey: 'models.i-i-s-generaciya-novaya-чертежи.validations.датаСоздания.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  наименЧертеж: {
    descriptionKey: 'models.i-i-s-generaciya-novaya-чертежи.validations.наименЧертеж.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  заявки: {
    descriptionKey: 'models.i-i-s-generaciya-novaya-чертежи.validations.заявки.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  тчЧертежи: {
    descriptionKey: 'models.i-i-s-generaciya-novaya-чертежи.validations.тчЧертежи.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЧертежиE', 'i-i-s-generaciya-novaya-чертежи', {
    наименЧертеж: attr('Наименование чертежа', { index: 0 }),
    датаСоздания: attr('Дата создания', { index: 1 }),
    заявки: belongsTo('i-i-s-generaciya-novaya-заявки', 'Заявки', {
      номерЗаявки: attr('Номер заявки', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'номерЗаявки' }),
    тчЧертежи: hasMany('i-i-s-generaciya-novaya-тч-чертежи', 'Версии Чертежа', {
      версия: attr('Версия файла', { index: 0 }),
      имяФайла: attr('Имя файла', { index: 1 }),
      расширение: attr('Расширение', { index: 2 }),
      датаИзм: attr('Дата изменения', { index: 3 })
    })
  });

  modelClass.defineProjection('ЧертежиL', 'i-i-s-generaciya-novaya-чертежи', {
    наименЧертеж: attr('Наименование чертежа', { index: 0 }),
    датаСоздания: attr('Дата создания', { index: 1 }),
    заявки: belongsTo('i-i-s-generaciya-novaya-заявки', 'Номер заявки', {
      номерЗаявки: attr('Номер заявки', { index: 2 })
    }, { index: -1, hidden: true })
  });
};
