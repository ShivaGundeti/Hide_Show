
// const password = document.getElementById("pass");
// // const show = document.getElementById("fa-eye");
// const hidepass = document.getElementById("fa-regular")
// // const hidepass = document.querySelector("i");
// // const passhide = document.getElementById("hide");
// // console.log(hidepass);

// // console.log(hidepass);

// // hidepass.onclick = function () {

// // }

// function s() {
//     if(password.type == "password") {
//         password.type = "text";
//         hidepass.classList.add("fa-eye");
//         console.log(hidepass.classList);

//     }else {
//         password.type = "password";
//         // hidepass.classList.remove("fa-eye");
//         // console.log(hidepass.classList);

//     }
// }

function togglePasswordVisibility() {
    var passwordInput = document.getElementById("password");
    var closedEye = document.getElementById("closedEye");
    var openEye = document.getElementById("openEye");
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        closedEye.style.display = "none";
        openEye.style.display = "inline";
    } else {
        passwordInput.type = "password";
        closedEye.style.display = "inline";
        openEye.style.display = "none";
    }
}