function rotateEmployeesEqually(desksCount, employeesCount) {

  //Edge Case
  if(employeesCount < desksCount){
     return console.log("Its a 5 day work week for all the employees")
  }

  // Calculate the total number of shifts over 52 weeks
  let totalShifts = 5 * 52 * desksCount;

  // Calculate the number of shifts each employee gets
  let shiftsPerEmployee = Math.floor(totalShifts / employeesCount);




  // Initialize queues
  let desksQueue = Array.from({ length: desksCount }, (_, index) => 'Desk ' + (index + 1));
  let employeesQueue = Array.from({ length: employeesCount }, (_, index) => 'Employee ' + (index + 1));

  //Initialise the object to keep count of the shifts finished by employees

  let obj = {}

  for (let i =0;i < employeesQueue.length;i++){
    obj[employeesQueue[i]] = 0
  }



  // Rotate employees for 52 weeks
  for (let week = 1; week <= 52; week++) {
      console.log("Week " + week + ":");

      // Assign employees to desks for the current week
      for (let day = 1; day <= 5; day++) {
          console.log("Day " + day + ":");

          for (let i = 0; i < desksCount; i++) {


              // Dequeue an employee and desk
              let employee = employeesQueue.shift();
              let desk = desksQueue.shift();

              // Validate if the employee has the bandwidth of his shifts
              if(obj[employee] < shiftsPerEmployee){

              // Assign the employee to the desk
              console.log( employee + " is assigned to " + desk);

              //Increase the count of shifts the employee fulfilled 
              obj[employee]++
              }

              // Enqueue the employee and desk back into the queues
              employeesQueue.push(employee);
              desksQueue.push(desk);


          }

          console.log(""); // Add a blank line for readability

      }

      console.log(""); // Add a blank line between weeks
      
      console.log("Shifts so far",obj)
  }
}

// Parameters of desks and employees
let desksCount = 10;
let employeesCount = 200;

// Rotate employees equally for 52 weeks
rotateEmployeesEqually(desksCount, employeesCount);
