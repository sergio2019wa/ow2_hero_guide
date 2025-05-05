function readJSON(file) {
  var request = new XMLHttpRequest();
  request.open('GET', file, false);
  request.send(null);
  if (request.status == 200)
      return request.responseText;
};



function changeResultTank() {
  var x = document.getElementById("dropdown-list-tank").value;
  // document.getElementById("result-tank").innerHTML = "You selected: " + x;
  console.log(x);
  var json_file = readJSON('../JSON/hero_counters.json');
  myObj = JSON.parse(json_file);
  var hero_name = 
  console.log(myObj.Tank["D.Va"].Tank); //can't be [x] b/c D.Va is an edge case
  

  

}

function changeResultDPS() {
  var x = document.getElementById("dropdown-list-dps").value;
  // document.getElementById("result-dps").innerHTML = "You selected: " + x;
  console.log(x);
}

function changeResultSupport() {
  var x = document.getElementById("dropdown-list-support").value;
  // document.getElementById("result-support").innerHTML = "You selected: " + x;
  console.log(x);
}

// function changeResultMaps() {
//   var x = document.getElementById("dropdown-list-maps").value;
//   document.getElementById("result-maps").innerHTML = "You selected: " + x;
// }

function changeResultRole() {
  var x = document.getElementById("dropdown-list-role").value;
  // document.getElementById("result-role").innerHTML = "You selected: " + x;
  console.log(x);
  let el_tank = document.getElementById("dropdown-list-tank");
  let el_damage = document.getElementById("dropdown-list-dps");
  let el_supp = document.getElementById("dropdown-list-support");
  
  if (x === "Tank") {
    el_tank.removeAttribute("hidden");
    el_damage.setAttribute("hidden", "hidden");
    el_supp.setAttribute("hidden", "hidden");
  } else if (x === "Damage") {  
    el_tank.setAttribute("hidden", "hidden");
    el_damage.removeAttribute("hidden");
    el_supp.setAttribute("hidden", "hidden");
  } else if (x === "Support") {
    el_tank.setAttribute("hidden", "hidden");
    el_damage.setAttribute("hidden", "hidden");
    el_supp.removeAttribute("hidden");
    
  }

}

document.addEventListener('DOMContentLoaded', function() {
  const button2 = document.getElementById('myButton2');
  if (button2) { 
    button2.addEventListener('click', function() {
      console.log('Button clicked!');
    });
  } else {
    console.error("Button with id 'myButton2' not found."); // Handle the case where the button is not found
  }
});


