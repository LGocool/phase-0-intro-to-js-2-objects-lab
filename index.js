// Write your solution in this file!
const employee={
    person:{}, 
    streetAddress:{} }
 function updateEmployeeWithKeyAndValue(employee,person, streetAddress){
    const copyOfEmployee = {...employee};
        copyOfEmployee[person] = streetAddress;
    return copyOfEmployee;
 }

 function destructivelyUpdateEmployeeWithKeyAndValue(employee,person,streetAddress){
    employee[person]= streetAddress;
        return employee;
 }

 function deleteFromEmployeeByKey(employee,person,){
    const copyOfEmployee = {...employee};
         delete copyOfEmployee[person];
             return copyOfEmployee;
 }

 function  destructivelyDeleteFromEmployeeByKey(employee,streetAddress){
    delete employee[streetAddress];
        return employee;
 }

