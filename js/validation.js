document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form-main');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        event.stopPropagation();
        validateEmail();
        validatePassword();
        verifyPassword();
        if (!form.checkValidity()) {
            form.classList.add('was-validated');
            return;
        }
    });
});

function validateEmail() {
    const email = document.getElementById('email');
    const feedback = document.getElementById('emailFeedback');

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!emailPattern.test(email.value)) {
        email.setCustomValidity('Invalid');
        feedback.textContent = 'Your email must contain "@" and a domain';
    }
}

function validatePassword() {
    const password = document.getElementById('password');
    const feedback = document.getElementById('passwordFeedback');
    const value = password.value;
    const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    password.setCustomValidity('');

    password.classList.remove('is-invalid', 'is-valid');

    if (value.length <= 3) {
        password.setCustomValidity('Invalid');
        feedback.textContent = 'Must be at least 8 characters';
        password.classList.add('is-invalid');
        return;
    }
    else if (value.length <= 8 && !pattern.test(password.value)) {
        password.setCustomValidity('Invalid');
        feedback.textContent = '❌ Must be at least 8 characters, include uppercase, lowercase, number, and special character.';
        password.classList.add('is-invalid');
    }
    else if (value.length <= 8 && pattern.test(password.value)) {
        feedback.textContent = '✅ Strong password!';
        password.classList.add('is-valid');
    }
    else {
        password.setCustomValidity('Invalid');
        feedback.textContent = 'Invalid password';
        password.classList.add('is-invalid');
    }

}

function verifyPassword() {
    const password = document.getElementById('password');
    const confirmPassword =
        document.getElementById('confirmPassword');
    if (password.value !== confirmPassword.value) {
        confirmPassword.setCustomValidity('Passwords do not match');
    } else {
        confirmPassword.setCustomValidity('');
    }
}

function togglePassword() {
    const passwordInput = document.getElementById('password');
    const showPassword = document.getElementById('showPassword');
    const confirmPassword = document.getElementById('confirmPassword');
    passwordInput.type = showPassword.checked ? 'text' : 'password';
    confirmPassword.type = showPassword.checked ? 'text' : 'password';
}