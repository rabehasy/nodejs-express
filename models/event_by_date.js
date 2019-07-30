/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('event_by_date', {
    event_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'event',
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
    tableName: 'event_by_date',
      timestamps: false
  });
};
