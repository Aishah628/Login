const signUpButton = document.getElementById('signInButton');
const signInButton = document.getElementById('signUpButton');
const signInForm = document.getElementById('signUpForm');
const signUpForm = document.getElementById('signInForm');
signUpButton.addEventListener('click',() => {

    signInForm.style.display = 'none';
    signUpForm.style.display = 'block';
});
signInButton.addEventListener('click',() => {

    signInForm.style.display = 'block';
    signUpForm.style.display = 'none';
    
});