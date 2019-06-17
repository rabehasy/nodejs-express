/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('event_by_member', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    thematique_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'event_type',
        key: 'id'
      }
    },
    author_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'fos_user',
        key: 'id'
      }
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    flyer: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    event_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'event',
        key: 'id'
      }
    },
    status_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'event_by_member_status',
        key: 'id'
      }
    },
    infos: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    authorinfotype_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'event_by_member_authorinfo_type',
        key: 'id'
      }
    },
    emailauthorinfotype_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'event_by_member_email_authorinfo_type',
        key: 'id'
      }
    }
  }, {
    tableName: 'event_by_member'
  });
};
