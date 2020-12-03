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


    // perform validation
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
    
    var pemail = document.getElementById('lemail').value;
    if(pemail ==  "  "){
        alert("Enter Email");
        return false;
    }
    
}