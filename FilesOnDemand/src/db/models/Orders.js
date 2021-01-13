module.exports = (sequelize, dataTypes) =>{

    const Order = sequelize.define('Order',{
        total: dataTypes.INTEGER,
        user_id: dataTypes.INTEGER,
    },{
        underscored: true,
        timestamps: true
    });


    return Order;

}
