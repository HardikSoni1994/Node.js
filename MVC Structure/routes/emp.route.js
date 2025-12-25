const express = require('express');
const { employeePage } = require('../controllers/employee.controller');

const empRoute = express.Router();

empRoute.get('/', employeePage);

module.exports = empRoute;