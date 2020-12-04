function validateUser(){
    var user_email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if(user_email == ""){
        alert("Enter Email/Username");
        return false;
    }
    else if(password == ""){
        alert("Enter Password");
        return false;
    }
}



function createUser(){
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;


    
    if(name == "" || email==""){
        alert("Enter Email/Username");
        return false;
    }
    else if(password == ""){
        alert("Enter Password");
        return false;
    }

}


function oUser(){
    
    var pemail = document.getElementById('newemail').value;
    if(pemail ==  "  "){
        alert("Enter Email");
        // return false;
      
    }
    // else
    // alert("enter email")
    
}














// let users = JSON.parse(localStorage.getItem("users")) ;
// 	let loggedIn = localStorage.getItem("loggedIn") ;


