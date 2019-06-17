/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('search_backend_model', {
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
    month: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    year: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  }, {
    tableName: 'search_backend_model'
  });
};
