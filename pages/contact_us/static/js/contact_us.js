const formButton  = document.getElementById('formButton');

    const firstNameInput = document.getElementById('firstName');
    const lastNameInput = document.getElementById('lastName');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const messageInput = document.getElementById('message');


    const isValidFirstName = validateInput(firstNameInput, 'אנא מלא את השם הפרטי');
    const isValidLastName = validateInput(lastNameInput, 'אנא מלא את שם המשפחה');
    const isValidEmail = validateEmailFormat(emailInput);
    const isValidPhone = validatePhoneNumberFormat(phoneInput);
    const isValidMessage = validateInput(messageInput, 'אנא מלא את ההודעה');
    const isNameLanguageValid = validateNameLanguage(firstNameInput.value, lastNameInput.value);
const listItem = document.createElement('li');
formButton.addEventListener('click', function (e) {
    e.preventDefault();
    if (isValidFirstName && isValidLastName && isValidEmail && isValidPhone && isValidMessage && isNameLanguageValid) {

        addFormEntryToList(firstNameInput.value, lastNameInput.value, emailInput.value, phoneInput.value, messageInput.value);


        clearInputFields();


        alert('הטופס נשלח בהצלחה');
    }
});

function addFormEntryToList(firstName, lastName, email, phone, message) {

    listItem.textContent = `שם פרטי: ${firstName}, שם משפחה: ${lastName}, אימייל: ${email}, טלפון: ${phone}, הודעה: ${message}`;

    // Get the list element and append the new list item
    const formEntriesList = document.getElementById('formEntriesList');
    formEntriesList.appendChild(listItem);
}

function clearInputFields() {
    document.getElementById('firstName').value = '';
    document.getElementById('lastName').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('message').value = '';
}



