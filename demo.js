const form = document.getElementById('loginForm');
const statusMessage = document.getElementById('statusMessage');
const passwordInput = document.getElementById('password');
const togglePasswordButton = document.getElementById('togglePassword');

function showMessage(message, type) {
    statusMessage.textContent = message;
    statusMessage.className = `status-message ${type}`;
}

function setPasswordVisibility(isVisible) {
    passwordInput.type = isVisible ? 'text' : 'password';
    togglePasswordButton.textContent = isVisible ? 'Hide' : 'Show';
    togglePasswordButton.setAttribute('aria-pressed', String(isVisible));
}

togglePasswordButton.addEventListener('click', function () {
    setPasswordVisibility(passwordInput.type === 'password');
});

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!email || !password) {
        showMessage('Please enter both email and password.', 'error');
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        showMessage('Please enter a valid email address.', 'error');
        return;
    }

    if (password.length < 6) {
        showMessage('Password must be at least 6 characters long.', 'error');
        return;
    }

    showMessage('Login successful! Redirecting...', 'success');
    form.reset();
    setPasswordVisibility(false);
});
