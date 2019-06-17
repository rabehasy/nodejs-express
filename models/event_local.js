/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('event_local', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    startdate: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    enddate: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    recurrence: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    slug: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true
    },
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true
    },
    local_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'event',
        key: 'id'
      }
    },
    hidden: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    event_grouped: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    orig_slug: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    startdate_home: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    enddate_home: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    parent_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'event_local',
        key: 'id'
      }
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
    tableName: 'event_local'
  });
};
