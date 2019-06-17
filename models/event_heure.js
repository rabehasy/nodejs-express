/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('event_heure', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    heure: {
      type: DataTypes.TIME,
      allowNull: false
    }
  }, {
    tableName: 'event_heure'
  });
};
