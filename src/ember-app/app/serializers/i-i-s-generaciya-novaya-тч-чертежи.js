import { Serializer as ТчЧертежиSerializer } from
  '../mixins/regenerated/serializers/i-i-s-generaciya-novaya-тч-чертежи';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ТчЧертежиSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
