/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    const quartier = sequelize.define('quartier', {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        locality_id: {
            type: DataTypes.INTEGER(11),
            allowNull: true,
            references: {
                model: 'locality',
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
        tableName: 'quartier',
        underscored: true
    }, {
        hooks: {
            beforeCount(options) {
                options.raw = true;
            }
        }
    });

    // eslint-disable-next-line no-unused-vars
    quartier.associate = function (models) {
        // Define associations here
        // See http://docs.sequelizejs.com/en/latest/docs/associations/

        const {
            locality
        } = models;

        quartier.belongsTo(locality);

    };

    return quartier;
};
