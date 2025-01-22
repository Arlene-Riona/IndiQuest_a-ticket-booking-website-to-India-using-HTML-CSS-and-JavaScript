// to reset the form 
function reset_content(){
    document.getElementById("form1").reset();
}

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

// validation for email
function validateEmail(){
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let email = document.getElementById("email");
    let spanElement = document.getElementById("span3");
    if (!emailPattern.test(email.value)){
       spanElement.style.color = "#ff4e4e";
       email.placeholder = "Enter a value here!";
       spanElement.innerHTML = "Email: enter a registered email.";
       return false
    }
    else{
       email.style.borderColor = "black";
       spanElement.innerHTML = "";
       return true;
    }
}

// validation for feedback
function validateFeedback(){
    let condition = validateField("feedback");
    if (condition == true){
        return true;
    }
    else{
        let message = document.getElementById("span2");
        message.innerHTML = "Enter your feedback: your message needs to be added.";
        message.style.color = "#ff4e4e";
        return false;
    }
}

// to check all conditions
function check_all(){
    let message = document.getElementById("title");
    message.style.color = "#ff4e4e";
    message.innerHTML = "Please enter valid details or else the form cannot be submitted: ";
    let message2 = document.getElementById("span2");
    message.style.fontWeight = "bold";
    let name = check_name();
    let feedback = validateFeedback();
    let email = validateEmail();
    if (name && feedback && email){
        message.innerHTML = "";
        message2.innerHTML = "";
        window.alert("The feedback form is submitted! we will get back to you soon!");
        reset_content();
        return true;
    }
    else{
        return false;
    }
}
