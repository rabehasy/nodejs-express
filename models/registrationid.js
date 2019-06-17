/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('registrationid', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    registration_id: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    ip_address: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    android_modelname: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    android_version: {
      type: DataTypes.STRING(255),
      allowNull: false
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
    device_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'registrationid'
  });
};
