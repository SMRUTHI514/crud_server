const mongoose = require('mongoose')

const employeeSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Department: {
        type: String,
        required: true
    },
    Salary: {
        type: Number,
        required: true
    },
    Phone: {
        type: Number,
        required: true,
        // unique: true
    }
   
})

const employees = mongoose.model('employees', employeeSchema)
module.exports = employees