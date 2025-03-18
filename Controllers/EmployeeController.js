const employees = require('../Models/Employeemodel')

exports.addEmployee = async (req, res) => {
    try {
        const { Name, Department, Salary, Phone } = req.body
        console.log(Name, Department, Salary, Phone)
        const existing = await employees.findOne({ Phone })
        if (existing) {
            res.status(406).json("employee already exists")
        }
        else {
            const newEmployee = new employees({ Name, Department, Salary, Phone })
            await newEmployee.save()
            res.status(200).json(newEmployee)
        }
    }
    catch (e) {
        console.log(e)
        res.status(406).json(e)
    }
}

exports.getEmployees = async (req, res) => {
    try {
        const employeelist = await employees.find()
        res.status(200).json(employeelist)
    }
    catch (err) {
        console.log(err)
        res.status(400).json(err)
    }
}

exports.deleteEmployee = async(req,res)=>{
    try{
        const{id}=req.params
        const result=await employees.findByIdAndDelete(id)
        res.status(200).json("Deleted")
    }
    catch (err) {
        console.log(err)
        res.status(400).json(err)
    }
}
exports.updateEmployee = async (req, res) => {
    try {
        const { id } = req.params
        const { Name, Department, Salary, Phone  } = req.body
        const result = await employees.findByIdAndUpdate(id, {  Name, Department, Salary, Phone })
        res.status(200).json("Updated")

        
    }
    catch (err) {
        console.log(err)
        res.status(400).json(err)
    }
}