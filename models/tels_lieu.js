/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tels_lieu', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    eventlieu_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'event_lieu',
        key: 'id'
      }
    },
    tel: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    tableName: 'tels_lieu'
  });
};
