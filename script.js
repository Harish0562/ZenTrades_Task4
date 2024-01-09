function validateLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@]{8,}$/;

    if (!emailRegex.test(username)) {
        alert('Invalid email format for username');
        return;
    }

    if (!passwordRegex.test(password)) {
        alert('Invalid password format. It should contain at least one uppercase letter, one number, and no special characters other than @');
        return;
    }

    if (password === 'SmartServTest@123') {
        window.location.href = 'dashboard.html';
    } else {
        alert('Incorrect password. Please try again.');
    }
}