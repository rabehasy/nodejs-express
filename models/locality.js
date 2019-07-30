/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    const locality = sequelize.define('locality', {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        region_id: {
            type: DataTypes.INTEGER(11),
            allowNull: true,
            references: {
                model: 'region',
                key: 'id'
            }
        },
        name: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        postal_code: {
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
        },
        slug: {
            type: DataTypes.STRING(255),
            allowNull: false,
            unique: true
        }
    }, {
        tableName: 'locality',
        underscored: true
    }, {
        hooks: {
            beforeCount(options) {
                options.raw = true;
            }
        }
    });

    // eslint-disable-next-line no-unused-vars
    locality.associate = function (models) {
        // Define associations here
        // See http://docs.sequelizejs.com/en/latest/docs/associations/

        const {
            region,
            quartier
        } = models;

        locality.belongsTo(region);
        locality.hasMany(quartier);

    };

    return locality;
};
