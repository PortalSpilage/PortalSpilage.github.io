/* problem 1 */
 
let emp1 = {
    "firstName" : "Sam",
    "department" : "Tech",
    "designation" : "Manager",
    "salary" : 40000,
    "raiseEligible" : "true"
 };
 let emp2 = {
    "firstName" : "Mary",
    "department" : "Finance",
    "designation" : "Trainee",
    "salary" : 18500,
    "raiseEligible" : "true"
 };
 let emp3 = {
    "firstName" : "Bill",
    "department" : "HR",
    "designation" : "Executive",
    "salary" : 21200,
    "raiseEligible" : "false"
 };
  
 console.log("problem 1");
 console.log(emp1);
 console.log(emp2);
 console.log(emp3);
  
 /* problem 2 */
  
 let JSON = {
    "companyName" : "Tech Stars",
    "website" : "www.techstars.site",
    "employees" : [emp1, emp2, emp3]
 };
  
 console.log("problem 2");
 console.log(JSON);
  
 /* problem 3 */
 let emp4 = {
    "firstName" : "Anna",
    "department" : "Tech",
    "designation" : "Executive",
    "salary" : 25600,
    "raiseEligible" : "false"
 };
 console.log("problem 3")
 JSON.employees.push(emp4);
 console.log(JSON);
  
 /* problem 4 */
 empArr = JSON.employees;
 let totSal = 0;
 for (const emp of empArr){
    totSal += emp.salary;
 }
 console.log("problem 4");
 console.log('The Total Salary for all the employees is: ${totalSal}');
  
 /* problem 5 */
  
 function updateSal(JSON, empArr) {
    for (const empt of empArr) {
        if (emp.raiseEligible === "true"){
            emp.salary = emp.salary * 1.1;
            emp.raiseEligible = "false";
        }
    }
    console.log(JSON);
 }
 console.log("problem 5")
 updateSal(JSON, empArr);
  
 /* problem 6 */
  
 const wfh = ['Anna', 'Sam'];
 for (const emp of empArr) {
    if (wfh.includes(emp.firstName)){
        emp.wfh = "true";
    }
    else{
        emp.wfh = "true";
    }
 }
 console.log("problem 6");
 console.log(JSON);
 
 