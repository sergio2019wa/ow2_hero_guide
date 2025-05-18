// Helper function to read JSON files
  // file: JSON file path to read
function readJSON(file) {
  var request = new XMLHttpRequest();
  request.open('GET', file, false);
  request.send(null);
  if (request.status == 200)
      return request.responseText;
}

// Displays tank, dps, or support list depending on role list input
function changeResultRole() {
  var el_role = document.getElementById("dropdown-list-role");
  let el_tank = document.getElementById("dropdown-list-tank");
  let el_damage = document.getElementById("dropdown-list-dps");
  let el_supp = document.getElementById("dropdown-list-support");
  let button2 = document.getElementById("myButton2");
  
  // Only display one list out of three
  if (el_role.value === "Tank") {
    el_tank.removeAttribute("hidden");
    el_damage.setAttribute("hidden", "hidden");
    el_supp.setAttribute("hidden", "hidden");
  } else if (el_role.value === "Damage") {  
    el_tank.setAttribute("hidden", "hidden");
    el_damage.removeAttribute("hidden");
    el_supp.setAttribute("hidden", "hidden");
  } else if (el_role.value === "Support") {
    el_tank.setAttribute("hidden", "hidden");
    el_damage.setAttribute("hidden", "hidden");
    el_supp.removeAttribute("hidden");
  }

  //Button to create results, if all lists have input
  button2.removeAttribute("hidden");

}

// Reads JSON of selected role to store trending heroes onto a set.
// Chosen hero is looked up in hero_counters.json to than display the
// images of the heroes. Text "Highly Recommended" is outputed if there is
// an intersection between the set and hero_counters.json.
  // role: the role the user picked to counter their chosen hero
function provideCounters(role) {
  let first_role = document.getElementById("dropdown-list-role").value;
  let chosen_hero = 0;   
  let second_role = document.getElementById("dropdown-list-role2").value;
  var json_file = readJSON('../JSON/hero_counters.json');
  myObj = JSON.parse(json_file);
  const set1 = new Set();
  var role_j = readJSON("../JSON/" + role.toLowerCase() + "_info.json");
  let role_obj = JSON.parse(role_j);

  // Fill hashset with xxxxx_info.json
  for (let i = 0; i < 3; i++) {
    for (const key in role_obj[i]) {
      set1.add(key)
    }
  }

  // Hides "Highly Recommend" text in heroSelector.html
  for (let i = 1; i < 4; i++) {
    let text = document.getElementById("text" + String(i) + String(i));
    text.setAttribute("hidden", "hidden");
  }

  // Decerns what hero is chosen from what role list
  if (first_role === "Tank") {
    chosen_hero = document.getElementById("dropdown-list-tank").value;
  } else if (first_role === "Damage") {
    chosen_hero = document.getElementById("dropdown-list-dps").value;
  } else if (first_role === "Support"){
    chosen_hero = document.getElementById("dropdown-list-support").value;
  }

  // Accesses counters in hero_counters.json with user input and if there
  // is an intersection with the set, enabel
  var arr = myObj[first_role][chosen_hero][second_role];
  let i = 1;
  arr.forEach(function(name) {
    if (set1.has(name)) {
      let text = document.getElementById("text" + String(i) + String(i));
      text.removeAttribute("hidden")
    }
    displayCounter(name.toUpperCase(), second_role, i);
    i++;
  });

}

// Finds images in repo to display
  // hero: counter hero found in hero_counter.json
  // second_role: the role 'hero' is under
function displayCounter(hero, second_role, i) {
  const imgElement = document.getElementById("myImg" + String(i));
  imgElement.src = "../Assets/images/" + second_role + "/Individual Pics/" + hero + ".png";
  
}

// Event Listener to perform clearImages() and provideCounters when button
// is pressed by user
document.addEventListener('DOMContentLoaded', function() {
  const role = document.getElementById("dropdown-list-role2");
  const button2 = document.getElementById('myButton2');
  button2.addEventListener('click', function() {
    clearImages();
    provideCounters(String(role.value));
  });
});

// Clears images of the user's previous selection
function clearImages () {
  const imgElement1 = document.getElementById("myImg1");
  const imgElement2 = document.getElementById("myImg2");
  const imgElement3 = document.getElementById("myImg3");
  imgElement1.src = "";
  imgElement2.src = "";
  imgElement3.src = "";

}



