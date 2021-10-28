const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "admin" && password === "123Abc##") {
        let user_record = username;
        alert("You have successfully logged in as ADMIN. ");
        
        location.replace("file:///C:/xampp/htdocs/practice/admin-index.html");
    }  else if (username === "userA" && password === "123##"){
        alert("You have successfully logged in as USER A.");
        location.replace("file:///C:/xampp/htdocs/practice/admin-index%20-%20Copy.html");
    }  else if (username === "userB" && password === "Abc##"){
        alert("You have successfully logged in as USER B.");
        location.replace("file:///C:/xampp/htdocs/practice/admin-index%20-%20Copy.html");
    }
    else {
        loginErrorMsg.style.opacity = 1;
    }
})
 