document.addEventListener('DOMContentLoaded', function () {
    const firstNameInput = document.getElementById('firstName');
    const lastNameInput = document.getElementById('lastName');
    const ageInput = document.getElementById('age');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const phoneNumberInput = document.getElementById('phoneNumber');
    const signupBtn = document.getElementById('signupBtn');


    // Add event listener to the signup button
    signupBtn.addEventListener('click', function (e) {
        e.preventDefault();

        // Reset error messages
        clearErrorMessages();

        // Validate input fields
        const isValidFirstName = validateInput(firstNameInput, 'אנא מלא שם פרטי');
        const isValidLastName = validateInput(lastNameInput, 'אנא מלא שם משפחה');
        const isValidAge = validateAge(ageInput);
        const isValidEmail = validateEmailFormat(emailInput);
        const isValidPassword = validatePassword(passwordInput);
        const isValidPhoneNumber = validatePhoneNumberFormat(phoneNumberInput);

        // Check if all inputs are valid
        if (isValidFirstName && isValidLastName && isValidAge && isValidEmail && isValidPassword && isValidPhoneNumber) {
            // All inputs are valid
            class User {
                 constructor( firstName, lastName,age,email, password, phoneNumber) {
                     this.firstName = isValidFirstName;
                     this.lastName = isValidLastName;
                     this.age = isValidAge;
                    this.email = isValidEmail;
                     this.password = isValidPassword;
                    this.phoneNumber = isValidPhoneNumber;
                    this.joinDate = new Date();


                 }
             }

            alert('שלום!ההרשמה בוצעה בהצלחה');
                        isLoggedIn = true;


                        sessionStorage.setItem('isLoggedIn', 'true');

            // Redirect to user_profile.html
            window.location.href = 'user_profile.html';
            // Set the global variable indicating user login status to true
        }
    });
});