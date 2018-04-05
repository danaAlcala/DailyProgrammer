/*
This is the very first Easy challenge from reddit.com's subreddit, /r/dailyprogrammer.

Goal:
"create a program that will ask the users name, age, and reddit username. have it tell them the information back, in the format:

    your name is (blank), you are (blank) years old, and your username is (blank)
for extra credit, have the program log this information in a file to be accessed later."

Declaration of technique:
I will use simple prompts and alert boxes to gather input from the user.  I will need to learn HTML5 Webstorage to do the extra
    credit bit.

Research Notes:
    Two objects are available for storing data on the client: window.localStorage and window.sessionStorage.
        window.localStorage does not have an expiry.
        window.sessionStorage will expire when the browser tab is closed.

    Best practice is to check compatibility with the browser before running any actual WebStorage code.  To do this:
        if (typeof(Storage) !== "undefined") {
            // Code for localStorage/sessionStorage.
        }
        else {
            // Sorry! No Web Storage support..
        }
*/
//Declare variables here.
var nameString = "";
var ageString = "";
var userString = "";
var saveExists = false;
var disabled = false;
var nameTextBox = document.getElementById("TEXTBOX_NAME").valueOf();
var ageTextBox = document.getElementById("TEXTBOX_AGE");
var userTextBox = document.getElementById("TEXTBOX_USER");
var responseArea = document.getElementById("P_RESPONSE");
var submitButton = document.getElementById("BUTTON_SUBMIT");

//Sort functions here.
function saveInput(){
    if (typeof(Storage) !== "undefined"){  //if browser is compatible with WebStorage
        localStorage.setItem("Name", nameString);
        localStorage.setItem("Age", ageString);
        localStorage.setItem("Username", userString);
    }
}
function checkForSave(){
    if (localStorage.getItem("Name") !== null) {
        saveExists = true;
    }
}
function loadSavedContent(){
    if (saveExists){
        nameTextBox.value = localStorage.getItem("Name");
        ageTextBox.value = localStorage.getItem("Age");
        userTextBox.value = localStorage.getItem("Username");
    }
}
function response(){
    responseArea.innerHTML = "Your name is " +
        nameString + ", your age is " +
        ageString + ", and your reddit username is " +
        userString + ".";
}
function submit(){
    nameString = nameTextBox.value;
    ageString = ageTextBox.value;
    userString = userTextBox.value;
    saveInput();
    response();
}
function buttonLogic(){
    if (nameTextBox.value !== null &&
        ageTextBox.value !== null &&
        userTextBox.value !== null &&
        nameTextBox.value !== "" &&
        ageTextBox.value !== "" &&
        userTextBox.value !== "" &&
        isNaN(parseInt(nameTextBox.value)) &&
        !isNaN(parseInt(ageTextBox.value))){
        submitButton.disabled = false;
    }
    else {
        submitButton.disabled = true;
    }
}

//Sort instructions here.
if (!disabled){
    checkForSave();
    loadSavedContent();
    buttonLogic();
}