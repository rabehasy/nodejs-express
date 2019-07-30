/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    const commonEvent = sequelize.define('common_event', {
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
        startdate: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        enddate: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        recurrence: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        slug: {
            type: DataTypes.STRING(255),
            allowNull: false,
            unique: true
        },
        local_id: {
            type: DataTypes.INTEGER(11),
            allowNull: true,
            references: {
                model: 'event',
                key: 'id'
            }
        },
        hidden: {
            type: DataTypes.INTEGER(1),
            allowNull: true
        },
        event_grouped: {
            type: DataTypes.INTEGER(1),
            allowNull: true
        },
        orig_slug: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        startdate_home: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        enddate_home: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        parent_id: {
            type: DataTypes.INTEGER(11),
            allowNull: true,
            references: {
                model: 'event_local',
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
        }
    }, {
        tableName: 'event_local',
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
    commonEvent.associate = function (models) {
        // Define associations here
        // See http://docs.sequelizejs.com/en/latest/docs/associations/

        const {
            date
        } = models;

        commonEvent.belongsToMany(date, {
            through: 'local_by_date',
            foreignKey: 'event_local_id',
            otherKey: 'event_date_id',
            timestamps: false
        });

        commonEvent.belongsToMany(date, {
            through: 'local_by_date_home',
            as: 'date_home',
            foreignKey: 'event_local_id',
            otherKey: 'event_date_id',
            timestamps: false
        });

    };

    return commonEvent;
};
