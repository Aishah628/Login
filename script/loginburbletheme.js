// Login Form Handler
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('form-page');
    const rememberCheckbox = document.getElementById('Remember-me');
    const forgotPasswordLink = document.getElementById('remember-forgot');
    const registerLink = document.getElementById('register');

    // Handle Login
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username && password) {
            // Remember me functionality
            if (rememberCheckbox.checked) {
                localStorage.setItem('rememberedUsername', username);
            } else {
                localStorage.removeItem('rememberedUsername');
            }

            console.log('Login attempt:', { username, password });
            // Add your login API call here
            alert('Login successful!');
        } else {
            alert('Please fill in all fields');
        }
    });

    // Load remembered username
    const rememberedUsername = localStorage.getItem('rememberedUsername');
    if (rememberedUsername) {
        document.getElementById('username').value = rememberedUsername;
        rememberCheckbox.checked = true;
    }

    // Forgot Password
    forgotPasswordLink.addEventListener('click', function(e) {
        e.preventDefault();
         window.location.href = '/forgotpassword.html';
    });

    // Register Link
    registerLink.addEventListener('click', function(e) {
        e.preventDefault();
         window.location.href = '/register.html';
    });
});