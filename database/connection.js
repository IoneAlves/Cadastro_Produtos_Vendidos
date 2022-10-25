const Sequelize = require('sequelize');
const mysql = require('mysql');

const sequelize = new Sequelize('loja', 'root', '', {
    host: 'localhost',
    define: {freezeTableName: true},
    query: {raw: true},
    dialect: 'mysql',
    port: 3306
  });

sequelize.authenticate().then(()=>{
    let connectedAt = new Date();
    console.log(`Conectado em: ${connectedAt}`)
    }).catch((err)=>{
        if (err) throw err;
        console.log('Conectado.');
    });

module.exports = {
    sequelize
}