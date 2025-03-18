const express=require("express")
const empController=require('../Controllers/EmployeeController')
const router=express.Router()

router.post('/addemp',empController.addEmployee)
router.get('/emplist',empController.getEmployees)
router.delete('/delemp/:id',empController.deleteEmployee)
router.put('/updateemp/:id',empController.updateEmployee)
module.exports=router