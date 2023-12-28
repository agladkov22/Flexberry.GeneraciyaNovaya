import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISGeneraciya_novayaЗаявкиLForm from './forms/i-i-s-generaciya-novaya-заявки-l';
import IISGeneraciya_novayaКлиентыLForm from './forms/i-i-s-generaciya-novaya-клиенты-l';
import IISGeneraciya_novayaМатериалыLForm from './forms/i-i-s-generaciya-novaya-материалы-l';
import IISGeneraciya_novayaОборудованиеLForm from './forms/i-i-s-generaciya-novaya-оборудование-l';
import IISGeneraciya_novayaСкладыLForm from './forms/i-i-s-generaciya-novaya-склады-l';
import IISGeneraciya_novayaТехКартыLForm from './forms/i-i-s-generaciya-novaya-тех-карты-l';
import IISGeneraciya_novayaЧертежиLForm from './forms/i-i-s-generaciya-novaya-чертежи-l';
import IISGeneraciya_novayaЗаявкиEForm from './forms/i-i-s-generaciya-novaya-заявки-e';
import IISGeneraciya_novayaКлиентыEForm from './forms/i-i-s-generaciya-novaya-клиенты-e';
import IISGeneraciya_novayaМатериалыEForm from './forms/i-i-s-generaciya-novaya-материалы-e';
import IISGeneraciya_novayaОборудованиеEForm from './forms/i-i-s-generaciya-novaya-оборудование-e';
import IISGeneraciya_novayaСкладыEForm from './forms/i-i-s-generaciya-novaya-склады-e';
import IISGeneraciya_novayaТехКартыEForm from './forms/i-i-s-generaciya-novaya-тех-карты-e';
import IISGeneraciya_novayaЧертежиEForm from './forms/i-i-s-generaciya-novaya-чертежи-e';
import IISGeneraciya_novayaЗаявкиModel from './models/i-i-s-generaciya-novaya-заявки';
import IISGeneraciya_novayaКлиентыModel from './models/i-i-s-generaciya-novaya-клиенты';
import IISGeneraciya_novayaМатериалыModel from './models/i-i-s-generaciya-novaya-материалы';
import IISGeneraciya_novayaОборудованиеModel from './models/i-i-s-generaciya-novaya-оборудование';
import IISGeneraciya_novayaСкладыModel from './models/i-i-s-generaciya-novaya-склады';
import IISGeneraciya_novayaТЧТехКартыModel from './models/i-i-s-generaciya-novaya-т-ч-тех-карты';
import IISGeneraciya_novayaТехКартыModel from './models/i-i-s-generaciya-novaya-тех-карты';
import IISGeneraciya_novayaТчЧертежиModel from './models/i-i-s-generaciya-novaya-тч-чертежи';
import IISGeneraciya_novayaЧертежиModel from './models/i-i-s-generaciya-novaya-чертежи';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-generaciya-novaya-заявки': IISGeneraciya_novayaЗаявкиModel,
    'i-i-s-generaciya-novaya-клиенты': IISGeneraciya_novayaКлиентыModel,
    'i-i-s-generaciya-novaya-материалы': IISGeneraciya_novayaМатериалыModel,
    'i-i-s-generaciya-novaya-оборудование': IISGeneraciya_novayaОборудованиеModel,
    'i-i-s-generaciya-novaya-склады': IISGeneraciya_novayaСкладыModel,
    'i-i-s-generaciya-novaya-т-ч-тех-карты': IISGeneraciya_novayaТЧТехКартыModel,
    'i-i-s-generaciya-novaya-тех-карты': IISGeneraciya_novayaТехКартыModel,
    'i-i-s-generaciya-novaya-тч-чертежи': IISGeneraciya_novayaТчЧертежиModel,
    'i-i-s-generaciya-novaya-чертежи': IISGeneraciya_novayaЧертежиModel
  },

  'application-name': 'Generaciya_novaya',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Generaciya_novaya',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Generaciya_novaya',
          title: 'Generaciya_novaya'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        'generaciya-novaya': {
          caption: 'Generaciya_novaya',
          title: 'Generaciya_novaya',
          'i-i-s-generaciya-novaya-заявки-l': {
            caption: 'Заявки',
            title: ''
          },
          'i-i-s-generaciya-novaya-оборудование-l': {
            caption: 'Оборудование',
            title: ''
          },
          'i-i-s-generaciya-novaya-тех-карты-l': {
            caption: 'Тех карты',
            title: ''
          },
          'i-i-s-generaciya-novaya-клиенты-l': {
            caption: 'Клиенты',
            title: ''
          },
          'i-i-s-generaciya-novaya-материалы-l': {
            caption: 'Материалы',
            title: ''
          },
          'i-i-s-generaciya-novaya-склады-l': {
            caption: 'Склады',
            title: ''
          },
          'i-i-s-generaciya-novaya-чертежи-l': {
            caption: 'Чертежи',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-generaciya-novaya-заявки-l': IISGeneraciya_novayaЗаявкиLForm,
    'i-i-s-generaciya-novaya-клиенты-l': IISGeneraciya_novayaКлиентыLForm,
    'i-i-s-generaciya-novaya-материалы-l': IISGeneraciya_novayaМатериалыLForm,
    'i-i-s-generaciya-novaya-оборудование-l': IISGeneraciya_novayaОборудованиеLForm,
    'i-i-s-generaciya-novaya-склады-l': IISGeneraciya_novayaСкладыLForm,
    'i-i-s-generaciya-novaya-тех-карты-l': IISGeneraciya_novayaТехКартыLForm,
    'i-i-s-generaciya-novaya-чертежи-l': IISGeneraciya_novayaЧертежиLForm,
    'i-i-s-generaciya-novaya-заявки-e': IISGeneraciya_novayaЗаявкиEForm,
    'i-i-s-generaciya-novaya-клиенты-e': IISGeneraciya_novayaКлиентыEForm,
    'i-i-s-generaciya-novaya-материалы-e': IISGeneraciya_novayaМатериалыEForm,
    'i-i-s-generaciya-novaya-оборудование-e': IISGeneraciya_novayaОборудованиеEForm,
    'i-i-s-generaciya-novaya-склады-e': IISGeneraciya_novayaСкладыEForm,
    'i-i-s-generaciya-novaya-тех-карты-e': IISGeneraciya_novayaТехКартыEForm,
    'i-i-s-generaciya-novaya-чертежи-e': IISGeneraciya_novayaЧертежиEForm
  },

});

export default translations;
