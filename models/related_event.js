/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('related_event', {
    event_source: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'event',
        key: 'id'
      }
    },
    event_target: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'event',
        key: 'id'
      }
    }
  }, {
    tableName: 'related_event'
  });
};
