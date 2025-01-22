function check_all(){
    let message = document.getElementById("title");
    message.style.color = "#ff4e4e";
    message.innerHTML = "Please enter valid details or else the form cannot be submitted: ";
    let name = check_name();
    let usernm = check_username();
    let pass = check_password();
    let rePass = check_repassword();
    let email = validateEmail();
    let reEmail = validateReEmail();
    let phoneNum = check_phone_number();
    let dob = validateEventSelection();
    let age = check_age();
    let building = check_building_number();
    let street  = check_street_name();
    if(name && usernm && pass && rePass && email && reEmail && phoneNum && dob && age && building && street){
        message.innerHTML = "";
        window.alert("The form with your details is submitted! thank you for subscribing!");
        reset_content();
        return true;
    }
    else{
        return false;
    }
}

function reset_content(){
    document.getElementById("form1").reset();
}

// FOR USER DETAILS

// Checks if any value is given by the user or if it's empty
function validateField(fieldID){
    let element = document.getElementById(fieldID);
    if (element.value == ""){
        element.style.borderColor = "red";
        let placeh = element.placeholder = "Enter a value here!";
        return false;
    }
    else{
        element.style.borderColor = "black";
        return true;
    }
}

// validation for full name
function check_name(){
    // regular expression to test if the input only contains alphabets and spaces
    let condition = /^[a-zA-Z\s]+$/; 
    let nm = document.getElementById("name");
    let message = document.getElementById("span1");
    nm = nm.value.trim();
    if (!condition.test(nm)){
        message.style.color = "#ff4e4e";
        message.innerHTML = "Full Name: name can only contain characters.";
        return false;
    }
    else{
        message.innerHTML = "";
        return true;
    }

}

// validation for username
function check_username(){
    // regular expression to test if the input only contains alphabets
    let condition = /^[a-zA-Z]+$/; 
    let nm = document.getElementById("username");
    let message = document.getElementById("span2");
    nm = nm.value.trim();
    if (!condition.test(nm)){
        message.style.color = "#ff4e4e";
        message.innerHTML = "Username: one word name that only contains characters.";
        return false;
    }
    else{
        message.innerHTML = "";
        return true;
    }

}

// validation for password
function check_password(){
    // regular expression to test if the input only contains alphabets
    let condition = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*_).+$/; 
    let nm = document.getElementById("password");
    let message = document.getElementById("span3");
    nm = nm.value.trim();
    if (!condition.test(nm)){
        message.style.color = "#ff4e4e";
        message.innerHTML = "Password: needs to have characters, digits and underscore.";
        return false;
    }
    else{
        message.innerHTML = "";
        return true;
    }

}

// validation for re-password
function check_repassword(){
    // regular expression to test if the input only contains alphabets
    let condition = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*_).+$/; 
    let nm = document.getElementById("password");
    let newPass = document.getElementById("repassword").value;
    let message = document.getElementById("span4");
    nm = nm.value.trim();
    if (!condition.test(nm) || !(nm == newPass)){
        message.style.color = "#ff4e4e";
        message.innerHTML = "Reconfirm Password: it is not the same password entered in the above field.";
        return false;
    }
    else{
        message.innerHTML = "";
        return true;
    }

}

// validation for email
function validateEmail(){
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let email = document.getElementById("email");
    let spanElement = document.getElementById("span5");
    if (!emailPattern.test(email.value)){
       spanElement.style.color = "#ff4e4e";
       email.placeholder = "Enter a value here!";
       spanElement.innerHTML = "Email: need a registered email.";
       return false
    }
    else{
       email.style.borderColor = "black";
       spanElement.innerHTML = "";
       return true;
    }
}

// validation for re-email
function validateReEmail(){
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let email = document.getElementById("email");
    let spanElement = document.getElementById("span6");
    let newEmail = document.getElementById("reemail").value;
    if (!emailPattern.test(email.value) || !(newEmail == email.value)){
       spanElement.style.color = "#ff4e4e";
       email.placeholder = "Enter a value here!";
       spanElement.innerHTML = "Reconfirm Email: it is not the same email entered in the above field.";
       return false
    }
    else{
       email.style.borderColor = "black";
       spanElement.innerHTML = "";
       return true;
    }
}

// validation for phone number
function check_phone_number(){
    let digits = /^\d+$/;
    let number = document.getElementById("number")
    let message = document.getElementById("span7");
    number = number.value.substring(4,).trim();
    if (!digits.test(number) || !(number.length == 8)){
        message.style.color = "#ff4e4e";
        message.innerHTML = "Phone number: only digits can be entered.";
        return false;
    }
    else{
        message.innerHTML = "";
        return true;
    }

}

function validateEventSelection(){
    let option = document.getElementById("dob");
    let message = document.getElementById("span8");
    if (option.value == ""){
        message.style.color = "#ff4e4e";
        message.innerHTML = "Date of Birth: select a date from the calendar.";
        return false;
    }
    else{
        message.innerHTML = "";
        return true;
    }
}

// validation for re-password
function check_age(){
    let digits = /^\d+$/;
    let number = document.getElementById("age")
    let message = document.getElementById("span9");
    number = number.value.trim();
    if (!digits.test(number) || parseInt(number) < 1){
        message.style.color = "#ff4e4e";
        message.innerHTML = "Age: only digits can be entered, above 0.";
        return false;
    }
    else{
        message.innerHTML = "";
        return true;
    }

}


// FOR SHIPPING INFORMATION

// validation for building number
function check_building_number(){
    let digits = /^\d+$/;
    let number = document.getElementById("building")
    let message = document.getElementById("span10");
    number = number.value.trim();
    if (!digits.test(number)){
        message.style.color = "#ff4e4e";
        message.innerHTML = "Building Number: only digits can be entered.";
        return false;
    }
    else{
        message.innerHTML = "";
        return true;
    }

}

// validation for street name
function check_street_name(){
    // regular expression to test if the input only contains alphabets and spaces
    let condition = /^[a-zA-Z\s]+$/; 
    let nm = document.getElementById("street");
    let message = document.getElementById("span11");
    nm = nm.value.trim();
    if (!condition.test(nm)){
        message.style.color = "#ff4e4e";
        message.innerHTML = "Street Name: name can only contain characters.";
        return false;
    }
    else{
        message.innerHTML = "";
        return true;
    }

}