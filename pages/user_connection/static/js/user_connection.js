const signUpButton = document.getElementById("signUpButton");
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const errorMsg = document.querySelector('.errorMsg');
const signInButton = document.getElementById("signInButton");


function setLoggedInState(isLoggedIn) {
    sessionStorage.setItem('isLoggedIn', isLoggedIn ? 'true' : 'false');
}


class User {
    constructor( firstName, lastName,age,email, password, phoneNumber) {

        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
        this.password = password;
        this.phoneNumber = phoneNumber;
        this.joinDate = new Date();
    }
}

const users = [
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




signInButton.addEventListener('click', (e) => {
    e.preventDefault();
    errorMsg.textContent = '';
    const email = emailInput.value;
    const password = passwordInput.value;
    let isUser = false;
    if (!isValidEmail(email)) {
        errorMsg.textContent = 'הקש בבקשה מייל תקין';
        return;
    }
    if (!isValidPassword(password)) {
        errorMsg.textContent = 'סיסמא צריכה להיות לפחות שמונה תווים או יותר';
        return;
    } else {
        for (let i = 0; i < users.length; i++) {
            if (email === users[i].email && password === users[i].password) {
                alert('ברוכה הבאה'+' '+users[i].firstName )
                isUser = true;
                sessionStorage.setItem('loggedInUserEmail', email);
                sessionStorage.setItem('isLoggedIn', 'true');
                sessionStorage.setItem('whichUser',email );
                window.location.href = "user_profile.html";
                break;
            }
            if (email === users[i].email && password !== users[i].password) {
                alert('סיסמה לא נכונה!')
                isUser = true;
                break;
            }
        }
        if (!isUser) {
            alert('לא נמצא משתמש עם פרטים אלו! בדוק את הרישום שוב');
        }
    }
})

function isValidEmail(email) {
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return validEmail.test(email);
}

function isValidPassword(password) {
    const validPassword = /^\S{8,}$/;
    return validPassword.test(password);
}



// Function to handle the click event for the "Sign Up" button
document.getElementById('signUpButton').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default behavior of the button click

    // Redirect to the sign-up page (user_create.html)
    window.location.href = 'user_create.html';
});