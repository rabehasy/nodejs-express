/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    const region = sequelize.define('region', {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        country_id: {
            type: DataTypes.INTEGER(11),
            allowNull: true,
            references: {
                model: 'countries',
                key: 'id'
            }
        },
        name: {
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
        slug: {
            type: DataTypes.STRING(255),
            allowNull: false,
            unique: true
        }
    }, {
        tableName: 'region',
        underscored: true
    }, {
        hooks: {
            beforeCount(options) {
                options.raw = true;
            }
        }
    });

    // eslint-disable-next-line no-unused-vars
    region.associate = function (models) {
        // Define associations here
        // See http://docs.sequelizejs.com/en/latest/docs/associations/

        const {
            country,
            locality
        } = models;

        region.belongsTo(country);
        region.hasMany(locality);
    };

    return region;
};
