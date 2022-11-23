// DOM components
const loginEl = document.querySelector(".submit");
const usernameEl = document.querySelector(".username");
const passwordEl = document.querySelector(".password");

// Initializing tutor emails and tutor dictionary
let allTutors = {};
let allTutorEmails = [];

// Create new tutor function
const createTutor = function (name, username, email, password) {
  let user = {};
  user["name"] = name;
  user["email"] = email;
  user["password"] = password;
  user["subjects"] = [];

  allTutorEmails.push(email);
  allTutors[username] = user;
};

// Creating test tutors
createTutor(
  "Test Tutor 1",
  "test_tutor_1",
  "test@tutor.com",
  "test_tutor_1_pwd"
);

createTutor("Luke", "luke", "luke@tutor.com", "luke123456789");

createTutor("Nic", "nic", "nic@tutor.com", "nic123456789");

createTutor("Liam", "liam", "liam@tutor.com", "liam123456789");

createTutor("Tiff", "tiff", "tiff@tutor.com", "tiff123456789");

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
  if (!(temp_username in allTutors)) {
    document.querySelector(".errorMessage").textContent =
      "User not in database! Please try again.";
  } else if (temp_password != allTutors[temp_username]["password"]) {
    document.querySelector(".errorMessage").textContent =
      "Incorrect password! Please try again.";
  } else {
    window.location.href = "tutorcenter.html";
  }
});
