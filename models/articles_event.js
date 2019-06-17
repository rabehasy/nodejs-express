/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('articles_event', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    event_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'event',
        key: 'id'
      }
    },
    url: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    event_artistes_dj_organisateurs_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'event_artistes_dj_organisateurs',
        key: 'id'
      }
    },
    addartistes_inevent: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    author: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    content_purify: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'articles_event'
  });
};
