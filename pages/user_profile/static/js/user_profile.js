const updateDetailsButton = document.getElementById('updateDetails');
const saveButton1 = document.getElementById('saveButton');
const meetingButton = document.getElementById('myMeetings');
const logoutButton = document.getElementById('logout');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const age = document.getElementById('age');
const phone = document.getElementById('phone');

const errorMsg = document.querySelector('.errorMsg');
const meetingListContainer = document.getElementById('meetingList');
let j=0;
const users = [
    {
        firstName: 'Roni',
        lastName: 'Chen',
        age: 28,
        email: 'hamber@post.bgu.ac.il',
        password: '12345678',
        phoneNumber: '0527967566',
        joinDate: new Date()
    },
    {
        firstName: 'shir',
        lastName: 'hamber',
        age: 25,
        email: 'shirhambera@gmail.com',
        password: '12121212',
        phoneNumber: '0528198984',
        joinDate: new Date()
    }
];


function populateUserDetails() {
        if (! (sessionStorage.getItem('isLoggedIn'))) {
            // If not logged in, prevent the default action and redirect to user_connection.html

            alert('אתה צריך להתחבר כדי שתוכל להיכנס לחשבון שלך');
            window.location.href = 'user_connection.html';
             }else{
    let emailUser = sessionStorage.getItem('whichUser');
    // Loop through the users array to find the user with the matching email
    for (let i = 0; i < users.length; i++) {
        if (emailUser === users[i].email) {
            // Set the values of the input fields with user details
            firstName.value = users[i].firstName;
            lastName.value = users[i].lastName;
            email.value = users[i].email;
            age.value = users[i].age;
            phone.value = users[i].phoneNumber;
            j=i;
            break; // Once user details are populated, exit the loop
        }}
    }
}

// Call the function to populate user details when the page loads
populateUserDetails();

updateDetailsButton.addEventListener('click', function(e) {
    e.preventDefault();
    errorMsg.textContent = '';
    // Enable all input fields
    firstName.disabled = false;
    lastName.disabled = false;
    email.disabled = false;
    age.disabled = false;
    phone.disabled = false;
    // Hide the Update Details button
    updateDetailsButton.style.display = 'none';
    meetingButton.style.display = 'none';
    // Display the Save button
    saveButton1.style.display = 'inline-block';
    // Remove any existing error messages
    document.querySelectorAll('.error-message').forEach(function(element) {
        element.remove();
    });
});

saveButton1.addEventListener('click', function(e) {
    e.preventDefault();
    errorMsg.textContent = '';
    // Validate first name
    if (!isValidInput(firstName.value)) {
        displayErrorMessage(firstName, 'First name is a mandatory field');
        return;
    } else {
        removeErrorMessage(firstName);
        if (!isValidName(firstName.value)) {
            displayErrorMessage(firstName, 'Please enter a valid first name with at least 2 letters');
            return;
        }
    }
    // Validate last name
    if (!isValidInput(lastName.value)) {
        displayErrorMessage(lastName, 'Last name is a mandatory field');
        return;
    } else {
        removeErrorMessage(lastName);
        if (!isValidName(lastName.value)) {
            displayErrorMessage(lastName, 'Please enter a valid last name with at least 2 letters');
            return;
        }
        // Check if first name and last name are in the same language
        if (!isSameLanguage(firstName.value, lastName.value)) {
            displayErrorMessage(lastName, 'Last name must be in the same language as the first name');
            return;
        }
    }

    if (!isValidEmail(email.value)) {
        displayErrorMessage(email, 'Please enter a valid email address');
        return;
    } else {
        removeErrorMessage(email);
    }
    // Validate age
    if (!isValidInput(age.value)) {
        displayErrorMessage(age, 'Age is a mandatory field');
        return;
    } else {
        removeErrorMessage(age);
        if (!isValidAge(age.value)) {
            displayErrorMessage(age, 'Please enter a valid age between 16 and 100');
            return;
        }
    }

    if (!isValidInput(phone.value)) {
        displayErrorMessage(phone, 'Phone number is a mandatory field');
        return;
    } else {
        removeErrorMessage(phone);
        if (!isValidPhoneNumber(phone.value)) {
            displayErrorMessage(phone, 'Please enter a valid phone number with 10 digits');
            return;
        }
    }

            users[j].firstName = firstName.value;
            users[j].lastName = lastName.value;
            users[j].email = email.value;
            users[j].age = age.value;
            users[j].phoneNumber = phone.value;



    alert('Your profile has been updated successfully.'); // If all inputs are valid, display success message
    // Show the Update Details button again
    updateDetailsButton.style.display = 'inline-block';
    meetingButton.style.display = 'inline-block';
    // Hide the Save button
    saveButton1.style.display = 'none';
    // Disable all input fields
    firstName.disabled = true;
    lastName.disabled = true;
    email.disabled = true;
    age.disabled = true;
    phone.disabled = true;
});

function isValidInput(value) {
    return value.trim() !== '';
}

function isValidName(name) {
    return /^[A-Za-zא-ת\s]{2,}$/.test(name);
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidAge(age) {
    const parsedAge = parseInt(age);
    return !isNaN(parsedAge) && parsedAge >= 16 && parsedAge <= 100;
}

function isValidPhoneNumber(phoneNumber) {
    // Check if phone number starts with the digit 0 and consists of 10 digits
    return /^0\d{9}$/.test(phoneNumber);
}

function isSameLanguage(firstName, lastName) {
    const isHebrew = /^[א-ת]+$/.test(firstName);
    const isEnglish = /^[A-Za-z]+$/.test(firstName);
    if (isHebrew) {
        return /^[א-ת]+$/.test(lastName);
    } else if (isEnglish) {
        return /^[A-Za-z]+$/.test(lastName);
    }
    return false; // If first name is not in Hebrew or English
}

meetingButton.addEventListener('click', function(e) {
    e.preventDefault();
    window.location.href = 'meetings_user.html';
});

logoutButton.addEventListener('click', function(e) {
    e.preventDefault();

    sessionStorage.removeItem('isLoggedIn');
    sessionStorage.removeItem('whichUser');
    alert('התנתקת בהצלחה!');
    window.location.href = 'user_connection.html';
});