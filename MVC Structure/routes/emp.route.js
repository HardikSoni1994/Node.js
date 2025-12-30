const express = require('express');
const { employeePage, insertEmployee, allEmployeePage, deleteEmployee, editEmployee, updateEmployee, errorpage } = require('../controllers/employee.controller');

const empRoute = express.Router();

empRoute.get('/', employeePage);
empRoute.post('/addEmployee', insertEmployee);
empRoute.get('/allEmployeePage', allEmployeePage);
empRoute.get('/delete/:id', deleteEmployee);
empRoute.get('/edit/:id', editEmployee);
empRoute.post('/update/:id', updateEmployee);
empRoute.get('/error', errorpage);

module.exports = empRoute;