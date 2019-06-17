/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('search', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    query: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    date_from: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    date_to: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  }, {
    tableName: 'search'
  });
};
