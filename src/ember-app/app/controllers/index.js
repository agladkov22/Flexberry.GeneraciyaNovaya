import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.generaciya-novaya.caption'),
          title: i18n.t('forms.application.sitemap.generaciya-novaya.title'),
          children: [{
            link: 'i-i-s-generaciya-novaya-заявки-l',
            caption: i18n.t('forms.application.sitemap.generaciya-novaya.i-i-s-generaciya-novaya-заявки-l.caption'),
            title: i18n.t('forms.application.sitemap.generaciya-novaya.i-i-s-generaciya-novaya-заявки-l.title'),
            icon: 'tasks',
            children: null
          }, {
            link: 'i-i-s-generaciya-novaya-оборудование-l',
            caption: i18n.t('forms.application.sitemap.generaciya-novaya.i-i-s-generaciya-novaya-оборудование-l.caption'),
            title: i18n.t('forms.application.sitemap.generaciya-novaya.i-i-s-generaciya-novaya-оборудование-l.title'),
            icon: 'edit',
            children: null
          }, {
            link: 'i-i-s-generaciya-novaya-тех-карты-l',
            caption: i18n.t('forms.application.sitemap.generaciya-novaya.i-i-s-generaciya-novaya-тех-карты-l.caption'),
            title: i18n.t('forms.application.sitemap.generaciya-novaya.i-i-s-generaciya-novaya-тех-карты-l.title'),
            icon: 'paperclip',
            children: null
          }, {
            link: 'i-i-s-generaciya-novaya-клиенты-l',
            caption: i18n.t('forms.application.sitemap.generaciya-novaya.i-i-s-generaciya-novaya-клиенты-l.caption'),
            title: i18n.t('forms.application.sitemap.generaciya-novaya.i-i-s-generaciya-novaya-клиенты-l.title'),
            icon: 'address card',
            children: null
          }, {
            link: 'i-i-s-generaciya-novaya-материалы-l',
            caption: i18n.t('forms.application.sitemap.generaciya-novaya.i-i-s-generaciya-novaya-материалы-l.caption'),
            title: i18n.t('forms.application.sitemap.generaciya-novaya.i-i-s-generaciya-novaya-материалы-l.title'),
            children: null
          }, {
            link: 'i-i-s-generaciya-novaya-склады-l',
            caption: i18n.t('forms.application.sitemap.generaciya-novaya.i-i-s-generaciya-novaya-склады-l.caption'),
            title: i18n.t('forms.application.sitemap.generaciya-novaya.i-i-s-generaciya-novaya-склады-l.title'),
            icon: 'book',
            children: null
          }, {
            link: 'i-i-s-generaciya-novaya-чертежи-l',
            caption: i18n.t('forms.application.sitemap.generaciya-novaya.i-i-s-generaciya-novaya-чертежи-l.caption'),
            title: i18n.t('forms.application.sitemap.generaciya-novaya.i-i-s-generaciya-novaya-чертежи-l.title'),
            icon: 'list',
            children: null
          }]
        }
      ]
    };
  }),
})