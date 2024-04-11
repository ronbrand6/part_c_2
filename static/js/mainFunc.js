
function loadMeetings() {
    const meetingsData = localStorage.getItem('meetings');
    if (meetingsData) {
        meetings = JSON.parse(meetingsData);
    }
}

// Function to save meetings to localStorage
function saveMeetings() {
    localStorage.setItem('meetings', JSON.stringify(meetings));
}


loadMeetings();


  const errorMessage = document.createElement('span');


function displayErrorMessage(input, message) {
    // Remove any existing error message
    const existingErrorMessage = input.nextElementSibling;
    if (existingErrorMessage && existingErrorMessage.classList.contains('error-message')) {
        existingErrorMessage.textContent = message;
        return;
    }

      errorMessage.textContent = message;
    errorMessage.classList.add('error-message');
     // Insert the error message after the input field
    input.insertAdjacentElement('afterend', errorMessage);
}


    // Function to remove error message
    function removeErrorMessage(input) {
        const existingErrorMessage = input.nextElementSibling;
        if (existingErrorMessage && existingErrorMessage.classList.contains('error-message')) {
            existingErrorMessage.remove();
        }
    }

    // Function to validate name
    function isValidName(name) {
        return /^[A-Za-zא-ת]{2,}$/.test(name);
    }

    // Function to validate email
    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    // Function to validate age
    function isValidAge(age) {
        const parsedAge = parseInt(age);
        return !isNaN(parsedAge) && parsedAge >= 16 && parsedAge <= 100;
    }

    // Function to validate phone number
    function isValidPhoneNumber(phoneNumber) {
        return /^\d{10}$/.test(phoneNumber) && phoneNumber.startsWith('0');
    }

    // Function to check if first and last name are in the same language
    function isSameLanguage(firstName, lastName) {
        const isHebrew = /^[א-ת]+$/.test(firstName);
        const isEnglish = /^[A-Za-z]+$/.test(firstName);
        if (isHebrew) {
            return /^[א-ת]+$/.test(lastName);
        } else if (isEnglish) {
            return /^[A-Za-z]+$/.test(lastName);
        }
        return false;
    }


    function clearErrorMessages() {
        document.querySelectorAll('.error-message').forEach(function(element) {
            element.remove();
        });
    }


    function displaySuccessMessage(message) {
        alert(message);
    }

    // Function to validate input
    function validateInput(input, message) {
    // Check if the input field is empty
    if (!input.value.trim()) {
        displayErrorMessage(input, 'All fields are required');
        return false;
    }

        // Check if the input is the first name or last name and validate its length
        if ((input.id === 'firstName' || input.id === 'lastName') && input.value.trim().length < 2) {
            displayErrorMessage(input, 'Please enter at least 2 characters');
            return false;
        }
        // Remove any existing error message
        removeErrorMessage(input);
        return true;

}


    // Function to validate name input language
    function validateNameLanguage(firstName, lastName) {
        const isHebrewFirstName = /^[א-ת]+$/.test(firstName);
        const isHebrewLastName = /^[א-ת]+$/.test(lastName);
        const isEnglishFirstName = /^[A-Za-z]+$/.test(firstName);
        const isEnglishLastName = /^[A-Za-z]+$/.test(lastName);
        if (!(isHebrewFirstName || isEnglishFirstName)) {
            displayErrorMessage(firstName, 'Please enter text in Hebrew or English only');
            return false;
        }
        if (!(isHebrewLastName || isEnglishLastName)) {
            displayErrorMessage(lastName, 'Please enter text in Hebrew or English only');
            return false;
        }
        if ((isHebrewFirstName && isEnglishLastName) || (isEnglishFirstName && isHebrewLastName)) {
            displayErrorMessage(lastName, 'Please enter text in the same language');
            return false;
        }
        return true;
    }

    // Function to validate phone number input format
    function validatePhoneNumberFormat(phone) {
        if (!validateInput(phone, 'Please fill in your phone number')) return false;

        if (!isValidPhoneNumber(phone.value)) {
            displayErrorMessage(phone, 'Please enter a phone number with 10 digits starting with 0');
            return false;
        } else {
            removeErrorMessage(phone);
            return true;
        }
    }

    // Function to validate email address format
    function validateEmailFormat(email) {
        if (!validateInput(email, 'Please fill in your email')) return false;

        if (!isValidEmail(email.value)) {
            displayErrorMessage(email, 'Please enter a valid email address');
            return false;
        } else {
            removeErrorMessage(email);
            return true;
        }
    }

    // Customer array
let customers = [
    {
        firstName: 'רוני',
        lastName: 'חן',
        age: 28,
        email: 'hamber@post.bgu.ac.il',
        password: '12345678',
        phoneNumber: '0527967566',
        joinDate: new Date()
    },
    {
        firstName: 'שיר',
        lastName: 'המבר',
        age: 25,
        email: 'shirhambera@gmail.com',
        password: '12121212',
        phoneNumber: '0528198984',
        joinDate: new Date()
    }
];

// Function to add a customer to the array
function addCustomer(customer) {
    customers.push(customer);
}

// Function to remove a customer from the array by email address
function removeCustomerByEmail(email) {
    customers = customers.filter(customer => customer.email !== email);
}

// Function to verify if a customer exists in the array by email and password
function customerExists(email, password) {
    return customers.some(customer => customer.email === email && customer.password === password);
}



// Adding a customer
const newCustomer = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    email: 'johndoe@example.com',
    password: 'abcdef',
    phoneNumber: '1234567890',
    joinDate: new Date()
};
addCustomer(newCustomer);
console.log("After adding a customer:", customers);

// Removing a customer by email
const emailToRemove = 'shirhambera@gmail.com';
removeCustomerByEmail(emailToRemove);
console.log("After removing a customer by email:", customers);

// Verifying customer existence
const emailToVerify = 'hamber@post.bgu.ac.il';
const passwordToVerify = '12345678';
console.log(`Customer with email ${emailToVerify} and password ${passwordToVerify} exists:, customerExists(emailToVerify, passwordToVerify)`);