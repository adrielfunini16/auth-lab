const emailRegex = /^[a-zA-Z\d_.$+!#%&*?-]+@[a-zA-Z\d-]+\.[a-zA-Z]{2,}$/;
const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/;

function validateEmail(str) {
    return emailRegex.test(str);
}

function validatePassword(str) {
    return passwordRegex.test(str);
}

module.exports = { validateEmail, validatePassword };