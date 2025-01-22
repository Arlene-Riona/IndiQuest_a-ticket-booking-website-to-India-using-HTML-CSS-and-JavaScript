function check_all(){
    let message = document.getElementById("title");
    message.style.color = "#ff4e4e";
    message.innerHTML = "Please enter valid details or else tickets cannot be booked: ";
    let date = validateEventSelection();
    let adults = check_travellers("Adults", "span2");
    let children = check_travellers("Children", "span3");
    let name = check_name();
    let email = validateEmail();
    let reemail = validateReEmail();
    let phoneNum = check_phone_number();

    if(name && date && adults && children && email && reemail && phoneNum){
        let totalAdults = parseInt(document.getElementById("Adults").value);
        let totalChildren = parseInt(document.getElementById("Children").value);
        let dateValue = document.getElementById("date1").value.trim();
        let timeValue = document.getElementById("time").value;
        let nameValue = document.getElementById("name").value;

        const params = new URLSearchParams(window.location.search);
        const destination = params.get('destination');
        // let location = getLocationFromURL();
        message.innerHTML = "";
        let bookingHistory = JSON.parse(localStorage.getItem("bookingHistory")) || [];

        // Add the booking to the history
        bookingHistory.push({
            name: nameValue,
            date: dateValue,
            time: timeValue,
            adults: totalAdults,
            children: totalChildren,
            destination: destination,
        });

        localStorage.setItem("bookingHistory", JSON.stringify(bookingHistory));
        window.alert("Your booking is confirmed! thank you for choosing IndiQuest!");
        reset_content();
        // redirects you back to places to visit webpage
        window.location.href = "../html/myBookings.html";
        return true;
    }
    else{
        return false;
    } 

}

// Function to get the location from query parameters
function getLocationFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get('location') || "Unknown Location";
}

// Display the location on the page
document.addEventListener("DOMContentLoaded", () => {
    const location = getLocationFromURL();
    const locationElement = document.getElementById("bookTickets");
    locationElement.textContent = `Book Tickets for ${location}`;
});


function reset_content(){
    document.getElementById("form1").reset();
}

// for selecting the date of the trip 
function validateEventSelection(){
    let option = document.getElementById("date1");
    let message = document.getElementById("span1");
    if (option.value == ""){
        message.style.color = "#ff4e4e";
        message.innerHTML = "Choose a Date: select a date from the calendar.";
        return false;
    }
    else{
        message.innerHTML = "";
        return true;
    }
}

function check_travellers(id, spanID){
    let digits = /^\d+$/;
    let number = document.getElementById(id)
    let message = document.getElementById(spanID);
    number = number.value.trim();
    if (!digits.test(number) || !(parseInt(number) >= 0)){
        message.style.color = "#ff4e4e";
        message.innerHTML = "Number of " + id + ": only digits can be entered, above 0. If there are no " + id.toLowerCase() + ", enter 0 as a value in the field.";
        return false;
    }
    else{
        message.innerHTML = "";
        return true;
    }

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
    let message = document.getElementById("span4");
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
