// To show the data in second page
function passvalues(){
	var username = document.getElementById("username").value;
	var email = document.getElementById("email").value;
	var password = document.getElementById("password").value;
	var temp_name=new Array(localStorage.getItem("username"));
	var temp_email=new Array(localStorage.getItem("email"));
	var temp_pass=new Array(localStorage.getItem("password"));
	temp_name.push(username);
	temp_email.push(email);
	temp_pass.push(password);
	localStorage.setItem("username", temp_name);
	localStorage.setItem("email", temp_email);
	localStorage.setItem("password", temp_pass);
	return false;
}

  // to save data in a table
  function onFormSubmit(){
   var formData = readFormData();
   insertNewRecord(formData);
  }
  function readFormData(){
	var formData = {};
	formData["username"] = document.getElementById("username").value;
	formData["email"] = document.getElementById("email").value;
	formData["password"] = document.getElementById("password").value;
	return formData;
}
// to read data for a dashboard page
function insertNewRecord(data){
	var table = document.getElementById("userList").getElementsByTagName('tbody')[0];
	var newRow = table.insertRow(table.length);
	cell1 = newRow.insertCell(0);
	cell1.innerHTML = data.username;
	cell2 = newRow.insertCell(1);
	cell2.innerHTML = data.email;
	cell3 = newRow.insertCell(2);
	cell3.innerHTML = data.password;
}
