const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Interview extends Model {}

Interview.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        interview_number: {
            type: DataTypes.INTEGER,
        },
        interview_date: {
            type: DataTypes.DATE,
        },
        thank_you_note_sent: {
            type: DataTypes.DATE,
        },
        follow_up_email: {
            type: DataTypes.DATE,
        },
        application_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'application',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'interview',
    }
);

module.exports = Interview;