var user_register = document.getElementById('register')
var user_login = document.getElementById('login')


All_User=[
    // Add User Data
]

// function register() {
    
// }

user_register.addEventListener('click',function(){
    var user_name = document.getElementById('username').value
    var user_email = document.getElementById('email').value
    var user_password = document.getElementById('password').value
    var user_role=document.getElementById('role').value

  

    all_user_data={

        UserName:user_name,
        UserEmail:user_email,
        UserPass:user_password,
        UserRole:user_role
    }

    All_User.push(all_user_data)

    var multiuser=JSON.stringify(All_User)

    localStorage.setItem('All_User',multiuser)
    alert('Sigin in Successful')
})
// function regester() {
    

// }


function flag(){
   localStorage.setItem('Is_login','false')
}

function pageprotect(){
   var flag =localStorage.getItem('is_login')
   if (flag==="false") {
    window.location.href='login.html'
   }
}

// function pageprotect() {
//     var flag = localStorage.getItem('Is_login') || "false"; // Default false
//     if (flag === "false") {
//         window.location.href = 'login.html';
//     }
//  }
 



function Login(){
    var user_email = document.getElementById('email').value
    var user_password = document.getElementById('password').value

    console.log(user_email);
    
    var local_user_data = JSON.parse(localStorage.getItem("All_User"))
    var userAuth = local_user_data.find(Options=> Options.UserEmail==user_email && Options.UserPass== user_password);
    localStorage.setItem('Is_login','true')
 

    if (userAuth.UserRole=="Admin") {
        window.location.href="admin.html"
    }else if (userAuth.UserRole=="Customer") {
        window.location.href="customer.html"
    } else{   
        alert("Wrong Email & Password")
    }
}