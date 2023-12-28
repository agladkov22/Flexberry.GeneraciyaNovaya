import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ТЧТехКартыMixin
} from '../mixins/regenerated/models/i-i-s-generaciya-novaya-т-ч-тех-карты';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ТЧТехКартыMixin, Validations, {
});

defineProjections(Model);

export default Model;
