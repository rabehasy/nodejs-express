/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    const date = sequelize.define('date', {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        date: {
            type: DataTypes.DATEONLY,
            allowNull: false,
            unique: true
        }
    }, {
        tableName: 'event_date',
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
    date.associate = function (models) {
        // Define associations here
        // See http://docs.sequelizejs.com/en/latest/docs/associations/
    };

    return date;
};
