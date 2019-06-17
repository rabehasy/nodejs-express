/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('event_price', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    price: {
      type: "DOUBLE",
      allowNull: true
    },
    detailprice: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    devise_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'devises',
        key: 'id'
      }
    }
  }, {
    tableName: 'event_price'
  });
};
