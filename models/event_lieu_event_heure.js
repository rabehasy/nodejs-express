/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('event_lieu_event_heure', {
    event_lieu_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'event_lieu',
        key: 'id'
      }
    },
    event_heure_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'event_heure',
        key: 'id'
      }
    }
  }, {
    tableName: 'event_lieu_event_heure'
  });
};
