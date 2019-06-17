/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('event_type', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    logo: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    slug: {
      type: DataTypes.STRING(128),
      allowNull: false,
      unique: true
    },
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true
    },
    position: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    category: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    faicon: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    orig_slug: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'event_type'
  });
};
