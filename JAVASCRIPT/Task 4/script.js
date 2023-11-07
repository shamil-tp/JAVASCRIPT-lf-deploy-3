function validate(){
    var email =document.getElementById("username");
    var password =document.getElementById("password");

    if (email.value.trim() =="" || password.value.trim() =="")
    {
        alert("Fill all");
        return false;
    }
    else
    {
        true;
    }

}