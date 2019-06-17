/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('event_event_artistes_dj_organisateurs', {
    event_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'event',
        key: 'id'
      }
    },
    event_artistes_dj_organisateurs_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'event_artistes_dj_organisateurs',
        key: 'id'
      }
    }
  }, {
    tableName: 'event_event_artistes_dj_organisateurs'
  });
};
