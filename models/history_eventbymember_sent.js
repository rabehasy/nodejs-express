/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('history_eventbymember_sent', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    eventbymember_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'event_by_member',
        key: 'id'
      }
    },
    event_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'event',
        key: 'id'
      }
    },
    authorinfotype_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'event_by_member_authorinfo_type',
        key: 'id'
      }
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'history_eventbymember_sent'
  });
};
