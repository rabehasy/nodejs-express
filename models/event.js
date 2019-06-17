/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('event', {
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
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    date_debut: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    date_fin: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    rrule: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    contact_event: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    resa_prevente: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    acces_transport: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    date_unique: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    heure_debut: {
      type: DataTypes.TIME,
      allowNull: true
    },
    heure_fin: {
      type: DataTypes.TIME,
      allowNull: true
    },
    heure_fin_aube: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    prixunique: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    prixenclair: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    t3id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    entreetype_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'entree_type',
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
    },
    hidden: {
      type: DataTypes.INTEGER(1),
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
    position: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    category: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    eventlieu_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'event_lieu',
        key: 'id'
      }
    },
    flyer: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    cancelledAt: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    indexed: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    flyercancelled: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    orig_slug: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    dateclair: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    opt_dateclair: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    api_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'api',
        key: 'id'
      }
    }
  }, {
    tableName: 'event'
  });
};
