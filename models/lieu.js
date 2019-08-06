/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    const lieu = sequelize.define('lieu', {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        address: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        gps: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        tel: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        email: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        facebook: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        www: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        logo: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        t3id: {
            type: DataTypes.INTEGER(11),
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
        country_id: {
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
        },
        updated_at: {
            type: DataTypes.DATE,
            allowNull: true
        },
        orig_slug: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: true
        }
    }, {
        tableName: 'event_lieu',
        underscored: true,
        timestamps: true,
        deletedAt: 'deletedAt'
    }, {
        hooks: {
            beforeCount(options) {
                options.raw = true;
            }
        }
    });

    // eslint-disable-next-line no-unused-vars
    lieu.associate = function (models) {
        // Define associations here
        // See http://docs.sequelizejs.com/en/latest/docs/associations/

        const {
            country,
            region,
            locality,
            quartier
        } = models;

        lieu.belongsTo(country);
        lieu.belongsTo(region);
        lieu.belongsTo(locality);
        lieu.belongsTo(quartier);

    };

    return lieu;
};
