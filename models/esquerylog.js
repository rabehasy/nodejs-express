/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('esquerylog', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    query: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    hits: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    hidden: {
      type: DataTypes.INTEGER(1),
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
    tableName: 'esquerylog'
  });
};
