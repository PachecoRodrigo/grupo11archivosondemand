const {sequelize, DataTypes} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
const Product = sequelize.define('Product', {
    title: DataTypes.STRING,
    price: DataTypes.INTEGER,
    description: DataTypes.STRING,
    image: DataTypes.STRING,
    category_id: DataTypes.INTEGER,
    created_user_id: DataTypes.INTEGER

},{
    underscored: true,
    timestamps: true
});

Product.associate = (models =>{
    Product.belongsTo(models.Category);
    Product.belongsToMany(models.User,{
        as: 'users',
        through: 'users_products'
    });
});

return Product
}