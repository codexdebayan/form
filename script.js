function validation(){
    var isValid = true;

    if(document.myForm.name.value == ""){
        document.getElementById("errorname").innerHTML = "*Name cannot be left blank";
        isValid = false;
    }else{
        document.getElementById("errorname").innerHTML = "";
    }

    if(document.myForm.email.value == ""){
        document.getElementById("erroremail").innerHTML = "*Email cannot be left blank";
    }
    else{
        document.getElementById("erroremail").innerHTML = ""
    }
    if(document.myForm.cities.value == "Select"){
        document.getElementById("errorcity").innerHTML = "*City cannot be left blank";
    }
    else{
        document.getElementById("errorcity").innerHTML = ""
    }
    if(document.myForm.gender.value == ""){
        document.getElementById("errorgender").innerHTML = "*Gender cannot be left blank";
    }
    else{
        document.getElementById("errorgender").innerHTML = ""
    }
    if(document.myForm.password.value == ""){
        document.getElementById("errorpassword").innerHTML = "*Password cannot be left blank";
    }
    else{
        document.getElementById("errorpassword").innerHTML = ""
    }
    
    if(document.myForm.checkbox.checked == false){
        document.getElementById("errorcheck").innerHTML = "*Checkbox is unchecked";
    }
    else{
        document.getElementById("errorcheck").innerHTML = ""
    }
    
    return isValid;
}