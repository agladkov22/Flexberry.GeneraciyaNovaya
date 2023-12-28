import {
  defineNamespace,
  defineProjections,
  Model as ТЧТехКартыMixin
} from '../mixins/regenerated/models/i-i-s-generaciya-novaya-т-ч-тех-карты';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ТЧТехКартыMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
