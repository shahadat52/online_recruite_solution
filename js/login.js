const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
});

const handleLogin = () => {
    const userName = document.getElementById("login-name").value;
    const email = document.getElementById("login-password").value;
    console.log(userName, email);
    // location.href = "./navbar.html";
   const navigate = location.assign("navbar.html")
   console.log(navigate);
};

const handleSignup = (e) => {

    const name = document.getElementById("sign-name").value;
    const password = document.getElementById("sign-password").value;
    const email = document.getElementById("sign-email").value;
    console.log(name, email, password);
    window.location.replace("navbar.js")
};
