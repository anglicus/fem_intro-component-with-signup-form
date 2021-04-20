const form = document.getElementById("signup-form");
const firstNameField = document.getElementById("first-name");
const lastNameField = document.getElementById("last-name");
const emailField = document.getElementById("email");
const passwordField = document.getElementById("password");


firstNameField.addEventListener('invalid', e => {
    e.preventDefault();
    document.getElementById("first-name-error").classList.remove('hidden');
    firstNameField.classList.add('invalid');
});

lastNameField.addEventListener('invalid', e => {
    e.preventDefault();
    document.getElementById("last-name-error").classList.remove('hidden');
    lasttNameField.classList.add('invalid');
});

emailField.addEventListener('invalid', e => {
    e.preventDefault();
    if (emailField.validity.valueMissing) {
        document.getElementById("email-empty-error").classList.remove('hidden');
    }
    if (emailField.validity.typeMismatch) {
        document.getElementById("email-format-error").classList.remove('hidden');
        emailField.classList.add('invalid');
    }        
});

passwordField.addEventListener('invalid', e => {
    e.preventDefault();
    document.getElementById("password-error").classList.remove('hidden');
    passwordField.classList.add('invalid');
})

form.addEventListener('submit', e => {
    e.preventDefault();
    // as this is just a mockup, no code for actually submitting data
    errorMessages = document.querySelectorAll('.error-msg');
    errorMessages.forEach(msg => {
        msg.classList.add("hidden");
    });
    inputFields = document.querySelectorAll('input');
    inputFields.forEach(field => {
        field.classList.remove('invalid');
    })
})