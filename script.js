function validateForm() {
  var x = document.forms["myForm"]["password"].value;
  if (x.length < 8) {
    alert("The password is too short");
    return false;
  }
} 