import {
  defineNamespace,
  defineProjections,
  Model as ТчЧертежиMixin
} from '../mixins/regenerated/models/i-i-s-generaciya-novaya-тч-чертежи';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ТчЧертежиMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
