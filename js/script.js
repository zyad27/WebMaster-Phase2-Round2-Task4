// Register Page
const registerForm = document.querySelector("#registerForm")
const registerEmail = document.querySelector("#registerEmailField")
const registerName = document.querySelector("#registerNameField")
const registerPassword = document.querySelector("#registerPasswordField")
const toggleBtn = document.querySelector("#toggleBtn")
// Log in page
const loginForm = document.querySelector("#loginForm")
const loginEmail = document.querySelector("#loginEmailField")
const loginPassword = document.querySelector("#loginPasswordField")
// Welcome page
const userName = document.querySelector("#userName")
// checking data logic
const checkValue = (field, storedData)=>{
    if(field.value == storedData){
        window.location.href ="welcome.html"
    }
    else loginPassword.nextSibling.nextSibling.innerHTML = `<p class="alert alert-danger"> Incorrect Email or Password </p>`
}

// Register start
if (registerForm) {
    registerForm.addEventListener("submit", (e) => {
        e.preventDefault()
        const savedName = registerName.value
        const savedEmail = registerEmail.value
        const savedPassword = registerPassword.value
        if((savedName == "") || (savedEmail  == "") || (savedPassword == "")){
            registerPassword.nextSibling.nextSibling.innerHTML = `<p class="alert alert-danger"> Insert Your Data </p>`
        }
        else{
            localStorage.setItem("name", savedName)
            localStorage.setItem("email", savedEmail)
            localStorage.setItem("password", savedPassword)
            registerPassword.nextSibling.nextSibling.innerHTML = `<p class="alert alert-success"> Data Stored Successfully </p>`
            registerName.value = ""
            registerEmail.value = ""
            registerPassword.value = ""
            toggleBtn.classList.remove("d-none")
        }
    })
}
// Register end
// Log-in Start
if(loginForm){
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault()
        const comparedEmail = localStorage.getItem("email")
        const comparedPssword = localStorage.getItem("password")
        if ((loginEmail.value == "") || (loginPassword.value == "")){
            loginPassword.nextSibling.nextSibling.innerHTML = `<p class="alert alert-danger"> Please Insert Email and Password </p>`
        }
        else{
            checkValue(loginEmail, comparedEmail)
            checkValue(loginPassword, comparedPssword)
        }
    })
}
if(userName){
    userName.innerText = localStorage.getItem("name")
}


// Log-in End

