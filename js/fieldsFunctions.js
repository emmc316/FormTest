function checkName(){

var name = document.getElementById("name").value;

if(name.length>=0 && name.length<3){
    document.getElementById("ernom").innerHTML = "This field must be greather or equal than 4";
    document.getElementById("ernom").style.color="red"
    return false;
    }
    else{
        document.getElementById("ernom").innerHTML = "field accepted";
    document.getElementById("ernom").style.color="green"
    }
    return true;
}

function checkSurName(){
    var surname = document.getElementById("surname").value;

if(surname.length>=0 && surname.length<=4){
    document.getElementById("ersur").innerHTML = "This field must be greather or equal than 4";
    document.getElementById("ersur").style.color="red"
    return false;
    }
    else{
        document.getElementById("ersur").innerHTML = "field accepted";
    document.getElementById("ersur").style.color="green"
    return true;    
    }
}

function checkEmail(){
    var email = document.getElementById("email").value
    if(email.length>6){
        document.getElementById("eremai").innerHTML = "field accepted";
        document.getElementById("eremai").style.color="red";

    }
    else
    document.getElementById("eremai").innerHTML = "Type a valid email!";
        document.getElementById("eremai").style.color="green";
        return true;
        return false;
}

function checkPasswords(){
    var pass1 = document.getElementById("pwd").value;
    var pass2 = document.getElementById("pwd2").value;
    if(pass1 == pass2 && pass1.length!=0 && pass2.length!=0){
        document.getElementById("equalPass").innerHTML = "The passwords are equal"
        document.getElementById("equalPass").style.color="green";
        return true;
    }

    else{
        document.getElementById("equalPass").innerHTML = "The passwords are not equal"
        document.getElementById("equalPass").style.color="red";                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
        return false;
    }
}

function checkDate(){
    var date = document.getElementById("dt").value;
    if(date!=null){
        document.getElementById("dter").innerHTML = "Date accepted";
        document.getElementById("dter").style.color = "green";
        return true;
    }

    else{
        document.getElementById("dter").innerHTML = "Date invalid";
        document.getElementById("dter").style.color = "red";
        return false;
    }
}


function checkFields(){
    
    var x = 0;
    if(checkName()){
        x++;
    }

    if(checkSurName()){
        x++;
    }
    
    if(checkPasswords()){
        x++;
    }

    if(checkEmail()){
        x++;
    }

    if(checkDate()){
        x++;
    }

    if(x==5){
        alert("Registro exitoso\nBienvenido "+document.getElementById("name").value+" "+document.getElementById("surname").value);
       
    }

    else{
        document.getElementById("status").innerHTML = "Something was wrong. <br>Check the fields!";
        document.getElementById("status").style.color="red";
    }

}
