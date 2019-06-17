/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('abonne_alerte', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    newsletter_abonne_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'newsletter_abonne',
        key: 'id'
      }
    },
    event_artistes_dj_organisateurs_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'event_artistes_dj_organisateurs',
        key: 'id'
      }
    },
    event_lieu_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'event_lieu',
        key: 'id'
      }
    },
    countries_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'countries',
        key: 'id'
      }
    },
    region_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'region',
        key: 'id'
      }
    },
    locality_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'locality',
        key: 'id'
      }
    },
    quartier_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'quartier',
        key: 'id'
      }
    }
  }, {
    tableName: 'abonne_alerte'
  });
};
