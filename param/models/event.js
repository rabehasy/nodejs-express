/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    const event = sequelize.define('event', {
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
        }
    }, {
        tableName: 'event',
        underscored: true,
        timestamps: false
    });

    // eslint-disable-next-line no-unused-vars
    event.associate = function (models) {
        const {
            api,
            entree,
            flyers,
            lieu,
            thematique,
            artistes,
            date,
            common_event,
            event
        } = models;


        event.belongsTo(api);

        event.belongsTo(entree, {
            foreignKey: 'entreetype_id'
        });

        event.belongsToMany(flyers, {
            through: 'event_event_flyers',
            foreignKey: 'event_id',
            timestamps: false

        });

        event.belongsToMany(lieu, {
            through: 'event_event_lieu',
            foreignKey: 'event_id',
            otherKey: 'event_lieu_id',
            timestamps: false
        });

        event.belongsToMany(thematique, {
            through: 'event_event_type',
            foreignKey: 'event_id',
            otherKey: 'event_type_id',
            timestamps: false
        });

        event.belongsToMany(artistes, {
            through: 'event_event_artistes_dj_organisateurs',
            foreignKey: 'event_id',
            otherKey: 'event_artistes_dj_organisateurs_id',
            timestamps: false
        });

        event.belongsToMany(date, {
            through: 'event_by_date',
            foreignKey: 'event_id',
            otherKey: 'event_date_id',
            timestamps: false
        });

        event.belongsToMany(common_event, {
            through: 'event_event_local',
            foreignKey: 'event_id',
            otherKey: 'event_local_id',
            timestamps: false
        });

        event.belongsToMany(event, {
            through: 'related_event',
            as: 'eventRelated',
            foreignKey: 'event_source',
            otherKey: 'event_target',
            timestamps: false
        });
    };
    return event;
};
