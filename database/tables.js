const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('./connection')

const tabelaVendas = sequelize.sequelize.define('vendas', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true
  },
    data: {
        type: DataTypes.DATEONLY,
        allowNull: false
  },
    produto: {
        type: DataTypes.STRING,
        allowNull: false
  },
    preco: {
        type: DataTypes.STRING,
        allowNull: false
  },
    desconto: {
        type: DataTypes.INTEGER,
        allowNull: false
  },
    vendedor: {
        type: DataTypes.STRING,
        allowNull: false
  }
}, {
    timestamps: false
});

module.exports = {
    tabelaVendas
}










