
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

const maps_tank = new Map ([
  ["Antarctic Peninsula" , new Set["D.va", ""]],
  ["Blizzard World", new Set[""]],
  ["Busan", new Set[""]],
  ["Circuit Royal", new Set[""]],
  ["Colosseo", new Set[""]],
  ["Dorado", new Set[""]],
  ["Eichenwalde", new Set[""]],
  ["Esperança", new Set[""]],
  ["Hanaoka", new Set[""]],
  ["Havana", new Set[""]],
  ["Hollywood", new Set[""]],
  ["Illios", new Set[""]],
  ["Junkertown", new Set[""]],
  ["King's Row", new Set[""]],
  ["Lijiang Tower", new Set[""]],
  ["Midtown", new Set[""]],
  ["Nepal", new Set[""]],
  ["New Junk City", new Set[""]],
  ["New Queen Street", new Set[""]],
  ["Numbani", new Set[""]],
  ["Oasis", new Set[""]],
  ["Paraíso", new Set[""]],
  ["Rialto", new Set[""]],
  ["Route 66", new Set[""]],
  ["Runasapi", new Set[""]],
  ["Samoa", new Set[""]],
  ["Shambali Monastery", new Set[""]],
  ["Suravasa", new Set[""]],
  ["Throne of Anubis", new Set[""]],
  ["Watchpoint: Gibraltar", new Set[""]]
])

const maps_damage = new Map ([
  ["Antarctic Peninsula" , new Set[""]],
  ["Blizzard World", new Set[""]],
  ["Busan", new Set[""]],
  ["Circuit Royal", new Set[""]],
  ["Colosseo", new Set[""]],
  ["Dorado", new Set[""]],
  ["Eichenwalde", new Set[""]],
  ["Esperança", new Set[""]],
  ["Hanaoka", new Set[""]],
  ["Havana", new Set[""]],
  ["Hollywood", new Set[""]],
  ["Illios", new Set[""]],
  ["Junkertown", new Set[""]],
  ["King's Row", new Set[""]],
  ["Lijiang Tower", new Set[""]],
  ["Midtown", new Set[""]],
  ["Nepal", new Set[""]],
  ["New Junk City", new Set[""]],
  ["New Queen Street", new Set[""]],
  ["Numbani", new Set[""]],
  ["Oasis", new Set[""]],
  ["Paraíso", new Set[""]],
  ["Rialto", new Set[""]],
  ["Route 66", new Set[""]],
  ["Runasapi", new Set[""]],
  ["Samoa", new Set[""]],
  ["Shambali Monastery", new Set[""]],
  ["Suravasa", new Set[""]],
  ["Throne of Anubis", new Set[""]],
  ["Watchpoint: Gibraltar", new Set[""]]
])

const maps_support = new Map ([
  ["Antarctic Peninsula" , new Set[""]],
  ["Blizzard World", new Set[""]],
  ["Busan", new Set[""]],
  ["Circuit Royal", new Set[""]],
  ["Colosseo", new Set[""]],
  ["Dorado", new Set[""]],
  ["Eichenwalde", new Set[""]],
  ["Esperança", new Set[""]],
  ["Hanaoka", new Set[""]],
  ["Havana", new Set[""]],
  ["Hollywood", new Set[""]],
  ["Illios", new Set[""]],
  ["Junkertown", new Set[""]],
  ["King's Row", new Set[""]],
  ["Lijiang Tower", new Set[""]],
  ["Midtown", new Set[""]],
  ["Nepal", new Set[""]],
  ["New Junk City", new Set[""]],
  ["New Queen Street", new Set[""]],
  ["Numbani", new Set[""]],
  ["Oasis", new Set[""]],
  ["Paraíso", new Set[""]],
  ["Rialto", new Set[""]],
  ["Route 66", new Set[""]],
  ["Runasapi", new Set[""]],
  ["Samoa", new Set[""]],
  ["Shambali Monastery", new Set[""]],
  ["Suravasa", new Set[""]],
  ["Throne of Anubis", new Set[""]],
  ["Watchpoint: Gibraltar", new Set[""]]
])


