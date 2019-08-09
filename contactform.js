/*Guiovanny Cardenas Rosales
FMA JavaScript 2017
Contact Form Diabetes tool*/


function tool() {

        testForm();
        tipFields();
       allocateFirstField();

        questionMarkFunction();

}

function testForm() {
    document.getElementById("Form2").onsubmit = function() {
        var allowsubmit = false;
        if (checkFields()) {
            validate("firstName", "lastName", "healthNumber", "email", "telephoneNumber");
        }
        return allowsubmit;
    }
}

// set a default text inside of the text box with the functionalities  or appear deppending if any character is introduced
// the use the onfocus and onblur


function textDefault(txtElem, defaultText) {
    txtElem.value = defaultText;
    txtElem.style.color = "#616463";
    txtElem.style.fontStyle = "italic";


    txtElem.onfocus = function() {
        if (this.value === defaultText) {
            this.value = "";

            this.style.fontStyle = "normal";
        }
    }
    txtElem.onblur = function() {
        if (this.value === "") {
            this.value = defaultText;
            this.style.color = "#616463";
            this.style.fontStyle = "italic";
        }
    }
}

// tipFieds manage the text inside of the textbox

function tipFields() {

    textDefault(document.getElementById("firstName"), "Enter your first name");
    textDefault(document.getElementById("lastName"), "Enter your last name");
    textDefault(document.getElementById("healthNumber"), "e.g. ZHA346783");
    textDefault(document.getElementById("email"), "Enter your email");
    textDefault(document.getElementById("telephoneNumber"), "Enter your telephone number(optional)");
}

// the function is responsible for place the coursor in the first  text element

function allocateFirstField() {
    document.getElementById("firstName").focus();
}


// check if all spaces are fill otherwise  the error messages will be displayed
// the use the if  else  and or  oparator are used  as  conditional statements


function checkFields() {
    var allowsubmit = true;

    var errorCollection = [];

    if (document.getElementById("firstName").value === "" || document.getElementById("firstName").value === "Enter your first name") {
        errorCollection.push("firstName");
        allowsubmit = false;
    } else clearError("firstName");

    if (document.getElementById("lastName").value === "" || document.getElementById("lastName").value === "Enter your last name") {
        errorCollection.push("lastName");
        allowsubmit = false;
    } else clearError("lastName");

    if (document.getElementById("title").value === "select a title") {
        errorCollection.push("title");
        allowsubmit = false;
    } else clearError("title");

    if (document.getElementById("healthNumber").value === "" || document.getElementById("healthNumber").value === "e.g. ZHA346783") {
        errorCollection.push("healthNumber");
        allowsubmit = false;
    } else clearError("healthNumber");

    if (document.getElementById("email").value === "" || document.getElementById("email").value === "Enter your email") {
        errorCollection.push("email");
        allowsubmit = false;

    } else clearError("email");
    if (!allowsubmit) {
        for (var i = 0; i < errorCollection.length; i++) {
            showError(errorCollection[i]);
        }

    }

    return (allowsubmit);
}
//this funcion is responsable for  check that all information introduced  and that meets all specification  for each text content

function validate(firstName, lastName, healthNumber, email, telephoneNumber) {
    var allowsubmit = true;
    var firstName = document.getElementById(firstName).value;
    var lastName = document.getElementById(lastName).value;
    var healthNumber = document.getElementById(healthNumber).value;
    var email = document.getElementById(email).value;
    var telephoneNumber = document.getElementById(telephoneNumber).value;
    var firstNameRegex = /^([a-zA-Z]){0,}(\'|\s|\-)?[a-zA-Z]{2,}$/g.test(firstName);
    var lastNameRegex = /^([a-zA-Z]){0,}(\'|\s|\-)?[a-zA-Z]{2,}$/g.test(lastName);
    var healthNumberRegex = /^([Zz][Hh][Aa])[0-9]{6}$/.test(healthNumber);
    var emailRegex = /^\w+([\.! $ & * - = \^ ` | ~ # % â€˜ + / ? _ { }]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/.test(email);
    var telephoneNumberRegex = /0\d{10}$| /.test(telephoneNumber);


    // this variable store all error messages
    //if and else  conditional statements are used   to  check if the type of data introduced is correct [regex method]


    var createMessage = {

        firstNameValidationError:               "the name field have more one character,  and do not cntain numbers.",
        firstNameValidationErrorMinimumLength:  "first name must contain more than one character.",
        lastNameValidationError:                "Last name can't contain number.Only hyphen(Whittaker-Jones) And must contain more than one character.",
        healthNumberValidationError:             "Invalid  Zedland Health Authority number has been  entered (e.g ZHA346783)",
        emailValidationError:                   "Invalid Email",
        telephoneNumberValidationError:         "telephone number must contain only numbers"
    }


    if (!firstNameRegex) {
        document.getElementById("firstNameValidationError").innerHTML = createMessage.firstNameValidationError;
        allowsubmit = false;
    } else document.getElementById("firstNameValidationError").innerHTML = '';
    if (!lastNameRegex) {
        document.getElementById("lastNameValidationError").innerHTML =createMessage.lastNameValidationError;
        allowsubmit = false;
    } else document.getElementById("lastNameValidationError").innerHTML = '';
    if (!healthNumberRegex) {
        document.getElementById("healthNumberValidationError").innerHTML = createMessage.healthNumberValidationError;
        allowsubmit = false;
    } else document.getElementById("healthNumberValidationError").innerHTML = '';
    if (!emailRegex) {
        document.getElementById("emailValidationError").innerHTML = createMessage.emailValidationError;
        allowsubmit = false;
    } else document.getElementById("emailValidationError").innerHTML = '';
    if (!telephoneNumberRegex) {
        document.getElementById("telephoneNumberValidationError").innerHTML = createMessage.telephoneNumberValidationError;
        allowsubmit = false;
    } else document.getElementById("telephoneNumberValidationError").innerHTML = '';

    return allowsubmit;

}



function showError(errorId) {
    var er = errorId + "Error";
    document.getElementById(er).style.display = "inline";
}

function clearError(errorId) {
    var er = errorId + "Error";
    document.getElementById(er).style.display = "none";
}
// what questionMarkFunction  does is when maouse pass over of the question mark display the message using the method onmouse over
// the use the class and id elements have helped to access to information store in the html file
// style has been added to change the colour of the text displayed

function questionMarkFunction() {
    document.getElementById('questionMark').onmouseover = function() {
        var adviseRiskMessage = document.getElementById('informationSign');
        adviseRiskMessage.style.display = 'block';
        adviseRiskMessage.style.color = "#ff1f29";
    }
    document.getElementById('questionMark').onmouseout = function() {
        var adviseRiskMessage = document.getElementById('informationSign');
        adviseRiskMessage.style.display = 'none';
    }
}
window.onload = tool;
