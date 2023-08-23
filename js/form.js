let form = document.getElementById("myForm");
let dataArea = document.getElementById("dataArea");
let password = document.getElementById("password");
let errorArea = document.getElementById("error");

window.onload = function () {
    
  //Storing data in localStorage
  //localStorage.setItem("user1", JSON.stringify(userData));

  //Retrieving data from local storage
  let user = JSON.parse(localStorage.getItem("user1"));
  dataArea.innerHTML =
    "Hello " +
    user.firstname +
    " " +
    user.lastname +
    "<br/>Hope you are doing well. This is the message you gave us:<br/>" +
    user.message +
    "<br/>" +
    "From " +
    user.email;
};

error.style.color = "green";
dataArea.style.textAlign = "center";
password.addEventListener("keyup", function (e) {
  let passwordString = e.target.value;
  if (passwordString.length < 8) {
    errorArea.innerHTML = "Password must be at least 8 characters long.";
  } else {
    errorArea.innerHTML = "";
  }
});
form.addEventListener("submit", function (e) {
  e.preventDefault();
  let firstname = document.getElementById("fname").value;
  let lastname = document.getElementById("lname").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let sex = document.getElementById("sex").value;
  let message = document.getElementById("message").value;
  //Validating form Data
  if (
    firstname == "" ||
    lastname == "" ||
    email == "" ||
    password == "" ||
    sex == "" ||
    message == ""
  ) {
    alert("All fields are required");
  }
  if (firstname.length < 8) {
    alert("First name must be at least 8 characters");
  }
  if (lastname.length < 8) {
    alert("First name must be at least 8 characters");
  }
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email");
  }

  if (password.length < 8) {
    alert("Password must be at least 8 characters");
  }

  const userData = {
    firstname: firstname,
    lastname: lastname,
    email: email,
    password: password,
    sex: sex,
    message: message,
  };
  //Using localStorage to store and retrieve the user data.

  //Storing data in localStorage
  localStorage.setItem("user1", JSON.stringify(userData));
});
