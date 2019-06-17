/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('artiste_by_groupartists', {
    child_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'event_artistes_dj_organisateurs',
        key: 'id'
      }
    },
    parent_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'event_artistes_dj_organisateurs',
        key: 'id'
      }
    }
  }, {
    tableName: 'artiste_by_groupartists'
  });
};
