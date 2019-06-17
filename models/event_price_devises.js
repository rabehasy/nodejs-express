/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('event_price_devises', {
    event_price_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'event_price',
        key: 'id'
      }
    },
    devises_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'devises',
        key: 'id'
      }
    }
  }, {
    tableName: 'event_price_devises'
  });
};
