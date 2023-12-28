import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-generaciya-novaya-заявки-l');
  this.route('i-i-s-generaciya-novaya-заявки-e',
  { path: 'i-i-s-generaciya-novaya-заявки-e/:id' });
  this.route('i-i-s-generaciya-novaya-заявки-e.new',
  { path: 'i-i-s-generaciya-novaya-заявки-e/new' });
  this.route('i-i-s-generaciya-novaya-клиенты-l');
  this.route('i-i-s-generaciya-novaya-клиенты-e',
  { path: 'i-i-s-generaciya-novaya-клиенты-e/:id' });
  this.route('i-i-s-generaciya-novaya-клиенты-e.new',
  { path: 'i-i-s-generaciya-novaya-клиенты-e/new' });
  this.route('i-i-s-generaciya-novaya-материалы-l');
  this.route('i-i-s-generaciya-novaya-материалы-e',
  { path: 'i-i-s-generaciya-novaya-материалы-e/:id' });
  this.route('i-i-s-generaciya-novaya-материалы-e.new',
  { path: 'i-i-s-generaciya-novaya-материалы-e/new' });
  this.route('i-i-s-generaciya-novaya-оборудование-l');
  this.route('i-i-s-generaciya-novaya-оборудование-e',
  { path: 'i-i-s-generaciya-novaya-оборудование-e/:id' });
  this.route('i-i-s-generaciya-novaya-оборудование-e.new',
  { path: 'i-i-s-generaciya-novaya-оборудование-e/new' });
  this.route('i-i-s-generaciya-novaya-склады-l');
  this.route('i-i-s-generaciya-novaya-склады-e',
  { path: 'i-i-s-generaciya-novaya-склады-e/:id' });
  this.route('i-i-s-generaciya-novaya-склады-e.new',
  { path: 'i-i-s-generaciya-novaya-склады-e/new' });
  this.route('i-i-s-generaciya-novaya-тех-карты-l');
  this.route('i-i-s-generaciya-novaya-тех-карты-e',
  { path: 'i-i-s-generaciya-novaya-тех-карты-e/:id' });
  this.route('i-i-s-generaciya-novaya-тех-карты-e.new',
  { path: 'i-i-s-generaciya-novaya-тех-карты-e/new' });
  this.route('i-i-s-generaciya-novaya-чертежи-l');
  this.route('i-i-s-generaciya-novaya-чертежи-e',
  { path: 'i-i-s-generaciya-novaya-чертежи-e/:id' });
  this.route('i-i-s-generaciya-novaya-чертежи-e.new',
  { path: 'i-i-s-generaciya-novaya-чертежи-e/new' });
});

export default Router;
