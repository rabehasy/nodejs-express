/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('event_heure_event_lieu', {
    event_heure_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'event_heure',
        key: 'id'
      }
    },
    event_lieu_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'event_lieu',
        key: 'id'
      }
    }
  }, {
    tableName: 'event_heure_event_lieu'
  });
};
