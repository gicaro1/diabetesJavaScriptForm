function tool () {
    testForm();


    /*  for in  loops through the properties of an object]:  basically what the function
     getOpiton does iterate between all radio buttons checked   and then store the values into the variable checkbutton which is
     contrasted  to 10  with   an if statement  if the condition is TRUE that value  is inserted into the optionsStoreArray a display
     the corresponding message*/

    function getOptions (addedOptionChecked) {
        var i = 0;
        var optionsStorageArray= [];
        for (i in addedOptionChecked) {
            if (addedOptionChecked[i].checked) {
                checkedButton = Number(addedOptionChecked[i].attributes.value.value);
                if (checkedButton >= 10) {
                    optionsStorageArray.push(addedOptionChecked[i].attributes.name.value);
                }
            }
        }
        return optionsStorageArray;
    }
    /*  for in  loops through the properties of an object]: the function totalSumValue is responsible for  sum  the attributes values
     and the elements selected where the element value is store into the variable checkedButton_1 and later added together with the operator +=
     the word number is used to  converts the object argument to a number that represents the object's value */

    function totalSumValue(addedOptionChecked) {
        var i = 0;
        var totalSum= 0;
        for (i in addedOptionChecked) {
            if (addedOptionChecked[i].checked) {
                checkedButton_1= Number(addedOptionChecked[i].attributes.value.value);
                totalSum += checkedButton_1;
            }
        }
        return totalSum;
    }



// the function calculateRisk take as argument the value return by the function totalSumValue and with condition [ IF ]    evaluate the  type of risk
    function calculateRisk(totalSum) {
        if (totalSum <= 15) {
            riskValue = "lowRisk";
        }
        else if (totalSum > 15 && totalSum <= 25) {
            riskValue= "mediumRisk";
        }
        else if (totalSum > 25) {
            riskValue = "highRisk";
        }
        return riskValue;
    }
// [ the function headingMessageBased is responsible for build   and insert an  element your result with an attribute [h2]  into the display panel
    function headingMessageBased() {

        var headreference = document.createElement("h2");
        var TextContent = document.createTextNode("Your Result");

        headreference.appendChild(TextContent);
        document.getElementById("secondPanel").appendChild(headreference);



    }
//- [  what the function MessageRisk  does  is concatenate  the message

    function MessageRisk () {
        var factor;
        var insertValue = document.getElementsByTagName("input");
        var riskCause = getOptions(insertValue);

        if (riskCause .length === 1) {
            return factor = "your main risk factor is your " + riskCause  ;
        } else {
            var endElementRisk = riskCause .pop();
            factor = "your main risk factors are your  " + riskCause + " and  " + endElementRisk;
            return factor;
        }
    }


    function displayMessage(threeLevelRisk) {

        dessapearMessage();

        var allMessagesOptions = {
            lowRisk: "Your results show that you currently have a low risk of developing diabetes. However, it is important that you maintain a healthy lifestyle in terms of diet and exercise.",
            mediumRisk: "Your results show that you currently have a medium risk of developing diabetes.For more information on your risk factors, and what to do about them, please visit our diabetes advice website at ",
            highRisk: "Your results sho that you currently have a HIGH risk of developing diabetes." + MessageRisk() + "We advise that you contact the Health Authority to discuss your risk factors as soon as you can.Please fill in our ",
            teamContactText: " and a member of the Health Authority Diabetes team will be in contact with you."
        }


        // three variables are create to build two type of elements one is for text and the other is for [a]link

        var linkContact= document.createElement("a");
        var information = document.createElement("p");
        var infoText = document.createElement("p");

        if (threeLevelRisk === "lowRisk") {
            messegeText = document.createTextNode(allMessagesOptions .lowRisk);
            // the color is asigned depending of the risk
            assignColourToRisk("lowRisk");
        }
        if (threeLevelRisk=== "mediumRisk") {
            messegeText = document.createTextNode(allMessagesOptions .mediumRisk);
            linkContact.href = "http://www.zha.org.zd.";
            // innerHTML insert text  in  the paragraph  and  href attribute indicates the link target
            linkContact.innerHTML = "http://www.zha.org.zd.";
            assignColourToRisk("mediumRisk");
        }
        if  (threeLevelRisk === "highRisk") {

            messegeText = document.createTextNode(allMessagesOptions .highRisk);
            infoText = document.createTextNode(allMessagesOptions .teamContactText);
            linkContact.href = "contactform.html";
            linkContact.innerHTML = "Contact form";
            assignColourToRisk("highRisk");

        }
        //  the appendChild method  is responsible for insert [append ] into  document three objects [ content MessageText, linkContact and  inforText]
        information.appendChild(messegeText);
        information.appendChild(linkContact);
        information.appendChild(infoText);


        //  anonymous funtion  headingMessageBased is  called  the getElementById and appendChild retrieve information ["p"] and  and also  give a style inline to the  second panel text
        headingMessageBased();
        document.getElementById("secondPanel").appendChild(information);
        document.getElementById("secondPanel").style.display = "inline";

    }
// depending of the risk assign a colour to secondPanel
    function assignColourToRisk(threeLevelRisk) {
        var x = "blue";
        if (threeLevelRisk === "lowRisk") {
            document.getElementById("secondPanel").style.backgroundColor = '#91ffa8';

        }
        else if (threeLevelRisk=== "mediumRisk") {
            document.getElementById("secondPanel").style.backgroundColor = '#ffa2f1';
        }
        else if (threeLevelRisk === "highRisk") {
            document.getElementById("secondPanel").style.backgroundColor = '#ffb3a2';
        }

    }
//
    function dessapearMessage() {
        var getChildNodes = document.getElementById("secondPanel");
        // the hasChildNodes  method return a boolean value  using a while loop to iterate  until all child nodes have been removed
        while (getChildNodes .hasChildNodes()) {
            getChildNodes .removeChild(getChildNodes .firstChild);
        }

    }
//
    function testForm() {
        document.getElementById("Form1").onsubmit = function() {
            var allowsubmit = false;
            if (document.getElementById("submit").value === "Calculate") {

                var addElement = document.getElementsByTagName("input");
                threeLevelRisk = calculateRisk(totalSumValue(addElement));
            }
            displayMessage(threeLevelRisk);
            return false;
        }
    }
}
window.onload = tool;
