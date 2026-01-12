const container = document.querySelector(".container");
const loginBtn = document.querySelector(".login-btn");
const registerBtn = document.querySelector(".register-btn");
registerBtn.addEventListener("click", () => {
  container.classList.add("active");
});
loginBtn.addEventListener("click", () => {
  container.classList.remove("active");
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
