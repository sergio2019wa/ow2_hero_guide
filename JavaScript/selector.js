
function changeResultTank() {
  var x = document.getElementById("dropdown-list-tank").value;
  document.getElementById("result-tank").innerHTML = "You selected: " + x;
}

function changeResultDPS() {
  var x = document.getElementById("dropdown-list-dps").value;
  document.getElementById("result-dps").innerHTML = "You selected: " + x;
}

function changeResultSupport() {
  var x = document.getElementById("dropdown-list-support").value;
  document.getElementById("result-support").innerHTML = "You selected: " + x;
}

function changeResultMaps() {
  var x = document.getElementById("dropdown-list-maps").value;
  document.getElementById("result-maps").innerHTML = "You selected: " + x;
}

function changeResultRole() {
  var x = document.getElementById("dropdown-list-role").value;
  document.getElementById("result-role").innerHTML = "You selected: " + x;
  // x gives us what we selected
  if (x === "Tank" ) {
    //run a query on counters.sql
  } else if (x === "Damage") {  
    //run a query on count  ers.sql
  } else if (x === "Support") {
    //run a query on counters.sql
  }

}

document.addEventListener('DOMContentLoaded', function() {
  const button2 = document.getElementById('myButton2');

  if (button2) { // Check if the button exists
    button2.addEventListener('click', function() {
      console.log('Button clicked!');
    });
  } else {
    console.error("Button with id 'myButton2' not found."); // Handle the case where the button is not found
  }
});


