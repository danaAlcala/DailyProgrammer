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
var saveLoaded = false;

//Sort functions here.
function askName(){
    nameString = prompt("What is your name?");
}
function askAge(){
    ageString = prompt("How old are you?");
}
function askUser(){
    userString = prompt("What is your reddit username?");
}
function response(){
    alert("Your name is " + nameString + ", you are " + ageString + " years old, and your username is " + userString + ".");
}
function saveInput(){
    if(confirm("Would you like to save your content for future use?\n" + // Make sure user wants to save.
        "ALERT: Doing so will overwrite any existing content!")){
        if (typeof(Storage) !== "undefined"){  //if browser is compatible with WebStorage
            localStorage.setItem("Name", nameString);
            localStorage.setItem("Age", ageString);
            localStorage.setItem("Username", userString);
        }
        else { //browser incompatible with WebStorage
            alert("Please keep in mind that, because your browser does not support WebStorage, your content could not" +
                "be saved for future use.");
        }
    }
    else{
        alert("You chose not to save your content for future use.  Content previously saved should remain intact.")
    }
}
function checkForSave(){
    if (localStorage.getItem("Name") === null){
        alert("First use detected.  Welcome!");
    }
    else {
        saveExists = true;
        alert("Saved content detected.");
    }
}
function loadSavedContent(){
    if (saveExists){
        if (confirm("Would you like to use your previously saved content for this session?")){
            nameString = localStorage.getItem("Name");
            ageString = localStorage.getItem("Age");
            userString = localStorage.getItem("Username");
            saveLoaded = true;
        }
    }
}

//Sort instructions here.
checkForSave();
loadSavedContent();
if (!saveLoaded){
    askName();
    askAge();
    askUser();
    saveInput();
}
response();