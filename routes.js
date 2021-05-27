const express = require('express');

// Acessos
const ControllerBase = require('./api/ControllerBase');

const routes = express.Router();

//users
routes.get('/users/:table', ControllerBase.getAll);
routes.get('/users/:table/:id', ControllerBase.getById);
routes.post('/users/:table', ControllerBase.create);
routes.put('/users/:table/:id', ControllerBase.update);
routes.delete('/users/:table/:id', ControllerBase.delete)

//debtTypes
routes.get('/debtTypes/:table', ControllerBase.getAll);
routes.get('/debtTypes/:table/:id', ControllerBase.getById);
routes.post('/debtTypes/:table', ControllerBase.create);
routes.put('/debtTypes/:table/:id', ControllerBase.update);
routes.delete('/debtTypes/:table/:id', ControllerBase.delete)

//financial-transactions
routes.get('/financialTransactions/:table', ControllerBase.getAll);
routes.get('/financialTransactions/:table/:id', ControllerBase.getById);
routes.post('/financialTransactions/:table', ControllerBase.create);
routes.put('/financialTransactions/:table/:id', ControllerBase.update);
routes.delete('/financialTransactions/:table/:id', ControllerBase.delete)

//financial-transactions types
routes.get('/financialTransactionTypes/:table', ControllerBase.getAll);
routes.get('/financialTransactionTypes/:table/:id', ControllerBase.getById);
routes.post('/financialTransactionTypes/:table', ControllerBase.create);
routes.put('/financialTransactionTypes/:table/:id', ControllerBase.update);
routes.delete('/financialTransactionTypes/:table/:id', ControllerBase.delete)

//wallets
routes.get('/wallets/:table', ControllerBase.getAll);
routes.get('/wallets/:table/:id', ControllerBase.getById);
routes.post('/wallets/:table', ControllerBase.create);
routes.put('/wallets/:table/:id', ControllerBase.update);
routes.delete('/wallets/:table/:id', ControllerBase.delete)

module.exports = routes;