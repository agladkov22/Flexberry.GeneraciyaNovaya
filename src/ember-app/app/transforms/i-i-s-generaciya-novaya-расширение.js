import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import РасширениеEnum from '../enums/i-i-s-generaciya-novaya-расширение';

export default FlexberryEnum.extend({
  enum: РасширениеEnum,
  sourceType: 'IIS.Generaciya_novaya.Расширение'
});
