import { Serializer as ТЧТехКартыSerializer } from
  '../mixins/regenerated/serializers/i-i-s-generaciya-novaya-т-ч-тех-карты';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ТЧТехКартыSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
