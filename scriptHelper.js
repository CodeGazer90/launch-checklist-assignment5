// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

//add validation to notify the user if they forgot to enter a value for any one of the fields.

function validateInput(testInput) {
   let pilotNameInput = document.querySelector("input[name=pilotName]");
   let copilotNameInput = document.querySelector("input[name=copilotName]");
   let fuelLevel = document.querySelector("input[name=fuelLevel]");
   let cargoMass = document.querySelector("input[name=cargoMass]");

   if(pilotNameInput.value === "" || copilotNameInput.value === "" || fuelLevel.value === "" || cargoMass.value === ""){
    alert("Empty");
   }else if(typeof pilotNameInput !== 'string' || typeof copilotNameInput !== 'string'){
    alert('Not A Number');
   }else if (isNaN(fuelLevel) || isNaN(cargoMass)){
    alert('Is a Number');
   }

   
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   let form = document.querySelector('form');
   form.addEventListener('submit', function(event){
    validateInput();
    event.preventDefault();

   })
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
