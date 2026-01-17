const LoginForm= document.getElementById('loginForm');
const signupForm= document.getElementById('signupForm');
const showSignupBtn= document.getElementById('showSignup');
const showLoginBtn= document.getElementById('showLogin');

showSignupBtn.addEventListener('click', ()=>{
    LoginForm.classList.add('hidden');
    signupForm.classList.remove('hidden');
});
showLoginBtn.addEventListener('click', ()=>{
    LoginForm.classList.remove('hidden');
    signupForm.classList.add('hidden');
});

const socialIconsgoogle = document.querySelectorAll(".google");
    socialIconsgoogle.forEach(icon => { 
        icon.addEventListener("click", (e) => {
            e.preventDefault();
            window.location.href = "https://accounts.google.com/signin";
        });
    });

    const socialIconsfacebook = document.querySelectorAll(".facebook"); 
    socialIconsfacebook.forEach(icon => {
        icon.addEventListener("click", (e) => {
            e.preventDefault();
            window.location.href = "https://www.facebook.com/login/";
        });
    });

    const socialIconsgithub = document.querySelectorAll(".github"); 
    socialIconsgithub.forEach(icon => {
        icon.addEventListener("click", (e) => {
            e.preventDefault();
            window.location.href = "https://www.github.com/login/";
        });     
    });

    const socialIconslinkedin = document.querySelectorAll(".linkedin"); 
    socialIconslinkedin.forEach(icon => {
        icon.addEventListener("click", (e) => {
            e.preventDefault();
            window.location.href = "https://www.linkedin.com/login/";
        });
         }); 