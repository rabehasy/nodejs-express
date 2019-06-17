/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('abonne_by_eventlieu', {
    abonne_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'newsletter_abonne',
        key: 'id'
      }
    },
    foreign_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'event_lieu',
        key: 'id'
      }
    }
  }, {
    tableName: 'abonne_by_eventlieu'
  });
};
