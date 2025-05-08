function readJSON(file) {
  var request = new XMLHttpRequest();
  request.open('GET', file, false);
  request.send(null);
  if (request.status == 200)
      return request.responseText;
}

function changeResultTank() {
  var x = document.getElementById("dropdown-list-tank").value;
  var json_file = readJSON('../JSON/hero_counters.json');
  myObj = JSON.parse(json_file);
  var name_string = String(x);
  
}

function changeResultDPS() {
  var x = document.getElementById("dropdown-list-dps").value;
}

function changeResultSupport() {
  var x = document.getElementById("dropdown-list-support").value;
}

function changeResultRole() {
  var x = document.getElementById("dropdown-list-role").value;
  let el_tank = document.getElementById("dropdown-list-tank");
  let el_damage = document.getElementById("dropdown-list-dps");
  let el_supp = document.getElementById("dropdown-list-support");
  let el_role = document.getElementById("dropdown-list-role2");
  let button2 = document.getElementById("myButton2");
  let el_role_value = el_role.value;
  
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

  if (el_role_value === "Tank" || el_role_value === "Damage" || el_role_value === "Support") {
    button2.removeAttribute("hidden");
  }

  el_role.removeAttribute("hidden");

}

function provideCounters() {
  let first_role = document.getElementById("dropdown-list-role").value;
  let chosen_hero = 0;   
  let second_role = document.getElementById("dropdown-list-role2").value;
  var json_file = readJSON('../JSON/hero_counters.json');
  myObj = JSON.parse(json_file);

  if (first_role === "Tank") {
    chosen_hero = document.getElementById("dropdown-list-tank").value;
  } else if (first_role === "Damage") {
    chosen_hero = document.getElementById("dropdown-list-dps").value;
  } else if (first_role === "Support"){
    chosen_hero = document.getElementById("dropdown-list-support").value;
  }




  var arr = myObj[first_role][chosen_hero][second_role];

  let i = 1;

  arr.forEach(function(name) {
    displayCounter(name.toUpperCase(), second_role, i);
    i++;
  });



}

function displayCounter(chosen_hero, second_role, i) {
  const imgElement = document.getElementById("myImg" + String(i));
  imgElement.src = "../Assets/images/" + second_role + "/Individual Pics/" + chosen_hero + ".png";

  
}

document.addEventListener('DOMContentLoaded', function() {
  const button2 = document.getElementById('myButton2');
  button2.addEventListener('click', function() {
    clearImages();
    provideCounters();
  });
});

function clearImages () {
  const imgElement1 = document.getElementById("myImg1");
  const imgElement2 = document.getElementById("myImg2");
  const imgElement3 = document.getElementById("myImg3");
  imgElement1.src = "";
  imgElement2.src = "";
  imgElement3.src = "";
}



