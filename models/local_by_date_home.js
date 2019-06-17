/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('local_by_date_home', {
    event_local_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'event_local',
        key: 'id'
      }
    },
    event_date_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'event_date',
        key: 'id'
      }
    }
  }, {
    tableName: 'local_by_date_home'
  });
};
