function formValidation() {
  var currentDate = new Date();
  var userInputDate = new Date(document.getElementById("date").value);
  var userInputTime = new Date(document.getElementById("time").value);

  if (userInputDate.getTime() < currentDate.getTime()) {
    alert("You can't enter a date that has already passed.");
    event.preventDefault();
  } else if (userInputDate.getTime() < currentDate.getTime() && userInputTime.getTime() < currentDate.getTime()) {
    alert("You can't enter a time that has already passed.");
    event.preventDefault();
  } else {
  }
}
