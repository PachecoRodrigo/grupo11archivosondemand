const {sequelize, DataTypes} = require('sequelize');

module.exports = (sequelize, dataTypes) =>{

    const Item = sequelize.define('Item',{
        price: dataTypes.INTEGER,
        user_id: dataTypes.INTEGER,
        product_id: dataTypes.INTEGER,
        order_id: dataTypes.INTEGER,
        state: dataTypes.INTEGER,
    },{
        underscored: true,
        timestamps: true,
        tableName: 'items'
    });

Item.associate = (models =>{
        Item.belongsTo(models.Product, {foreignKey: 'product_id' });
    });


    return Item

}
