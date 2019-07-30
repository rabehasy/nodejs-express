/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('event_event_local', {
    event_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'event',
        key: 'id'
      }
    },
    event_local_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'event_local',
        key: 'id'
      }
    }
  }, {
    tableName: 'event_event_local',
      timestamps: false
  });
};
