/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('registrationid_user', {
    registrationid_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'registrationid',
        key: 'id'
      }
    },
    user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'fos_user',
        key: 'id'
      }
    }
  }, {
    tableName: 'registrationid_user'
  });
};
