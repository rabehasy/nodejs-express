/* jshint indent: 2 */

// Utile pour hasher le mot de passe
var bcrypt = require("bcryptjs");

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('fos_user', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: DataTypes.STRING(180),
      allowNull: false
    },
    username_canonical: {
      type: DataTypes.STRING(180),
      allowNull: false,
      unique: true
    },
    email: {
      type: DataTypes.STRING(180),
      allowNull: false
    },
    email_canonical: {
      type: DataTypes.STRING(180),
      allowNull: false,
      unique: true
    },
    enabled: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    salt: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    last_login: {
      type: DataTypes.DATE,
      allowNull: true
    },
    confirmation_token: {
      type: DataTypes.STRING(180),
      allowNull: true,
      unique: true
    },
    password_requested_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    roles: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    facebook_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    facebook_access_token: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    google_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    google_access_token: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    twitterid: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    twitter_token: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    nickname: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    first_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    last_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    profile_picture: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    email_rs: {
      type: DataTypes.STRING(255),
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
    browser_ua_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    browser_ua_ver: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    browser_ua_family: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    browser_ua_company: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    browser_ua_engine: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    browser_os_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    browser_os_family: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    browser_device_name: {
      type: DataTypes.STRING(255),
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
    tableName: 'fos_user',
    underscored: false,
    timestamps: false
  });

    User.prototype.validPassword = function(password) {
        return bcrypt.compareSync(password, this.password);
    };

    return User;
};
