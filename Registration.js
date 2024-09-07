// var a=10;
// // var b="Hello";
// // var c={firstname:"Adam", lastname:"Smith"};
// // console.log(a);
// // console.log(b);
// // console.log(c);
// var mysql=require('mysql');
// var con=mysql.createConnection(
//     {
//         host:"localhost",
//         user: "root",
//         password: "password"
//     }
// );
// con.connect(function (err)  
// {  if (err) throw err;
//     console.log("Connected");
// con.query("USE mydb", function (err,result){
//     if (err) throw err;
//     console.log("Database used");
// });
// var sql="CREATE TABLE users (full_name varchar(30), email varchar(30), password varchar(30), phone_number numeric)";
// con.query(sql, function(err, result){
//     if(err) throw err;
//     console.log("Table Created");
// });
// var sql="insert into customers values('charles','10')";
// con.query(sql, function (err,result) {
//     if (err) throw err;
//     console.log("1 record inserted");
// });
// });
// JavaScript code
function storeFormData(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    var fullName = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var confirmEmail = document.getElementById("confirmEmail").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    const phoneNumber = document.getElementById("phoneNumber").value;
    const regex = /^[0-9]+$/;
    // Insert form data into MySQL database
    // const sql = `INSERT INTO users (full_name, email, password, phone_number) VALUES (?, ?, ?, ?)`;
    // connection.query(sql, [fullName, email, password, phoneNumber], (err, result) => {
    //   if (err) throw err;
    //   console.log('Record inserted successfully');
    // });

    // Validate form data (e.g., check if email and confirmEmail match)
    if (email !== confirmEmail) {
      alert("Email and Confirm Email do not match");
      return;
    }

    if (password !== confirmPassword) {
      alert("Password and Confirm Password do not match");
      return;
    }

    if (!regex.test(phoneNumber)) 
    {
      alert('Phone number should only contain digits.');
      return;
    }

    // Create an object to store the form data
    var formData = {
      fullName: fullName,
      email: email,
      password: password,
      phoneNumber: phoneNumber
    };

    // Store the form data in local storage
    localStorage.setItem("formData", JSON.stringify(formData));

    // Redirect to the signup page
    window.location.href = "SignIn.html";
  };

    

     