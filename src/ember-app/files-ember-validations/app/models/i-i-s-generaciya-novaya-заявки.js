import {
  defineNamespace,
  defineProjections,
  Model as ЗаявкиMixin
} from '../mixins/regenerated/models/i-i-s-generaciya-novaya-заявки';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ЗаявкиMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
