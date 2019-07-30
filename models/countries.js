/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    const country = sequelize.define('country', {
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
        tableName: 'countries',
        underscored: true
    }, {
        hooks: {
            beforeCount(options) {
                options.raw = true;
            }
        }
    });

    // eslint-disable-next-line no-unused-vars
    country.associate = function (models) {
        // Define associations here
        // See http://docs.sequelizejs.com/en/latest/docs/associations/

        const {
            region
        } = models;

        country.hasMany(region);
    };

    return country;
};
