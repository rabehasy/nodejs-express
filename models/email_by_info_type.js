/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('email_by_info_type', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    authorinfotype_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'event_by_member_authorinfo_type',
        key: 'id'
      }
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    objetmail: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'email_by_info_type'
  });
};
