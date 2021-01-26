module.exports = {
    "development": {
      "username": "root",
      "password": null,
      //"password": "root",
      "database": "filesOnDemand",
      "host": "127.0.0.1",
      "dialect": "mysql",
      "port": "3306"
      //"port": "8889"
      
    },
  "test": {
    "username": "root",
    "password": "root",
    "database": "filesOnDemand",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "port": "8889"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}