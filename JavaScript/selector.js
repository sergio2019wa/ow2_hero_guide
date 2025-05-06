function readJSON(file) {
  var request = new XMLHttpRequest();
  request.open('GET', file, false);
  request.send(null);
  if (request.status == 200)
      return request.responseText;
}

function changeResultTank() {
  var x = document.getElementById("dropdown-list-tank").value;
  // document.getElementById("result-tank").innerHTML = "You selected: " + x;
  // console.log(x);
  var json_file = readJSON('../JSON/hero_counters.json');
  myObj = JSON.parse(json_file);
  var name_string = String(x);
  // console.log(myObj["Tank"]["D.Va"]["Tank"] + " Line 16"); //can't be [x] b/c D.Va is an edge case
  

  

}

function changeResultDPS() {
  var x = document.getElementById("dropdown-list-dps").value;
  // document.getElementById("result-dps").innerHTML = "You selected: " + x;
  // console.log(x);
}

function changeResultSupport() {
  var x = document.getElementById("dropdown-list-support").value;
  // document.getElementById("result-support").innerHTML = "You selected: " + x;
  // console.log(x);
}

function changeResultRole() {
  var x = document.getElementById("dropdown-list-role").value;
  // document.getElementById("result-role").innerHTML = "You selected: " + x;
  // console.log(x);
  let el_tank = document.getElementById("dropdown-list-tank");
  let el_damage = document.getElementById("dropdown-list-dps");
  let el_supp = document.getElementById("dropdown-list-support");
  let el_role = document.getElementById("dropdown-list-role2");
  let button2 = document.getElementById("myButton2")
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

  // let el_role = document.getElementById("dropdown-list-role2").value;
  // console.log(el_role_value + " Line 60");
  if (el_role_value === "Tank" || el_role_value === "Damage" || el_role_value === "Support") {
    button2.removeAttribute("hidden");
  }

  el_role.removeAttribute("hidden");

}

function provideCounters() {
  let first_role = document.getElementById("dropdown-list-role").value;
  let chosen_hero = 0;  //need to access first_role's list, there's three possibilities 
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

  console.log(myObj[first_role][chosen_hero][second_role] + " Line 85");

  if (second_role === "Tank" || second_role === "Support") {
    second_role + "s";
  }

  displayCounter(chosen_hero.toUpperCase(), second_role);


}

function displayCounter(chosen_hero, second_role) {
  //Pic of the heroes?
  const imgElement= document.getElementById("myImg");
  console.log(second_role);


  if (second_role === "Tank" || second_role === "Support") {
    imgElement.src = "../Assets/images/" + second_role + "s" + "/Individual Pics/" + chosen_hero + ".png";

  } else {
    imgElement.src = "../Assets/images/" + second_role + "/Individual Pics/" + chosen_hero + ".png";
  }

  console.log(imgElement.src);
  
}

document.addEventListener('DOMContentLoaded', function() {
  const button2 = document.getElementById('myButton2');
  button2.addEventListener('click', function() {
    provideCounters();
    
  });
});



