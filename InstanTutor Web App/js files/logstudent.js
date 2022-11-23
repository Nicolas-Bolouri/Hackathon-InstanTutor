// DOM components
const loginEl = document.querySelector(".submit");
const usernameEl = document.querySelector(".username");
const passwordEl = document.querySelector(".password");

// Initializing student emails and student dictionary
let allStudents = {};
let allStudentEmails = [];

// Create new student function
const createStudent = function (name, username, email, password) {
  let user = {};
  user["name"] = name;
  user["email"] = email;
  user["password"] = password;
  user["subjects"] = [];

  allStudentEmails.push(email);
  allStudents[username] = user;
};

// Creating test students
createStudent(
  "Test Student 1",
  "test_student_1",
  "test@student1.com",
  "test_student_1_pwd"
);

createStudent("Luke", "luke", "luke@student.com", "luke123456789");

createStudent("Nic", "nic", "nic@student.com", "nic123456789");

createStudent("Liam", "liam", "liam@student.com", "liam123456789");

createStudent("Tiff", "tiff", "tiff@student.com", "tiff123456789");

// Username box
usernameEl.onchange = () => (temp_username = usernameEl.value);

// Passowrd box
passwordEl.onchange = () => (temp_password = passwordEl.value);

// Processing log in claim
loginEl.addEventListener("click", function () {
  // Username
  const temp_username = usernameEl.value;
  console.log(temp_username);

  // Password
  const temp_password = passwordEl.value;
  console.log(temp_password);

  // Check if user in data base
  if (!(temp_username in allStudents)) {
    document.querySelector(".errorMessage").textContent =
      "User not in database! Please try again.";
  } else if (temp_password != allStudents[temp_username]["password"]) {
    document.querySelector(".errorMessage").textContent =
      "Incorrect password! Please try again.";
  } else {
    window.location.href = "studentcenter.html";
  }
});
