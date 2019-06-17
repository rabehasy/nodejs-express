/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('event_by_member_email_authorinfo_type', {
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
    enable: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    }
  }, {
    tableName: 'event_by_member_email_authorinfo_type'
  });
};
