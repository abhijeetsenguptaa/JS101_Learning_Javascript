// Given stored username and password and input username and password, Print if the user can login or not.

let database_username = "abc@gmail.com";
let database_password = "1234@";


let username = "abc@gmail.com";
let password = "1234@";

if (database_username == username) {

  if (database_password == password) {
    console.log("Welcome to Facebook!");
  }
  else {
    console.log("Wrong Password!");
  }
} else {
  console.log("Wrong Credentials!! ");
}