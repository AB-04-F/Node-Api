const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
    return sequelize.define('tbl_customer', {
        user_id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        user_name: {
            type: DataTypes.STRING(250),
            allowNull: false
        },
        user_email: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        user_password: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        user_image: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        user_orders: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        created_date: {
            type: DataTypes.DATEONLY,
            allowNull: false,
            defaultValue: Sequelize.Sequelize.fn('current_timestamp')
        },
        last_logged_in: {
            type: DataTypes.DATEONLY,
            allowNull: false,
            defaultValue: Sequelize.Sequelize.fn('current_timestamp')
        }
    }, {
        sequelize,
        tableName: 'tbl_customer',
        timestamps: false,
        indexes: [{
            name: "PRIMARY",
            unique: true,
            using: "BTREE",
            fields: [
                { name: "user_id" },
            ]
        }, ]
    });
};