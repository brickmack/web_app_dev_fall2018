//Makes Element x viewable to the user and removes the y onject from vision
function expandCollapseBox(x, y) {
	document.getElementById(x).style.display = "block";
	document.getElementById(y).style.display = "none";
}

//Check the current visability of the x element, if visible makes it invisible, and if invisible makes visible
function expandCollapseBoxB(x) {
	if (document.getElementById(x).style.display == "none") {
		document.getElementById(x).style.display = "block";
	} else {
		document.getElementById(x).style.display = "none";
	}
}

//Makes the given object visible to the user.
function expandOnly(x){
	document.getElementById(x).style.display = "block";
}

//Makes the given object invisible to the user!
function collapseOnly(x){
	document.getElementById(x).style.display = "none";
}

//Updates a question dependant upon the combobox given
function updateCombo(x){
	if(document.getElementById("locations8") == document.getElementById(x)){
		var option = document.getElementById(x).options[document.getElementById(x).selectedIndex];
		if(option.value == ""){
			collapseOnly("question8.1");
			return;
		}
		else{
			expandOnly("question8.1");
		}
	}
	else if(document.getElementById("locations9") == document.getElementById(x)){
		var option = document.getElementById(x).options[document.getElementById(x).selectedIndex];
		if(option.value == ""){
			collapseOnly("question9.1");
			return;
		}
		else{
			expandOnly("question9.1");
		}
	}
}

//Disables the submit button if the checkbox is not checked, and reenables it if one is checked
function disable() {
	/* Allows the submit button to be either disabled or enabled */
	document.getElementById("submit").disabled = !document.getElementById("submit").disabled;
}

//Checks that at least one Radio button is checked out of a given radio button group
function isOneCheckedRadio(question) {
  var chx = question.getElementsByTagName('input');
  for (var i=0; i<chx.length; i++) {
    if (chx[i].type == 'radio' && chx[i].checked) {
      return true;
    } 
  }
  return false;
}

//Checks that at least one Radio button is checked out of a given check box group
function isOneCheckedCheckbox(question) {
  var chx = question.getElementsByTagName('input');
  for (var i=0; i<chx.length; i++) {
    if (chx[i].type == 'checkbox' && chx[i].checked) {
      return true;
    } 
  }
  return false;
}

//Checks that in a selected that a choice has been made, and that it is still not "Choose One"
function isOneCheckedCombo(question){
	var object = question.getElementsByTagName('select');
	var option = object[0].options[object[0].selectedIndex];
	if(option.value == ""){
			return false;
	}
	return true;
}

//Checks that the form has an answer to all questions, and if so allows the submission process to continue!
function validate() {
	// Checks all Question 1 inputs
	if(isOneCheckedRadio(document.getElementById('question1')) == false){
		alert("You must select an answer for question 1!");
		return false;
	}
	else {
		if(document.getElementById('yes1').checked == true){
			if(isOneCheckedRadio(document.getElementById('question1.2')) == false){
				alert("You must select an answer for question 1's sub-question!");
				return false;
			}
		}
	}
	// Checks all Question2 inputs
	if(isOneCheckedRadio(document.getElementById('question2')) == false){
		alert("You must select an answer for question 2!");
		return false;
	}
	else {
		if(document.getElementById('yes2').checked == true){
			if(isOneCheckedRadio(document.getElementById('question2.2')) == false){
				alert("You must select an answer for question 2's sub-question!");
				return false;
			}
		}
	}
	// Checks all Question3 inputs
		if(isOneCheckedRadio(document.getElementById('question3')) == false){
		alert("You must select an answer for question 3!");
		return false;
	}
	//Check all Question4 inputs
	if(isOneCheckedCheckbox(document.getElementById('question4')) == false){
		alert("You must select an answer for question 4!");
		return false;
	}
	//Check all Question5 inputs
	if(isOneCheckedRadio(document.getElementById('question5')) == false){
		alert("You must select an answer for question 5!");
		return false;
	}
	//Check all Question6 inputs
	if(isOneCheckedRadio(document.getElementById('question6')) == false){
		alert("You must select an answer for question 6!");
		return false;
	}
	//Check all Question7 inputs
	if(isOneCheckedCheckbox(document.getElementById('question7')) == false){
		alert("You must select an answer for question 7!");
		return false;
	}
	//Check all Question8 inputs
	if(isOneCheckedCombo(document.getElementById('question8')) == false){
		alert("You must select an answer for question 8!");
		return false;
	}
	else {
		if(isOneCheckedCombo(document.getElementById('question8.1')) == false){
			alert("You must select an answer for question 8.1!");
			return false;
		}
	}
	//Check all Question9 inputs
	if(isOneCheckedCombo(document.getElementById('question9')) == false){
		alert("You must select an answer for question 9!");
		return false;
	}
	else {
		if(isOneCheckedCombo(document.getElementById('question9.1')) == false){
			alert("You must select an answer for question 9.1!");
			return false;
		}
	}
	//Check all Question10 inputs
	if(isOneCheckedCheckbox(document.getElementById('question10')) == false){
		alert("You must select an answer for question 10!");
		return false;
	}
	//Check Name and Email inputs
	if (document.forms.survey.name.value == '') {
		alert("You must provide your name!");
		return false;
	} else if (!document.forms.survey.email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
		alert("You must provide a your email adddress!");
		return false;
	}
	return true;
}