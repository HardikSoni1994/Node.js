const Employee = require('../models/employee.model');

const employeePage = (req, res) => {
   return res.render('employeeForm', { employee: null });
}

const errorpage = (req, res) => {
   return res.render('error');
}

// Insert Employee

const insertEmployee = async (req, res) => {
   console.log("Insert Employee");
   console.log(req.body);

   try {
      const insEmployee = await Employee.create(req.body);

      if (insEmployee) {
         console.log("Employee Inserted Successfully..");
         return res.redirect('/employee');
      }
      else {
         console.log("Employee insertion Fail..");
      }
   }catch(e) {
      console.log(e);
      console.log(e.message);
   }finally {
      console.log("Finally");  
   }
}
   // All Employee
   const allEmployeePage = async (req, res) => {

     try {
          const allEmployee = await Employee.find();

      return res.render('allEmployeePage', {allEmployee});
     } catch (e) {
      console.log(e);
      console.log(e.message);
      return res.redirect('/employee/error');
     }
   }

   // Delete employee
   const deleteEmployee = async (req, res) => {
      const id = req.params.id;

      try {
         const delEmp = await Employee.findByIdAndDelete(id);

      if (delEmp) {
         console.log("Employee Deleted Successfully..");
         return res.redirect('/employee/allEmployeePage');
      }
      else {
         console.log("employee Deletion failed.. ");
      }
      
      } catch (e) {
         console.log(e);
         console.log(e.message);
         return res.redirect('/employee/error');
         
      }finally{
         console.log("Finally");
         
      }
   };

   // Edit Employee
   const editEmployee = async (req, res) => {
      const id = req.params.id;
      try {
         const employee = await Employee.findById(id);
         return res.render('updateEmployeePage', { employee });
      } catch (e) {
         console.log(e);
         console.log(e.message);
         return res.redirect('/employee/error');
      }finally{ 
         console.log("Finally"); 
      }
   };

   // Update Employee
   const updateEmployee = async (req, res) => {
      const id = req.params.id;
      try {
         const updatedEmp = await Employee.findByIdAndUpdate(id, req.body);
      
      if (updatedEmp) {
         console.log("Employee Updated Successfully..");
         return res.redirect('/employee/allEmployeePage');
      } else {
         console.log("Employee Updation Failed..");
      }
      } catch (e) {
         console.log(e);
         console.log(e.message);
         return res.redirect('/employee/error')
      }finally{
         console.log("Finally");
      }
   };

   module.exports = { 
      employeePage, 
      insertEmployee, 
      allEmployeePage, 
      deleteEmployee,
      editEmployee,
      updateEmployee,
      errorpage
   };

