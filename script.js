//your code here
const userContainer = document.getElementById("user-container");
const userPhoto = document.getElementById("user-photo");
const userName = document.getElementById("user-name");
const ageBtn = document.querySelector("button[data-attr='age']");
const emailBtn = document.querySelector("button[data-attr='email']");
const phoneBtn = document.querySelector("button[data-attr='phone']");
const age = document.getElementById("age");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const getUserBtn = document.getElementById("getUser");

// Display user data
function displayUserData(user) {
  userPhoto.src = user.picture.large;
  userName.textContent = `${user.name.first} ${user.name.last}`;
}

// Display age
function displayAge(user) {
  age.textContent = user.dob.age;
  email.textContent = "";
  phone.textContent = "";
}

// Display email
function displayEmail(user) {
  age.textContent = "";
  email.textContent = user.email;
  phone.textContent = "";
}

// Display phone
function displayPhone(user) {
  age.textContent = "";
  email.textContent = "";
  phone.textContent = user.phone;
}

// Get random user data
function getRandomUserData() {
  return fetch("https://randomuser.me/api/")
    .then((response) => response.json())
    .then((data) => data.results[0]);
}

// Display initial data
getRandomUserData().then((user) => {
  displayUserData(user);
});

// Handle button clicks
ageBtn.addEventListener("click", () => {
  getRandomUserData().then((user) => {
    displayAge(user);
  });
});

emailBtn.addEventListener("click", () => {
  getRandomUserData().then((user) => {
    displayEmail(user);
  });
});

phoneBtn.addEventListener("click", () => {
  getRandomUserData().then((user) => {
    displayPhone(user);
  });
});

getUserBtn.addEventListener("click", () => {
  getRandomUserData().then((user) => {
    displayUserData(user);
    age.textContent = "";
    email.textContent = "";
    phone.textContent = "";
  });
});
