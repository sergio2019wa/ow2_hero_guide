import data from '../JSON/tank_info.json' assert { type: 'json' };


function myFunction() {
    if(document.getElementById("demo").style.color == "black") {
        document.getElementById("demo").style.color = "red"
    } else {
        document.getElementById("demo").style.color = "black"
    }
}

function createRecsV1 () {
    console.log(data)
}