var userName = document.querySelector("#userName");
var email = document.querySelector("#email");
var password = document.querySelector("#password");
var siginInBtn = document.querySelector("#siginUp");

siginInBtn.addEventListener('click',function(p){
    p.preventDefault();
    if(userName.value === "" || email.value === "" || password.value === ""){
        alert("please fill data !! ");
    }
    else{
        localStorage.setItem("userName", userName.value);
        localStorage.setItem("email", email.value);
        localStorage.setItem("password" ,password.value);

        setTimeout(()=>{
            window.location = "login.html"
        },1500)
    }
})

