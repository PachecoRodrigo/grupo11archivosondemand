module.exports = (sequelize, dataTypes) =>{

    const User = sequelize.define('User',{
        first_name: dataTypes.STRING,
        last_name: dataTypes.STRING,
        email: dataTypes.STRING,
        password: dataTypes.STRING,
    },{
        underscored: true,
        timestamps: true
    })


    return User

}