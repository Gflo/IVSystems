import DS from 'ember-data';

export default DS.Model.extend({
  isbn:DS.attr(),
  price:DS.attr(),
  name:DS.attr(),
  brand:DS.belongsTo('brand'),
  quanity:DS.attr(),
  lineitems:DS.hasMany('line-item'),
  tags:DS.hasMany('item-tag'),
  vendor_id:DS.belongsTo('vendor'),
  type:DS.attr(),
  material:DS.attr(),
  size:DS.attr()

});
