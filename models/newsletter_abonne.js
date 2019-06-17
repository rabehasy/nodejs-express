/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('newsletter_abonne', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    inscrit_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    desinscrit: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    desinscrit_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    infos: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    country_isoCode: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    country_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    city_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    location_timeZone: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    source: {
      type: DataTypes.STRING(100),
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
    tableName: 'newsletter_abonne'
  });
};
