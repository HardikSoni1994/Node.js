const mongoose = require('mongoose');

const employeeSchema = mongoose.Schema(
    {
    employee_name: {
        type: String,
        require: true,
    },
    employee_email: {
        type: String,
        require: true,
    },
    employee_password: {
        type: String,
        require: true,
    },
    employee_salary: {
        type: Number,
        require: true,
    },
    employee_hobby: {
        type: Array,
        require: true,
    },
    employee_designation: {
        type: String,
        require: true,
    },
    employee_gender: {
        type: String,
        require: true,
    },

});

module.exports = mongoose.model("Employee", employeeSchema, "Employee");