let userName = document.querySelector('#userName');
let password = document.querySelector('#password');
let loginBtn = document.querySelector('#login');

let getuserName = localStorage.getItem("userName");
let getpassword =localStorage.getItem("password")


loginBtn.addEventListener('click' , function(p){
    p.preventDefault();
    if(userName.value.trim() === "" || password.value === ""){
        alert(" please fill data!! ")
    }
    else {
        if ( getuserName && getuserName.trim() === userName.value.trim() &&   getpassword && getpassword.trim() === password.value.trim()){
        
        setTimeout(()=>{
            window.location = 'index.html'
        },1500)
       }
       else{
        alert("userName or passward is wrong")
       }
     }
})