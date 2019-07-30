/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    const artistes = sequelize.define('artistes', {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        event_id: {
            type: DataTypes.INTEGER(11),
            allowNull: true,
            references: {
                model: 'event',
                key: 'id'
            }
        },
        name: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        type: {
            type: DataTypes.STRING(100),
            allowNull: true
        },
        crdate: {
            type: DataTypes.DATE,
            allowNull: true
        },
        vztid: {
            type: DataTypes.INTEGER(11),
            allowNull: true
        },
        slug: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        position: {
            type: DataTypes.INTEGER(11),
            allowNull: true
        },
        category: {
            type: DataTypes.STRING(128),
            allowNull: true
        },
        orig_slug: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        photo: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        updated_at: {
            type: DataTypes.DATE,
            allowNull: true
        }
    }, {
        tableName: 'event_artistes_dj_organisateurs',
        underscored: true,
        timestamps: false
    }, {
        hooks: {
            beforeCount(options) {
                options.raw = true;
            }
        }
    });

    // eslint-disable-next-line no-unused-vars
    artistes.associate = function (models) {
        // Define associations here
        // See http://docs.sequelizejs.com/en/latest/docs/associations/
    };

    return artistes;
};
