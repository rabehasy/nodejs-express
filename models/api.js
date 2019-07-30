/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    const api = sequelize.define('api', {
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
        }
    }, {
        tableName: 'api',
        underscored: true
    }, {
        hooks: {
            beforeCount(options) {
                options.raw = true;
            }
        }
    });

    // eslint-disable-next-line no-unused-vars
    api.associate = function (models) {
        // Define associations here
        // See http://docs.sequelizejs.com/en/latest/docs/associations/

        const { event } = models;
        api.hasMany(event, { foreignKey: 'api_id' });

    };

    return api;
};
