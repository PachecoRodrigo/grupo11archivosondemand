const {sequelize, DataTypes} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define('Category', {
        name: DataTypes.STRING,
            
    },{
        underscored: true,
        timestamps: true
    });
    Category.associate = (models=>{
        Category.hasMany(models.Product)

    }); 
    return Category
    }