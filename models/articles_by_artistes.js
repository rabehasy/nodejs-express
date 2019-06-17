/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('articles_by_artistes', {
    artiste_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'event_artistes_dj_organisateurs',
        key: 'id'
      }
    },
    article_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'articles_event',
        key: 'id'
      }
    }
  }, {
    tableName: 'articles_by_artistes'
  });
};
